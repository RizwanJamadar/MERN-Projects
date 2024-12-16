import express  from "express";
const router = express.Router();
import recommendLeave from "../controllers/ml.controller.js"

router.post('/recommend-leave', recommendLeave);

export default router;
