const Visitor = require("../models/Visitor");

// Add a new visitor (form submission)
const addVisitor = async (req, res) => {
  try {
    const { username, phone, email, date, property } = req.body;

    if (!username || !phone || !email || !date || !property) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newVisitor = new Visitor({ username, phone, email, date, property });
    const savedVisitor = await newVisitor.save();

    res.status(201).json({
      message: "Visitor form submitted successfully",
      visitor: savedVisitor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all visitors (for admin dashboard)
const getVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ createdAt: -1 });
    res.status(200).json(visitors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addVisitor, getVisitors };
