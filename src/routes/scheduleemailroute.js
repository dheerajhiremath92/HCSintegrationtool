import express, { response, Router } from "express";

import { ConsentY } from "../controllers/emailschedule.js";
const router = express.Router();

router.post("/api/scheduleemail", ConsentY);
// module.exports = router;

export { router as scheduleemailrouter };
