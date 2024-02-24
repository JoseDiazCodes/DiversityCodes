import express from "express"
import {
	getAllExams,
	getSingleExam,
	postNewExam,
	deleteExam,
	updateExistingExam,
	getExamById,
} from "../controllers/exam.js"

const router = express.Router()

router.get("/", getAllExams)
router.get("/:id", getSingleExam)
router.post("/", postNewExam)
router.delete("/:id", deleteExam)
router.patch("/:id", updateExistingExam)
router.get("/patient/:examId", getExamById)

export default router
// Define a route for getting a specific exam by its ID
// When this file is used with '/api/exams' in app.js, this route will be '/api/exams/patient/:examId'
