import Exam from "../models/ExamSchema.js"

export const getAllExams = async (req, res) => {
	try {
		const exams = await Exam.find()
		res.status(200).json(exams)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

export const getExamById = async (req, res) => {
	const { id } = req.params
	try {
		const exam = await Exam.findById(id)
		if (!exam) {
			return res.status(404).json({ message: "Exam not found" })
		}
		res.status(200).json(exam)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

export const getExamsByPatientId = async (req, res) => {
	const { patientId } = req.params
	console.log(`Fetching exams for patientId: ${patientId}`)
	try {
		const exams = await Exam.find({ patientId })
		console.log(`Found ${exams.length} exams for patientId: ${patientId}`)
		if (!exams) {
			return res.status(404).json({ message: "Exams not found" })
		}
		res.status(200).json(exams)
	} catch (error) {
		console.error(`Error fetching exams for patientId: ${patientId}`, error)
		res.status(500).json({ message: error.message })
	}
}
