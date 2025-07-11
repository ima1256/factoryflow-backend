import express from "express";
import dotenv from "dotenv";
import machinesRoutes from "./routes/machines";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/machines", machinesRoutes);

export default app;
