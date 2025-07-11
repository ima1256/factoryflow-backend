import express from "express";
import dotenv from "dotenv";
import machinesRoutes from "./routes/machines";

import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/machines", machinesRoutes);

export default app;
