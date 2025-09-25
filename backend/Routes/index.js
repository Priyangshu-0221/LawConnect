import { Router } from "express";
import clientRoutes from "./client.Route.js";
import lawyerRoutes from "./lawyer.Route.js";
import reviewRoutes from "./review.Route.js";
import appointmentRoutes from "./appointment.Route.js";

const router = Router();

router.use("/api/client", clientRoutes);
router.use("/api/lawyer", lawyerRoutes);
router.use("/api/new", appointmentRoutes);
router.use("/api/review", reviewRoutes);

export default router;
