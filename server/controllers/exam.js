import MGHData from "../models/ExamSchema.js"
import mongoose from "mongoose"

export const getAllExams = async (req, res) => {
	try {
		const exams = await MGHData.find({}).sort({ createdAt: -1 })
		res.status(200).json(exams)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

export const getExamById = async (req, res) => {
	const { patientId, examId } = req.params

	console.log(
		`Fetching details for examId: ${examId} and patientId: ${patientId}`
	)
	try {
		const exam = await MGHData.findOne({ patientId, examId })
		if (!exam) {
			return res.status(404).json({ message: "Exam not found" })
		}
		res.status(200).json(exam)
	} catch (error) {
		console.error(
			`Error fetching details for examId: ${examId} and patientId: ${patientId}`,
			error
		)
		res.status(500).json({ message: error.message })
	}
}

export const getExamsByPatientId = async (req, res) => {
	const { patientId } = req.params
	console.log(`Fetching exams for patientId: ${patientId}`)
	try {
		const exams = await MGHData.find({ patientId })
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

export const createExam = async (req, res) => {
	const {
		patientId,
		age,
		sex,
		zipCode,
		bmi,
		examId,
		keyFindings,
		brixiaScores,
		imageURL,
	} = req.body
	try {
		const exam = await MGHData.create({
			_id: new mongoose.Types.ObjectId(),
			patientId,
			age,
			sex,
			zipCode,
			bmi,
			examId,
			keyFindings,
			brixiaScores,
			imageURL,
		})
		res.status(200).json(exam)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

export const deleteExam = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such exam" })
	}
	const exam = await MGHData.findByIdAndDelete({ _id: id })
	if (!exam) {
		return res.status(400).json({ message: "MGHData not found" })
	}
	res.status(200).json(exam)
}

/*
// OLD PATCH CONTROLLER
export const updateExam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such exam" });
    }

    try {
        const exam = await MGHData.findByIdAndUpdate({ _id: id })

        if (!exam) {
            return res.status(400).json({ message: "MGHData not found" });
        }

        res.status(200).json(exam);
    } catch (error) {
        console.error("Error updating exam:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
*/

// NEW PUT CONTROLLER
// export const updateExam = async (req, res) => {
// 	const { patientId, examId } = req.params

// 	try {
// 		const updatedExam = await MGHData.findOneAndUpdate(
// 			{ patientId, examId },
// 			req.body,
// 			{ new: true }
// 		)

// 		if (!updatedExam) {
// 			return res.status(404).json({ message: "Exam not found" })
// 		}

// 		res.status(200).json(updatedExam)
// 	} catch (error) {
// 		console.error("Error updating exam:", error)
// 		res.status(500).json({ message: "Internal server error" })
// 	}
// }

export const updateExam = async (req, res) => {
	const { patientId, examId } = req.params
	const updateFields = req.body

	try {
		const updatedExam = await MGHData.findOneAndUpdate(
			{ patientId, examId },
			updateFields,
			{ new: true }
		)

		if (!updatedExam) {
			return res.status(404).json({ error: "No such exam" })
		}

		res.status(200).json(updatedExam)
	} catch (error) {
		console.error("Error updating exam:", error)
		res.status(500).json({ message: "Internal server error" })
	}
}
