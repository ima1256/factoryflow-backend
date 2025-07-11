import mongoose from "mongoose";
import dotenv from "dotenv";
import Machine from "../models/Machine";
import { machines } from "../data/machines";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "";



async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Conectado a MongoDB");

    // Limpia la colección antes de insertar (opcional)
    await Machine.deleteMany({});
    console.log("🧹 Colección limpiada");

    await Machine.insertMany(machines);
    console.log("✅ Máquinas insertadas correctamente");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
