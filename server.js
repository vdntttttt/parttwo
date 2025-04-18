const express = require("express");
const cors = require("cors");
const app = express();

// Use the dynamic port assigned by Render, or default to 3000 for local development
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());

app.post("/api/find-reels", async (req, res) => {
  const { reelLink } = req.body;

  if (!reelLink || !reelLink.includes("instagram.com/reel/")) {
    return res.status(400).json({ error: "Invalid reel link" });
  }

  try {
    const fakeUsername = "creator123"; // Simulate extracting the username
    const base = `https://instagram.com/reel/`;

    // Simulated dummy links — replace this logic with real scraping or API later
    const reels = Array.from({ length: 5 }, (_, i) => `${base}${fakeUsername}_part${i + 2}`);

    res.json({ reels });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
