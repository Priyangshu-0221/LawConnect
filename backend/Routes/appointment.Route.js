import { Router } from "express";
import {
  appointmentForm,
  cancelAppointment,
  patientAppointment,
} from "../Controller/Appointment.Controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

const router = Router();
router.post(
  "/appointment",
  authMiddleware,
  upload.single("prescription"),
  appointmentForm
);

router.get("/myappointments", authMiddleware, patientAppointment);
router.delete("/appointment/delete/:id", authMiddleware, cancelAppointment);

export default router;
