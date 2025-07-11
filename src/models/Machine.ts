import { Schema, model } from "mongoose";

const machineSchema = new Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ["working", "idle", "error"], default: "idle" },
  temperature: Number,
  lastMaintenance: String,
  maintenanceHistory: [
    {
      date: String,
      description: String,
    },
  ],
  errorLogs: [
    {
      timestamp: String,
      message: String,
    }
  ],
  uptimeHours: Number,
  location: String,
  technician: {
    name: String,
    email: String,
    phone: String,
  },
  energyConsumption: Number,
  alerts: [String],
});

const Machine = model("Machine", machineSchema);
export default Machine;
