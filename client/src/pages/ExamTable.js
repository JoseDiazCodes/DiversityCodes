import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function ExamView() {
	const [exams, setExams] = useState([])
	const [error, setError] = useState(null)

	const [search, setSearch] = useState("")

	useEffect(() => {
		// Function to fetch data from the server
		const fetchData = async () => {
			try {
				// Send a GET request to fetch exams data from the API
				const response = await fetch(
					`${process.env.REACT_APP_API_BASE_URL}/server/exams`
				)
				// Check if the response is successful
				if (!response.ok) {
					// If not successful, throw an error with the status code
					throw new Error(
						`Network response was not ok - Status: ${response.status}`
					)
				}
				// Parse the JSON response
				const data = await response.json()
				// Log the fetched data
				console.log("Fetched data:", data)
				// Check if the fetched data is an array
				if (Array.isArray(data)) {
					// If it's an array, update the state with the fetched data
					setExams(data)
				} else {
					// If the data format is unexpected, set an error message
					setError("Unexpected data format from the API")
				}
			} catch (error) {
				// If an error occurs during fetching, set the error state and log the error
				setError(error)
				console.error("Error fetching exams:", error)
			}
		}

		// Call the fetchData function when the component mounts (empty dependency array)
		fetchData()
	}, [])

	// TODO
	const navigate = useNavigate()

	return (
		<div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
			<div className="border-4 border-blue-300 rounded-lg p-4 mb-4">
				<h2 className="text-3xl font-bold mb-4">Patient Database</h2>
				<div className="flex-grow">
					<label className="mr-2">Search:</label>
					<input
						type="text"
						className="border border-gray-600 rounded-md px-2 py-1 text-black"
						placeholder="Search Patient ID"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<div style={{ marginBottom: "10px" }}></div>
			</div>
			{error && <div>Error: {error.message}</div>}

			{exams.length === 0 && !error && <div>Loading exams data...</div>}

			{exams.length > 0 && (
				<table className="border-collapse border border-gray-600 w-full">
					<thead>
						<tr className="bg-gray-700">
							<th className="px-4 py-2">Patient ID</th>
							<th className="px-4 py-2">Exam ID</th>
							<th className="px-4 py-2">Age</th>
							<th className="px-4 py-2">Sex</th>
							<th className="px-4 py-2">Zip Code</th>
							<th className="px-4 py-2">BMI</th>
							<th className="px-4 py-2">Latest Weight</th>
							<th className="px-4 py-2">Image URL</th>
							<th className="px-4 py-2">ICU Admit</th>
							<th className="px-4 py-2">Number of Admits</th>
							<th className="px-4 py-2">Mortality</th>
						</tr>
					</thead>
					<tbody>
						{exams
							.filter((exam) =>
								exam.patientId
									.toLowerCase()
									.includes(search.trim().toLowerCase())
							)
							.map((exam) => (
								<tr key={exam._id} className="bg-gray-800">
									<td className="border border-gray-600 px-4 py-2">
										<Link
											to={`/patient/${exam.patientId}`}
											className="hover:underline"
										>
											{exam.patientId}
										</Link>
									</td>
									<td className="border border-gray-600 px-4 py-2">
										<Link
											to={`/patient/${exam.patientId}/exam/${exam.examId}`}
											className="hover:underline"
										>
											{exam.examId}
										</Link>
									</td>
									<td className="border border-gray-600 px-4 py-2">
										{exam.age}
									</td>
									<td className="border border-gray-600 px-4 py-2">
										{exam.sex}
									</td>
									<td className="border border-gray-600 px-4 py-2">
										{exam.zipCode}
									</td>
									<td className="border border-gray-600 px-4 py-2">
										{exam.bmi}
									</td>
									<td className="border border-gray-600 px-4 py-2">
										{exam.latestWeight}
									</td>
									<td className="border border-gray-600 px-4 py-2">
										{exam.ImageURL}
									</td>
									<td className="border border-gray-600 px-4 py-2">
										{exam.ICUAdmit}
									</td>
									<td className="border border-gray-600 px-4 py-2">
										{exam.numberOfAdmits}
									</td>
									<td className="border border-gray-600 px-4 py-2">
										{exam.mortality}
									</td>

									{/* <td className="border border-gray-600 px-4 py-2">
                  <Link
                    to={`/exams/${exam._id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View Details
                  </Link>
                </td> */}
								</tr>
							))}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default ExamView
