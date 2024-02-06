import Exam from "../models/ExamSchema.js"

export const getAllExams = async (req, res) => {
	try {
		const exams = await Exam.find()
		res.status(200).json(exams)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}
