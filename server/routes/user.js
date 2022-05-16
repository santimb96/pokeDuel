const express = require("express");
const userController = require("../controllers/userController");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const router = express.Router();

router
  .get("/", userController.getAll)
  .get("/:id", userController.findId)
  .post("/", upload.single('avatar'), userController.create)
  .put("/:id", upload.single('avatar'), userController.updateById)
  .delete("/:id", userController.deleteById)

  .post('/login', userController.login)
  .post('/autologin', userController.autoLogin);

module.exports = router;