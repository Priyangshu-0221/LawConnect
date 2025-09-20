import { Router } from "express";
import {
  createclient,
  loginclient,
  singleclient,
  updateclient,
} from "../Controller/Client.Controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/profile", authMiddleware, singleclient);
router.post("/signup", createclient);
router.post("/login", loginclient);
router.patch("/profile/update", authMiddleware, updateclient);

export default router;
