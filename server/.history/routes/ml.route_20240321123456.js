import express  from "express";
const router = express.Router();

router.post('/recommend-leave', recommendLeave);

export default router;
