import { Router } from "express";
import {
  allDoctors,
  cancelAppointment,
  createDoctor,
  singleDoctor,
  doctorProfile,
  loginDoctor,
  updateDoctor,
} from "../Controller/Doctor.Controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/doctorprofile", authMiddleware, doctorProfile);
router.get("/alldoctors", allDoctors);
router.get("/singledoctor", singleDoctor);
router.post("/signup", createDoctor);
router.post("/login", loginDoctor);
router.patch("/update", authMiddleware, updateDoctor);
router.delete("/allappointments/:id", authMiddleware, cancelAppointment);

export default router;
