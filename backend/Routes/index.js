import { Router } from "express";
import PatientRoutes from "./patient.Route.js";
import doctorRoutes from "./doctor.Route.js";
import appointmentRoutes from "./appointment.Route.js";

const router = Router();

router.use("/api/patient", PatientRoutes);
router.use("/api/doctor", doctorRoutes);
router.use("/api/new", appointmentRoutes);

export default router;
