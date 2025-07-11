import mongoose from "mongoose";
import dotenv from "dotenv";
import Machine from "../models/Machine";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "";

const machines = [
  {
    name: "Robot Soldador D4",
    status: "working",
    temperature: 60,
    lastMaintenance: "2025-07-01",
    maintenanceHistory: [
      { date: "2025-07-01", description: "Revisión eléctrica" },
      { date: "2025-05-01", description: "Cambio de electrodos" },
    ],
    errorLogs: [],
    uptimeHours: 1200,
    location: "Planta 4 - Línea 2",
    technician: {
      name: "Carlos Martínez",
      email: "carlos@empresa.com",
      phone: "555-777-888"
    },
    energyConsumption: 850,
    alerts: []
  },
  {
    name: "Prensa Hidráulica B2",
    status: "idle",
    temperature: 30,
    lastMaintenance: "2025-06-15",
    maintenanceHistory: [
      { date: "2025-06-15", description: "Cambio de aceite" }
    ],
    errorLogs: [],
    uptimeHours: 900,
    location: "Planta 2 - Línea 1",
    technician: {
      name: "Laura Gómez",
      email: "laura@empresa.com",
      phone: "555-111-222"
    },
    energyConsumption: 600,
    alerts: []
  },
  {
    name: "Corte Láser A1",
    status: "error",
    temperature: 95,
    lastMaintenance: "2025-06-20",
    maintenanceHistory: [
      { date: "2025-06-20", description: "Revisión de lentes" }
    ],
    errorLogs: [
      { timestamp: "2025-07-10T10:00:00Z", message: "Fallo de enfriamiento" }
    ],
    uptimeHours: 1500,
    location: "Planta 1 - Línea 3",
    technician: {
      name: "Miguel Torres",
      email: "miguel@empresa.com",
      phone: "555-333-444"
    },
    energyConsumption: 1200,
    alerts: ["Temperatura crítica"]
  },
  {
    name: "Fresadora CNC F5",
    status: "working",
    temperature: 40,
    lastMaintenance: "2025-06-10",
    maintenanceHistory: [
      { date: "2025-06-10", description: "Ajuste de husillo" }
    ],
    errorLogs: [],
    uptimeHours: 800,
    location: "Planta 3 - Línea 1",
    technician: {
      name: "Sofía Ruiz",
      email: "sofia@empresa.com",
      phone: "555-999-000"
    },
    energyConsumption: 500,
    alerts: []
  }
];

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
