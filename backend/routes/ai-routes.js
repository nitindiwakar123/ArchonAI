import {Router} from 'express';
import {generateInterviewQuestions, generateConceptExplanation, getSessionById} from "../controller/ai-controller.js";

const router = Router();

router.post('/generate-questions', generateInterviewQuestions);
router.post('/generate-concept-explanation', generateConceptExplanation);
router.get('/session/:id', getSessionById);

export default router;