import { Router } from "express";
import {
  appointmentForm,
  cancelAppointment,
  clientAppointment,
  lawyercancelAppointment,
  lawyersAppointment,
  makePayment,
  paymentSuccess,
} from "../Controller/Appointment.Controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import lawyerAuth from "../middlewares/lawyerAuth.js";

const router = Router();
router.post(
  "/appointment",
  authMiddleware,
  upload.single("documents"),
  appointmentForm
);
router.post("/create-checkout-session", authMiddleware, makePayment );
router.post("/payment-success", authMiddleware, paymentSuccess);
router.get("/myappointments", authMiddleware, clientAppointment);
router.get("/lawyer/appointment/:id", authMiddleware, lawyersAppointment);
router.delete("/appointment/delete/:id", authMiddleware, cancelAppointment);
router.delete("/lawyer/delete/:id",lawyerAuth , lawyercancelAppointment);

export default router;
