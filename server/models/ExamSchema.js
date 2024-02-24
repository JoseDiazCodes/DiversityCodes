import mongoose from "mongoose"

const ExamSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	patientId: String,
	age: Number,
	sex: String,
	zipCode: String,
	bmi: Number,
	latestWeight: Number,
	examId: String,
	keyFindings: String,
	brixiaScores: String,
	imageURL: String,
	ICU_Admit: String,
	numberOfAdmits: Number,
	mortality: String,
	keyFindings: String,
	additionalNotes: String,
})

export default mongoose.model("Exam", ExamSchema)
