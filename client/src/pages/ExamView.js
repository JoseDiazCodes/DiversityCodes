// import React from "react"
// import { useApi } from "../hooks/use-api"
// // import React, { useEffect } from "react"

// function ExamView() {
// 	const { response, error } = useApi({ path: "exams" })

// 	// useEffect(() => {
// 	// 	console.log("Response: Exam View", response)
// 	// 	if (response && response.exams && Array.isArray(response.exams)) {
// 	// 		response.exams.forEach((exam) => {
// 	// 			if (exam) {
// 	// 				// Ensure exam is not null
// 	// 				console.log("Patient ID:", exam.patientId)
// 	// 				console.log("Age:", exam.age)
// 	// 				console.log("Sex:", exam.sex)
// 	// 				console.log("Zip Code:", exam.zipCode)
// 	// 				console.log("BMI:", exam.bmi)
// 	// 				console.log("Exam ID:", exam.examId)
// 	// 				console.log("Key Findings:", exam.keyFindings)
// 	// 				console.log("Brixia Scores:", exam.brixiaScores)
// 	// 			}
// 	// 		})
// 	// 	}
// 	// }, [response])

// 	if (error) {
// 		return <div>Error: {JSON.stringify(error)}</div>
// 	}

// 	// Display a loading message if the response has not yet been received
// 	if (!response) {
// 		return <div>Loading exams data...</div> // This is where you add the loading indicator
// 	}

// 	return (
// 		<div className="ExamView">
// 			{response && response.exams && Array.isArray(response.exams) && (
// 				<table>
// 					<thead>
// 						<tr>
// 							<th>Patient ID</th>
// 							<th>Age</th>
// 							<th>Sex</th>
// 							<th>Zip Code</th>
// 							<th>BMI</th>
// 							<th>Exam ID</th>
// 							<th>Key Findings</th>
// 							<th>Brixia Scores</th>
// 							<th>Image URL</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{response.exams
// 							.filter((exam) => exam != null)
// 							.map((exam, index) => (
// 								<tr key={exam._id || index}>
// 									<td>{exam.patientId}</td>
// 									<td>{exam.age}</td>
// 									<td>{exam.sex}</td>
// 									<td>{exam.zipCode}</td>
// 									<td>{exam.bmi}</td>
// 									<td>{exam.examId}</td>
// 									<td>{exam.keyFindings}</td>
// 									<td>{exam.brixiaScores}</td>
// 									<td>
// 										<a
// 											href={exam.imageURL}
// 											target="_blank"
// 											rel="noopener noreferrer"
// 										>
// 											View Image
// 										</a>
// 									</td>
// 								</tr>
// 							))}
// 					</tbody>
// 				</table>
// 			)}
// 		</div>
// 	)
// }

// export default ExamView
