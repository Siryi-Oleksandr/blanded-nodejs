const express = require("express");
const router = express.Router();
const { signup, login, logout } = require("../controllers/authControllers");
const {
  createUserValidationSchema,
  loginValidationSchema,
} = require("../utils/validation/authValidationSchemas");
const validateBody = require("../utils/validateBody");

router.post("/signup", validateBody(createUserValidationSchema), signup);
router.post("/login", validateBody(loginValidationSchema), login);
router.post("/logout", logout);

module.exports = { authRouter: router };
