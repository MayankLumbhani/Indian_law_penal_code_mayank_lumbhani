import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
}));

app.use(express.json());

app.use("/api/v1", router);

export default app;