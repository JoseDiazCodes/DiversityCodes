import ExamSchema from "../models/ExamSchema.js";
//import Exam from "../models/ExamSchema.js";
const mongoose = require('mongoose')

export const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find({}).sort({createdAt: -1});
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExamById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
	return res.status(404).json({error: "Exam does not exist"})
  }
  try {
    const exam = await ExamSchema.findById(id);
    if (!exam) {
      return res.status(404).json({error: "Exam not found" });
    }
    res.status(200).json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createExam = async (req, res) => {
	const {patientId, age, sex} = req.body
	// add document to db
    try {
      const exam = await ExamSchema.create({patientId, age, sex})   
      res.status(200).json(exam)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a exam
export const deleteExam = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: "Exam does not exist"})
	}

	const exam = await ExamSchema.findOneAndDelete({_id: id})

	if (!exam) {
		return res.status(404).json({error: "Exam not found" });
	}

	res.status(200).json(exam)
}

// update a exam
export const updateExam = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: "Exam does not exist"})
	}

	const exam = await ExamSchema.findByIdAndUpdate({_id: id}, {
		...req.body
	})

	if (!exam) {
		return res.status(404).json({error: "Exam not found" });
	}

	req.status(200).json(exam)
}

module.exports = {
	getAllExams,
	getExamById,
	createExam,
	deleteExam,
	updateExam
}