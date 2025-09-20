import { Router } from "express";
import {
  alllawyers,
  cancelAppointment,
  createlawyer,
  singlelawyer,
  lawyerProfile,
  loginlawyer,
  updatelawyer,
  addAllLawyers,
} from "../Controller/Lawyer.Controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/lawyerprofile", authMiddleware, lawyerProfile);
router.get("/alllawyers", alllawyers);
router.get("/addAllLawyers",addAllLawyers)
router.get("/singlelawyer", singlelawyer);
router.post("/signup", createlawyer);
router.post("/login", loginlawyer);
router.patch("/update", authMiddleware, updatelawyer);
router.delete("/allappointments/:id", authMiddleware, cancelAppointment);

export default router;
