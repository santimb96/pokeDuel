const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router
  .get("/", userController.getAll)
  .get("/:id", userController.findId)
  .post("/", userController.create)
  .put("/:id", userController.updateById)
  .delete("/:id", userController.deleteById)

  .post('/login', userController.login)
  .post('/register', userController.create)
  .post('/autologin', userController.autoLogin);

module.exports = router;