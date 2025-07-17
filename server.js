import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from "cors"
import openaiRoutes from "./routes/OpenAIroutes.js"
// config env
dotenv.config();

// connect database
connectDB();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/openai", openaiRoutes);

// test route
app.get('/', (req, res) => {
  res.send("<h1>Welcome to ECOMMERCE WEB APP!!</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgBlue.white
  );
});
