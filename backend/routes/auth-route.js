import express from "express";

import {
  loginUser,
  registerUser,
  getCurrentUser,
} from "../controller/auth-controller.js";



const router = express.Router();

// Auth Routes
// router.get("/profile", getUserProfile); // Get User Profile
router.get("/user", getCurrentUser); // Get Current User
router.post("/signup", registerUser); // Register User
router.post("/login", loginUser); // Login User


export default router;
