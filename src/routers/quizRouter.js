import { Router } from "express";
import { quizController } from "../controllers/quizController.js";

const quizRouter = Router();

quizRouter.get("/api/quiz", quizController);

export { quizRouter };
