import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import logger from "./src/middlewares/logger.middleware.js";
import { globalLimiter } from "./src/middlewares/rateLimit.middleware.js";
import errorMiddleware from "./src/middlewares/error.middleware.js";

const app = express();

app.set("trust proxy", 1);

// ── CORS — allow frontend origins + handle browser preflight (OPTIONS) ──────
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ── Body parser ──────────────────────────────────────────────────────────────
app.use(express.json());

// ── Request logger ───────────────────────────────────────────────────────────
app.use(logger);

// ── Global rate limiter ──────────────────────────────────────────────────────
app.use(globalLimiter);

// ── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/v1", router);

// ── Global error handler (MUST be last) ─────────────────────────────────────
app.use(errorMiddleware);

export default app;