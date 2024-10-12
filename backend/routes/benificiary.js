const express = require("express");
const Benificiary = require("../models/benificiary");

const router = express.Router();

// Create a new benificary
router.put("/", async (req, res) => {
  try {
    const newBenificiary = new Benificiary(req.body);
    const savedBenificiary = await newBenificiary.save();
    res.status(201).json(savedBenificiary);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to intiaize benificiary" });
  }
});

// Get list of benificiary
router.get("/", async (req, res) => {
  try {
    const query = req.body;
    const benificiaries = await Benificiary.find(query).populate("applications");
    res.json(benificiaries);
  }     
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get benificiary" });
  }
});

module.exports = router;
