const express = require("express");
const router = express.Router();

const alumnireg = require("./controllers/alumniform/alumnireg");
const Login = require("./controllers/login/login");

router.post("/alumniform",alumnireg);
router.post("/logincredentials",Login);

module.exports = router;
