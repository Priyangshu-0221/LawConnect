import { Router } from "express";
import {
  alllawyers,
  createlawyer,
  singlelawyer,
  lawyerProfile,
  loginlawyer,
  updatelawyer,
} from "../Controller/Lawyer.Controller.js";
// Route for lawyer avatar upload
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

const router = Router();
router.post("/avatar", authMiddleware, upload.single("avatarimage"), updatelawyer);
router.get("/lawyerprofile", authMiddleware, lawyerProfile);
router.get("/alllawyers", alllawyers);
// router.get("/addAllLawyers",addAllLawyers)
router.get("/singlelawyer", singlelawyer);
router.post("/signup", createlawyer);
router.post("/login", loginlawyer);
router.patch("/update", authMiddleware, updatelawyer);

export default router;
