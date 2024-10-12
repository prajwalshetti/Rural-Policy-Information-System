const express = require("express");
const Query = require("../models/query");

const router = express.Router();

router.put("/", async (req, res) => {
  try {
    const newQuery = new Query(req.body);
    const savedQuery = await newQuery.save();
    res.status(201).json(savedQuery);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create query" });
  }
});

// Get all policy
router.get("/", async (req, res) => {
  try {
    const queries = await Query.find({});
    console.log(queries);
    res.status(201).json(queries);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get query" });
  }
});

router.put("/edit", async (req, res) => {
  try {
    const { queryId, status } = req.body;
    const query = await Query.findByIdAndUpdate(queryId, { status: status }, { new: true });
    res.status(201).json(query);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get query" });
  }
});

module.exports = router;
