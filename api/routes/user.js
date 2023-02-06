const express = require("express");
const multer = require("multer");
const userController = require("../controllers/userController");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router
  .get("/", userController.getAll)
  .get("/:id", userController.findId)
  .post("/", upload.single("avatar"), userController.create)
  .post("/login", userController.login)
  .post("/autologin", userController.autoLogin)
  .put("/:id", userController.updateById)
  .delete("/:id", userController.deleteById);

module.exports = router;
