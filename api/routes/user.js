const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router
  .get("/", userController.getAll)
  .get("/:id", userController.findId)
  .post("/", userController.create)
  .post("/login", userController.login)
  .post("/autologin", userController.autoLogin)
  .put("/:id", userController.updateById)
  .delete("/:id", userController.deleteById);

module.exports = router;
