import express from "express";
import { getMembers } from "../controllers/members.js";
const router = express.Router();

router.get("/member", getMembers);

export default router;
