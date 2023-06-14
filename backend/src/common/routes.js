const express = require("express");
const router = express.Router();

const userRoutes = require("../resources/users/routes");
const courseRoutes = require("../resources/courses/routes");
const completionRoutes = require("../resources/completions/routes");

router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use("/completions", completionRoutes);
module.exports = router;
