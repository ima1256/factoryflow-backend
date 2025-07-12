import express from "express";
import dotenv from "dotenv";
import machinesRoutes from "./routes/machines";
import pingRoutes from "./routes/ping";

import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} desde ${
      req.ip
    }`
  );
  next();
});

app.use("/api/machines", machinesRoutes);
app.use("/api/ping", pingRoutes);

export default app;
