import { test } from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.get("/", test);

export default router;