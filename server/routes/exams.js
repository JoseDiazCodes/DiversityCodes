// Import the necessary functions from your controller
import express from "express"
import { getAllExams, getExamById } from "../controllers/exam.js"
const router = express.Router()

// Define a route for getting all exams
// When this file is used with '/api/exams' in app.js, this route will be '/api/exams/'
router.get("/", getAllExams)

// Define a route for getting a specific exam by its ID
// When this file is used with '/api/exams' in app.js, this route will be '/api/exams/patient/:examId'
router.get("/patient/:examId", getExamById)

export default router
