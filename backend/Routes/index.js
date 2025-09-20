import { Router } from "express";
import clientRoutes from "./client.Route.js";
import lawyerRoutes from "./lawyer.Route.js";
import appointmentRoutes from "./appointment.Route.js";

const router = Router();

router.use("/api/client", clientRoutes);
router.use("/api/lawyer", lawyerRoutes);
router.use("/api/new", appointmentRoutes);

export default router;
