const express = require("express");
const userController = require("../controllers/userControllers");
const { check } = require("express-validator");

const router = express.Router();

router.get("/getAllUser", [
    check("name").not().isEmpty(),
    check("phoneNumber").isLength({ min: 10, max: 10 }),
    check("email")
      .normalizeEmail() // Test@test.com => test@test.com
      .isEmail(),
    check("address").not().isEmpty(),
    check("state").not().isEmpty(),
    check("mobile").isLength({ min: 10, max: 10 }),
    check("mobile_sec").isLength({ min: 10, max: 10 }),
    check("job").not().isEmpty(),
    check("city").not().isEmpty(),
  ], userController.getAllUser);

router.post("/createUser", userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser);

router.patch(
  "/:id",[
    check("name").not().isEmpty(),
    check("phoneNumber").isLength({ min: 10, max: 10 }),
    check("email")
      .normalizeEmail() // Test@test.com => test@test.com
      .isEmail(),
    check("address").not().isEmpty(),
    check("state").not().isEmpty(),
    check("mobile").isLength({ min: 10, max: 10 }),
    check("mobile_sec").isLength({ min: 10, max: 10 }),
    check("job").not().isEmpty(),
    check("city").not().isEmpty(),
  ],
  userController.updateUser
);

module.exports = router;