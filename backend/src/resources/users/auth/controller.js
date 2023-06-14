const asyncHandler = require("express-async-handler");
const logger = require("../../../common/logger"),
  bcrypt = require("bcrypt");
const userModel = require("../model");
const DAL = require("../../../common/dal"),
  UserDAL = DAL(userModel);
const jwtGen = require("../../../helpers/jwtGen");
const createUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    res.statusCode = 400;
    throw new Error(
      `Fields: ${firstname ? "" : "firstname, "}${
        lastname ? "" : "lastname, "
      }${email ? "" : "email, "}${password ? "" : "password"} should be filled.`
    );
  }

  const userExists = await UserDAL.getOne({ email });
  if (userExists) {
    res.statusCode = 400;
    throw new Error("User with this email exists already.");
  }

  const newUser = await UserDAL.createOne({
    firstname,
    lastname,
    email,
    password,
  });

  const { password: userPassword, ...userDetails } = newUser._doc;
  const refreshToken = await jwtGen(userDetails._id, true);
  const accessToken = await jwtGen(userDetails._id);
  res.tokens = {
    refreshToken,
    accessToken,
  };
  res.status(201).json({
    userDetails,
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.statusCode = 400;
    throw new Error(
      `Fields: ${email ? "" : "email, "}${
        password ? "" : "password"
      } should be filled.`
    );
  }

  const userExists = await UserDAL.getOne({ email });
  if (!userExists || !(await bcrypt.compare(password, userExists.password))) {
    res.statusCode = 400;
    throw new Error("Credential error");
  }
  const { password: userPassword, ...userDetails } = userExists._doc;
  const refreshToken = await jwtGen(userDetails._id, true);
  const accessToken = await jwtGen(userDetails._id);
  res.tokens = {
    refreshToken,
    accessToken,
  };
  res.status(200).json({
    userDetails,
  });
});
module.exports = {
  createUser,
  login,
};
