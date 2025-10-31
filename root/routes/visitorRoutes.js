const express = require("express");
const { addVisitor, getVisitors } = require("../controllers/visitorController");

const router = express.Router();

router.post("/add", addVisitor);
router.get("/", getVisitors);

module.exports = router;

