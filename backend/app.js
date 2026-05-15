const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const routes = require("./src/routes/index");
const errorMiddleware = require("./src/middlewares/error.middleware");
const logger = require("./src/middlewares/logger.middleware");
const { globalLimiter } = require("./src/middlewares/rateLimit.middleware");

const app = express();

// ─── Core Middlewares ────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(logger);
app.use(globalLimiter);

// ─── Health Check ────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "⚖️ Indian Legal API is running",
    version: "v1",
    docs: "/api/v1",
  });
});

// ─── API Routes ──────────────────────────────────────────
app.use("/api/v1", routes);

// ─── 404 Handler ─────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// ─── Global Error Handler ────────────────────────────────
// Must be last — 4 parameters signature is required by Express
app.use(errorMiddleware);

module.exports = app;