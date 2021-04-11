const { check } = require("express-validator");
const { logIn, signUp } = require("../controllers/auth");
const router = require("express").Router();

router.post("/login", logIn);
router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({
      min: 3,
    }),
  ],
  signUp
);
module.exports = router;
