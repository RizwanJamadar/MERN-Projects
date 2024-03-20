import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import requestRoute from "./routes/leaveRequest.route.js"
import upload from "./utils/upload.js";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

// middleware
app.use(cors())
app.use(cookieParser())
app.use(express.static("public"))
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/leaveRequest", requestRoute);

app.post('/request-leave', upload.single('attachment'), async (req, res, next) => {
    try {
      console.log(req.file); // Log the uploaded file
      console.log(req.body); // Log the request body
  
      // Your existing code to handle the leave request goes here...
    } catch (error) {
      next(error);
    }
});

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
});