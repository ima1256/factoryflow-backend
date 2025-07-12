import { Router, Request, Response } from "express";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  console.log(`Ping recibido a / desde ${_req.ip}`);
  res.send("Ping recibido, aqui va el pong");
});

export default router;
