// import React, { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const SingleExamView = () => {
	const [exam, setExam] = useState(null)
	const { patientId, examId } = useParams()

	useEffect(() => {
		const url = `${process.env.REACT_APP_API_BASE_URL}/server/exams/patient/${patientId}/exam/${examId}`
		console.log("Fetching from URL:", url)

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log("Data received from server:", data)
				setExam(data)
			})
			.catch((error) => console.error("Error:", error))
	}, [patientId, examId])

	return (
		<div
			className="bg-white shadow-md rounded-lg p-6"
			style={{ maxWidth: "1000px", margin: "0 auto" }}
		>
			<div className="info-container">
				<div className="info-column">
					<div className="patient-info">
						<h2 className="text-2xl font-bold mb-4">Patient Info</h2>
						<div className="info-item">
							<label htmlFor="patientId">Patient ID:</label>
							<input
								type="text"
								name="patientId"
								value={exam ? exam.patientId : ""}
								className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
								readOnly
							/>
						</div>
						<div className="info-item">
							<label htmlFor="age">Age:</label>
							<input
								type="text"
								name="age"
								value={exam ? exam.age : ""}
								className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
								readOnly
							/>
						</div>
						<div className="info-item">
							<label htmlFor="sex">Sex:</label>
							<input
								type="text"
								name="sex"
								value={exam ? exam.sex : ""}
								className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
								readOnly
							/>
						</div>
						<div className="info-item">
							<label htmlFor="bmi">BMI:</label>
							<input
								type="text"
								name="bmi"
								value={exam ? exam.bmi : ""}
								className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
								readOnly
							/>
						</div>
						<div className="info-item">
							<label htmlFor="zipCode">Zip Code:</label>
							<input
								type="text"
								name="zipCode"
								value={exam ? exam.zipCode : ""}
								className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
								readOnly
							/>
						</div>
					</div>
				</div>
				<div className="info-column">
					<div className="exam-info">
						<h2 className="text-2xl font-bold mb-4">Exam Info</h2>
						<div className="info-item">
							<label htmlFor="examId">Exam ID:</label>
							<input
								type="text"
								name="examId"
								value={exam ? exam.examId : ""}
								className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
								readOnly
							/>
						</div>
						<div className="info-item">
							<label htmlFor="imageURL">Image URL:</label>
							{exam && exam.imageURL && (
								<img
									src={exam.imageURL}
									alt="Exam"
									className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
								/>
							)}
						</div>
						<div className="info-item">
							<label htmlFor="keyFindings">Key Findings:</label>
							<textarea
								name="keyFindings"
								readOnly
								value={exam ? exam.keyFindings : ""}
								className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
							></textarea>
						</div>
						<div className="info-item">
							<label htmlFor="brixiaScores">Brixia Score:</label>
							<input
								type="text"
								name="brixiaScores"
								value={exam ? exam.brixiaScores : ""}
								className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
								readOnly
							/>
						</div>
					</div>
				</div>
				<Link
					to="/exam"
					className="button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
				>
					Back
				</Link>
			</div>
		</div>
	)
}

export default SingleExamView
