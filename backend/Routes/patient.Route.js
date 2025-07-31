import { Router } from "express";
import {
  createPatient,
  loginPatient,
  singlePatient,
  updatePatient,
} from "../Controller/Patient.Controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/profile", authMiddleware, singlePatient);
router.post("/signup", createPatient);
router.post("/login", loginPatient);
router.patch("/profile/update", authMiddleware, updatePatient);

export default router;
