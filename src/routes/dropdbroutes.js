import express, { Router } from "express";
import { dropemaildb, droppatientdb } from "../controllers/dropdbs.js";
const router = express.Router();
router.post("/api/droppatientdb", droppatientdb);
router.post("/api/dropemaildb", dropemaildb);

export { router as dropdbrouter };
