//import { getAllExams } from "../controllers/exam.js"
//router.get("/exams", getAllExams)

const express = require('express')
const ExamSchema = require('../models/ExamSchema')
const {
    createExam,
    getAllExams,
    getExamById,
    deleteExam,
    updateExam
} = require('../controllers/exam')

const router = express.Router()

// GET all exams 
router.get('/', getAllExams)

// GET single exam
router.get('/:id', getExamById)

// POST a new exam
router.post('/', createExam) 

// DELETE a exam
router.delete("/:id", deleteExam)

// UPDATE a exam
router.patch("/:id", updateExam)

module.exports = router
