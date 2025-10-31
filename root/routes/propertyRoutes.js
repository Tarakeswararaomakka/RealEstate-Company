const express = require("express");
const {
  addProperty,
  getProperties,
} = require("../controllers/propertyController");

const router = express.Router();

router.post("/add", addProperty);
router.get("/", getProperties);

module.exports = router;
