import express from "express";
import { getMembers } from "../controllers/burgers";
const router = express.Router();

router.get("/member", getMembers);

export default router;
