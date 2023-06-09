const express = require("express"),
  mongoose = require("mongoose"),
  router = require("./common/routes"),
  dotenv = require("dotenv");
const logger = require("./common/logger"),
  errorHandler = require("./middlewares/errorHandler");
dotenv.config();

console.log(process.env.MONGODB_URL);
mongoose.connection.on("connecting", function () {
  logger.info("trying to establish a connection to mongo");
});

mongoose.connection.on("connected", function () {
  logger.info("connection established successfully");
});
mongoose.connection.on("error", function (err) {
  logger.error("connection to mongo failed " + err);
});

mongoose.connect(process.env.MONGODB_URL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let original = express.response.json;
express.response.json = async function (obj) {
  // logger.info("this is getting called");
  if (this.tokens) {
    // logger.info("calling this".white);

    if (obj._doc) {
      obj._doc.tokens = this.tokens;
    } else {
      obj.tokens = this.tokens;
    }
  }
  return await original.call(this, obj);
};
app.get("/", (req, res) => {
  res.send("It's working fine");
});

app.use(router);
app.use(errorHandler);

module.exports = app;
