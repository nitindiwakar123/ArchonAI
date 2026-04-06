import express from "express";
import authRoutes from "./routes/auth-route.js";
import sessionRoutes from "./routes/session-route.js";
import aiRoutes from "./routes/ai-routes.js";
import cors from "cors";
import { connectDB } from "./config/database-config.js";
import { protect } from "./middlewares/auth-middleware.js";

const app = express();
const PORT = process.env.PORT || 4000;

await connectDB();

app.use(cors({
  origin: process.env.CLIENT_URI || "https://archon-ai-zeta.vercel.app"
}));

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); 

app.use("/api/auth/", authRoutes); // Protect the auth routes
app.use("/api/sessions/", sessionRoutes); // Protect the session routes
app.use("/api/ai/", protect, aiRoutes); // Protect the AI routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});