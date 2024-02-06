const mongoose = require("mongoose")

const ExamSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	patientId: String,
	age: Number,
	sex: String,
	zipCode: String,
	bmi: Number,
	__v: Number,
	examId: String,
	keyFindings: String,
	brixiaScores: String,
	imageURL: String,
})

module.exports = mongoose.model("Exam", ExamSchema)
