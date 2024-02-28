// import React, { useEffect, useState } from 'react';

// const SinglePatientView = ({ patientId }) => {
//   const [exams, setExams] = useState([]);

//   useEffect(() => {
//     fetch(`/exams/patient/${patientId}`)
//       .then(response => response.json())
//       .then(data => setExams(data))
//       .catch(error => console.error('Error:', error));
//   }, [patientId]); // re-run the effect when `patientId` changes

//   return (
//     <div>
//       <h2>Patient ID: {patientId}</h2>
//       <h3>Exams:</h3>
//       {exams.map((exam, index) => (
//         <div key={index}>
//           <h4>Exam {index + 1}</h4>
//           {/* Display the exam data here */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SinglePatientView;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useApi } from "hooks/use-api";
// import ExamView from "pages/ExamView";

// function SinglePatientView() {
//   const { clickedPatientId } = useParams();
//   const [patientData, setPatientData] = useState(null);
//   const [search, setSearch] = useState("");

//   const { response, error } = useApi({ path: `exams/${clickedPatientId}` }); // Fetch specific Patient data

//   useEffect(() => {
//     if (response && response.exam) {
//       setPatientData(response.exam);
//     }
//   }, [response]);

//   return (
//     <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
//       {!patientData && !error && <div>Loading Patient data...</div>}
//       {patientData && <ExamView PatientId={clickedPatientId} />}

//       <h2 className="text-2xl font-bold mb-4">Patient Details</h2>

//       <h1 className="text-2xl font-bold mb-4">Patient ID: </h1>

//       <h1 className="text-2xl font-bold mb-4">Number of Exams: </h1>

//       <div className="mb-4">
//         Search:
//         <input
//           type="text"
//           className="border border-gray-600 rounded-md px-2 py-1 ml-2 text-black"
//           placeholder="Search Patient ID"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <table className="border-collapse border border-gray-600 w-full">
//           <thead>
//             <tr className="bg-gray-700">
//               <th className="px-4 py-2">Patient ID</th>
//               <th className="px-4 py-2">Exam ID</th>
//               <th className="px-4 py-2">Age</th>
//               <th className="px-4 py-2">Sex</th>
//               <th className="px-4 py-2">Zip Code</th>
//               <th className="px-4 py-2">BMI</th>
//               <th className="px-4 py-2">Key Findings</th>
//               <th className="px-4 py-2">Brixia Scores</th>
//               <th className="px-4 py-2">Image URL</th>
//             </tr>
//           </thead>
//         </table>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const SinglePatientView = () => {
	const [exams, setExams] = useState([])
	const { patientId } = useParams() // Extract patientId from the route parameters

	useEffect(() => {
		const url = `${process.env.REACT_APP_API_BASE_URL}/server/exams/patient/${patientId}`
		console.log("Fetching from URL:", url)

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log("Data received from server:", data)
				setExams(data)
			})
			.catch((error) => console.error("Error:", error))
	}, [patientId])

	return (
		<div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-4">Exam Details</h2>
			<div className="flex items-center mb-4">
				<Link
					to="/examTable"
					className="button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
				>
					Back
				</Link>
				</div>
			<div className="flex-grow">
				<table className="border-collapse border border-gray-600 w-full">
					<thead>
						<tr className="bg-gray-700">
							<th className="px-4 py-2">Patient ID</th>
							<th className="px-4 py-2">Age</th>
							<th className="px-4 py-2">Sex</th>
							<th className="px-4 py-2">Zip Code</th>
							<th className="px-4 py-2">BMI</th>
							<th className="px-4 py-2">Latest Weight</th>
							<th className="px-4 py-2">Mortality</th>
							<th className="px-4 py-2">Number of Admits</th>
							<th className="px-4 py-2">Image URL</th>
						</tr>
					</thead>
					<tbody>
						{exams.map((exam, index) => (
							<tr key={index} className="bg-gray-800">
								<td className="border border-gray-600 px-4 py-2">
									{exam.patientId}
								</td>
								<td className="border border-gray-600 px-4 py-2">{exam.age}</td>
								<td className="border border-gray-600 px-4 py-2">{exam.sex}</td>
								<td className="border border-gray-600 px-4 py-2">
									{exam.zipCode}
								</td>
								<td className="border border-gray-600 px-4 py-2">{exam.bmi}</td>
								<td className="border border-gray-600 px-4 py-2">
									{exam.latestWeight}
								</td>
								<td className="border border-gray-600 px-4 py-2">
									{exam.mortality}
								</td>
								<td className="border border-gray-600 px-4 py-2">
									{exam.numberOfAdmits}
								</td>
								<td className="border border-gray-600 px-4 py-2">
									{exam.ImageURL}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				
			</div>
			{/* <Link
				to="/exam"
				className="button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
			>
				Back
			</Link> */}
		</div>
		
	)
}

export default SinglePatientView
