import { Router, Request, Response } from "express";
import Machine from "../models/Machine";

const router = Router();

// GET todas las máquinas
router.get("/", async (_req: Request, res: Response) => {
  const machines = await Machine.find();
  res.json(machines);
});

// GET máquina por ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const machine = await Machine.findById(req.params.id);
    if (!machine) return res.status(404).json({ message: "Machine not found" });
    res.json(machine);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

// POST nueva máquina
router.post("/", async (req: Request, res: Response) => {
  try {
    const machine = new Machine(req.body);
    await machine.save();
    res.status(201).json(machine);
  } catch (error) {
    res.status(400).json({ message: "Error al crear la máquina", error });
  }
});

// PUT actualizar máquina por ID
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const updatedMachine = await Machine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMachine) return res.status(404).json({ message: "Machine not found" });
    res.json(updatedMachine);
  } catch {
    res.status(400).json({ message: "Invalid update data or ID" });
  }
});

// DELETE eliminar máquina
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deletedMachine = await Machine.findByIdAndDelete(req.params.id);
    if (!deletedMachine) return res.status(404).json({ message: "Machine not found" });
    res.json({ message: "Machine deleted", id: req.params.id });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

export default router;
