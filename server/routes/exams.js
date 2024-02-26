import express from "express"
import {
	createExam,
	getAllExams,
	getExamById,
	getExamsByPatientId,
	deleteExam,
	updateExam,
} from "../controllers/exam.js"

const router = express.Router()

router.get("/", getAllExams)
router.get("/patient/:patientId", getExamsByPatientId)
router.get("/exam/:examId", getExamById)
router.post("/", createExam)
router.delete("/:id", deleteExam)
router.patch("/:id", updateExam)


export default router

// router.get("/exam/:id", getExamById)
// router.get("/patient/:patientId", getExamsByPatientId)
