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

// Añadimos esta opción para que al hacer JSON el modelo devuelva id en lugar de _id
machineSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    return {
      ...ret,
      id: ret._id,
      _id: undefined,  // en vez de delete
    };
  },
});


const Machine = model("Machine", machineSchema);
export default Machine;
