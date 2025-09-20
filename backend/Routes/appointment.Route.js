import { Router } from "express";
import {
  appointmentForm,
  cancelAppointment,
  clientAppointment,
} from "../Controller/Appointment.Controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

const router = Router();
router.post(
  "/appointment",
  authMiddleware,
  upload.single("documents"),
  appointmentForm
);

router.get("/myappointments", authMiddleware, clientAppointment);
router.delete("/appointment/delete/:id", authMiddleware, cancelAppointment);

export default router;
