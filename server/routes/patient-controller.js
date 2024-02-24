import { getExamsByPatientId } from "../controllers/exam.js"

router.get("/exams/patient/:patientId", getExamsByPatientId)
