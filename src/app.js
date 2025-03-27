const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World, Chando");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "https://toufu-ai-code-reviewer.netlify.app",
      "http://localhost:3000", // backend
      "http://localhost:5173", // <-- frontend Vite dev server
    ],
    credentials: true,
  })
);

app.use("/ai", aiRoutes);

module.exports = app;
