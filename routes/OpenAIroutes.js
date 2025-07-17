import express from "express";
import {
  summaryController,

  paragraphController,
  chatbotController,
  jsConverterController,
  imageController,
} from "../controller/openaicontroller.js";

const router = express.Router();

// Routes
router.post("/summary", summaryController);

router.post("/paragraph", paragraphController);
router.post("/chat", chatbotController);
router.post("/convert-js", jsConverterController);
router.post("/scifi-image", imageController);


export default router;
