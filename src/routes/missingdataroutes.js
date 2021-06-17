import express, { response, Router } from "express";
import { missingEmail, missingFname } from "../controllers/missingdata.js";
const router = express.Router();
// router.get("/missingFname", missingFname);

router.get("/api/missingemail", missingEmail);
router.get("/api/missingfirstname", missingFname);
// module.exports = router;

export { router as missingdatarouter };
