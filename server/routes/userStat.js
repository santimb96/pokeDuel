const express = require("express");
const userStatController = require("../controllers/userStatController");

const router = express.Router();

router
  .get("/", userStatController.getAll)
  .get("/:id", userStatController.findId)
  .post("/", userStatController.create)
  .put("/:id", userStatController.updateById)
  .delete("/:id", userStatController.deleteById)

module.exports = router;