const express = require("express");
const router = express.Router();
const aiService = require("../services/ai.services");

router.post("/get-review", async (req, res) => {
  const { prompt } = req.body; // ✅ Extract prompt from req.body

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await aiService(prompt);
    res.json({ message: response });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

module.exports = router;
