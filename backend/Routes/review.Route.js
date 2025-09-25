import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { addReview, allReviews } from "../Controller/Review.Controller.js";

const router = Router();

router.post("/addreview", authMiddleware, addReview);
router.get("/getreviews", allReviews);

export default router;
