const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

//v1 router

const v1 = express.Router();

v1.get("/",(req, res) => {
    res.json({
        message:"Welcome to TaskFlow API 🚀"
    });
});

v1.get("/health", (req, res) => {
  res.json({status: "ok", message: "TaskFlow API is running"});
});
app.use("/v1", v1);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});