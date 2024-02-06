/* API EndPoints
~ GET /exams --> get all exam documents 
~ POST /exams --> create a new exam document
~ GET /exams/:id --> get a single exam document
~ DELETE /exams:id  --> deletes a single exam
~ PATCH /exams/:id --> udates a sing exam
*/

//import { getAllExams } from "../controllers/exam.js"
//router.get("/exams", getAllExams)

const express = require('express')
const router = express.Router()

// GET all exams
router.get('/', (req, res) => {
    res.json({mssg: "GET all exams"})
})

// GET a single exam
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single exam'})
})

// POST a new exam
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new exam'})
})

// DELETE a exam
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a exam'})
})

// UPDATE a exam
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a exam'})
})

module.exports = router