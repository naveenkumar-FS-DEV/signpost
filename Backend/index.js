import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Database/connectDB.js";
import emailRoutes from "./routes/emailRoutes.js"; // Import the email routes

const app = express();

dotenv.config();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  Credentials: true,
}));
app.use(express.json());

connectDB();

// Use the email routes under a common endpoint, e.g., /api
app.use("/api", emailRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
