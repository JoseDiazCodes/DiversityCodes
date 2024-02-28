/* import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const UpdateExam = ({ onUpdate }) => {
	const { examId } = useParams()
	const { patientId } = useParams()
	const navigate = useNavigate()

	// const [thisExam, setUpdateThisExam] = useState(examId);
	// const [thisPatient, setThisPatient] = useState(patientId);

// Nisaury
    const [UpdateThisExam, setUpdateThisExam] = useState({
        age: "patientId.age",
        sex: "patientId.sex",
        zipCode: "patientId.zipCode",
        bmi: "patientId.bmi",
        latestWeight: "patientId.latestWeight",
        imageURL: "examId.imageURL",
        ICUAdmit: "examId.ICUAdmit",
        numberOfAdmits: "examId.numberOfAdmits",
        mortality: "examId.mortality",
        keyFindings: "examId.keyFindings",
        brixiaScores: "examId.brixiaScores"
        
    });
// =======
// 	const [UpdateThisExam, setUpdateThisExam] = useState({
// 		age: "patientId.age",
// 		sex: "patientId.sex",
// 		bmi: "patientId.bmi",
// 		zipCode: "patientId.zipCode",
// 		imageURL: "examId.imageURL",
// 		keyFindings: "examId.keyFindings",
// 		brixiaScores: "examId.brixiaScores",
// 	})
// >>>>>>> main

	const handleUpdate = (field) => {
		setUpdateThisExam({
			...UpdateThisExam,
			...field,
		})
	}

	//NEED TO UPDATE ONCE BACK ENDS WORK SO IT COULD PROPERLY UPDATE THE EXAM INFO THAT WAS CHANGED
	const handleSubmit = (event) => {
		event.preventDefault()
		const url = `${process.env.REACT_APP_API_BASE_URL}/server/exams/patient/${patientId}/exam/${examId}`
		console.log("Fetching from URL:", url)

// <<<<<<< Nisaury/update-exam-to-match-admin-page-fields
    return (
        <div className="update-container">
            <div>
                <h1>Updating Exam #{examId}</h1>
                <h2>patientId #{patientId}</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={UpdateThisExam.age}
                            onChange={e => handleUpdate({ age: e.target.value })} />
                    </label>
                    <label>
                        Sex:
                        <input 
                        type="text" 
                        name="sex"
                        value={UpdateThisExam.sex} 
                        onChange={e => handleUpdate({ sex: e.target.value })} />
                    </label>
                    <label>
                        ZipCode:
                        <input type="number" 
                        name="zipCode"
                        value={UpdateThisExam.zipCode} 
                        onChange={e => handleUpdate({ zipCode: e.target.value })} />
                    </label>
                    <label>
                        BMI:
                        <input type="number"
                        name="bmi" 
                        value={UpdateThisExam.bmi} 
                        onChange={e => handleUpdate({ bmi: e.target.value })} />
                    </label>
                    <label>
                        Latest Weight:
                        <input type="number"
                        name="latestWeight" 
                        value={UpdateThisExam.latestWeight} 
                        onChange={e => handleUpdate({ latestWeight: e.target.value })} />
                    </label>                    
                    <label>
                        Key Findings:
                        <input type="text"
                        name="keyFindings" 
                        value={UpdateThisExam.keyFindings} 
                        onChange={e => handleUpdate({ keyFindings: e.target.value })} />
                    </label>
                    <label>
                        Brixia Scores:
                        <input type="number" 
                        name="brixiaScores"
                        value={UpdateThisExam.brixiaScores} 
                        onChange={e => handleUpdate({ brixiaScores: e.target.value })} />
                    </label>
                    <label>
                        ICU Admit:
                        <input type="number" 
                        name="ICUAdmit"
                        value={UpdateThisExam.ICUAdmit} 
                        onChange={e => handleUpdate({ ICUAdmit: e.target.value })} />
                    </label>
                    <label>
                        Number of Admits:
                        <input type="number" 
                        name="numberOfAdmits"
                        value={UpdateThisExam.numberOfAdmits} 
                        onChange={e => handleUpdate({ numberOfAdmits: e.target.value })} />
                    </label>
                    <label>
                       Mortality:
                        <input type="text" 
                        name="mortality"
                        value={UpdateThisExam.mortality} 
                        onChange={e => handleUpdate({ mortality: e.target.value })} />
                    </label>
                    <label>
                        Image URL:
                        <input type="text" 
                        name="imageURL"
                        value={UpdateThisExam.imageURL} 
                        onChange={e => handleUpdate({ imageURL: e.target.value })} />
                    </label>

                    <div>
                        <div>
                            <button type="submit">
                                Update Exam
                            </button>
                            <button type="button" onClick={() => navigate('/admin')}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
}
export default UpdateExam;
// =======
// 		const requestOptions = {
// 			method: "PUT",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify(UpdateThisExam),
// 		}

// 		fetch(url, requestOptions)
// 			.then((response) => response.json())
// 			.then((data) => setUpdateThisExam(data))
// 	}

// 	return (
// 		<div className="update-container">
// 			<div>
// 				<h1>Updating Exam #{examId}</h1>
// 				<h2>patientId #{patientId}</h2>
// 			</div>
// 			<div>
// 				<form onSubmit={handleSubmit}>
// 					<label>
// 						Age:
// 						<input
// 							type="number"
// 							name="age"
// 							value={UpdateThisExam.age}
// 							onChange={(e) => handleUpdate({ age: e.target.value })}
// 						/>
// 					</label>
// 					<label>
// 						Sex:
// 						<input
// 							type="text"
// 							name="sex"
// 							value={UpdateThisExam.sex}
// 							onChange={(e) => handleUpdate({ sex: e.target.value })}
// 						/>
// 					</label>
// 					<label>
// 						ZipCode:
// 						<input
// 							type="number"
// 							name="zipCode"
// 							value={UpdateThisExam.zipCode}
// 							onChange={(e) => handleUpdate({ zipCode: e.target.value })}
// 						/>
// 					</label>

// 					<label>
// 						BMI:
// 						<input
// 							type="number"
// 							name="bmi"
// 							value={UpdateThisExam.bmi}
// 							onChange={(e) => handleUpdate({ bmi: e.target.value })}
// 						/>
// 					</label>

// 					<label>
// 						Key Findings:
// 						<input
// 							type="text"
// 							name="keyFindings"
// 							value={UpdateThisExam.keyFindings}
// 							onChange={(e) => handleUpdate({ keyFindings: e.target.value })}
// 						/>
// 					</label>
// 					<label>
// 						Brixia Scores:
// 						<input
// 							type="number"
// 							name="brixiaScores"
// 							value={UpdateThisExam.brixiaScores}
// 							onChange={(e) => handleUpdate({ brixiaScores: e.target.value })}
// 						/>
// 					</label>
// 					<label>
// 						Image URL:
// 						<input
// 							type="text"
// 							name="imageURL"
// 							value={UpdateThisExam.imageURL}
// 							onChange={(e) => handleUpdate({ imageURL: e.target.value })}
// 						/>
// 					</label>
// 					<div>
// 						<div>
// 							<button type="submit">Update Exam</button>
// 							<button type="button" onClick={() => navigate("/admin")}>
// 								Cancel
// 							</button>
// 						</div>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	)
// }
// export default UpdateExam
// >>>>>>> main
*/

// BASIC UPDATE PAGE DESIGN - EMILY
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// const UpdateExam = () => {
//   const [exam, setExam] = useState(null);
//   const { patientId, examId } = useParams();

//   useEffect(() => {
//     const fetchExam = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.REACT_APP_API_BASE_URL}/server/exams/patient/${patientId}/exam/${examId}`,
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setExam(data);
//       } catch (error) {
//         console.error("Error fetching exam:", error);
//       }
//     };
//     fetchExam();
//   }, [patientId, examId]);

//   const handleUpdate = (field, value) => {
//     setExam((prevExam) => ({
//       ...prevExam,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
//       <div className="border-4 border-blue-300 rounded-lg p-4 mb-4">
//         <h2 className="text-3xl font-bold mb-4">Edit Exam</h2>
//         <div className="flex justify-center ">
//           <Link
//             to="#"
//             className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-4"
//           >
//             Update
//           </Link>
//           <Link
//             to="/adminView"
//             className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-4"
//           >
//             Back
//           </Link>
//         </div>
//       </div>
//       <div
//         className="bg-gray-800 shadow-md rounded-lg p-6"
//         style={{ maxWidth: "1000px", margin: "0 auto" }}
//       >
//         <div className="info-container flex">
//           <div className="info-column flex-5 pr-4">
//             <div className="patient-info">
//               <h2 className="text-2xl font-bold mb-4">Patient Info</h2>
//               <div className="info-item mb-4">
//                 <label htmlFor="patientId">Patient ID:</label>
//                 <input
//                   type="text"
//                   name="patientId"
//                   value={exam ? exam.patientId : ""}
//                   onChange={(e) => handleUpdate("patientId", e.target.value)}
//                   className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                 />
//               </div>
//               <div className="info-item mb-4">
//                 <label htmlFor="age">Age:</label>
//                 <input
//                   type="text"
//                   name="age"
//                   value={exam ? exam.age : ""}
//                   onChange={(e) => handleUpdate("age", e.target.value)}
//                   className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                 />
//               </div>
//               <div className="info-item mb-4">
//                 <label htmlFor="sex">Sex:</label>
//                 <input
//                   type="text"
//                   name="sex"
//                   value={exam ? exam.sex : ""}
//                   onChange={(e) => handleUpdate("sex", e.target.value)}
//                   className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                 />
//               </div>
//               <div className="info-item mb-4">
//                 <label htmlFor="bmi">BMI:</label>
//                 <input
//                   type="text"
//                   name="bmi"
//                   value={exam ? exam.bmi : ""}
//                   onChange={(e) => handleUpdate("bmi", e.target.value)}
//                   className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                 />
//               </div>
//               <div className="info-item mb-4">
//                 <label htmlFor="zipCode">Zip Code:</label>
//                 <input
//                   type="text"
//                   name="zipCode"
//                   value={exam ? exam.zipCode : ""}
//                   onChange={(e) => handleUpdate("zipCode", e.target.value)}
//                   className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="info-column flex-1 pl-4">
//             <div className="exam-info">
//               <h2 className="text-2xl font-bold mb-4">Exam Info</h2>
//               <div className="info-item mb-4">
//                 <label htmlFor="examId">Exam ID:</label>
//                 <input
//                   type="text"
//                   name="examId"
//                   value={exam ? exam.examId : ""}
//                   onChange={(e) => handleUpdate("examId", e.target.value)}
//                   className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                 />
//               </div>
//               <div className="info-item mb-4">
//                 <label htmlFor="imageURL">Image URL:</label>
//                 <input
//                   type="text"
//                   name="imageURL"
//                   value={exam ? exam.imageURL : ""}
//                   onChange={(e) => handleUpdate("imageURL", e.target.value)}
//                   className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                 />
//                 {exam && exam.imageURL && (
//                   <img
//                     src={exam.imageURL}
//                     alt="Exam"
//                     className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                   />
//                 )}
//               </div>
//               <div className="info-item mb-4">
//                 <label htmlFor="keyFindings">Key Findings:</label>
//                 <textarea
//                   name="keyFindings"
//                   value={exam ? exam.keyFindings : ""}
//                   onChange={(e) => handleUpdate("keyFindings", e.target.value)}
//                   className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                 ></textarea>
//               </div>
//               <div className="info-item mb-4">
//                 <label htmlFor="brixiaScores">Brixia Score:</label>
//                 <input
//                   type="text"
//                   name="brixiaScores"
//                   value={exam ? exam.brixiaScores : ""}
//                   onChange={(e) => handleUpdate("brixiaScores", e.target.value)}
//                   className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateExam;

import React, { useState } from "react"
import { useParams } from "react-router-dom"

function UpdateExam() {
	const { patientId, examId } = useParams()
	const [updatedFields, setUpdatedFields] = useState({})

	const handleChange = (event) => {
		setUpdatedFields({
			...updatedFields,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(patientId, examId)
		fetch(
			`${process.env.REACT_APP_API_BASE_URL}/server/exams/patient/${patientId}/exam/${examId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedFields),
			}
		)
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => {
				console.error("Error:", error)
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Key Findings:
				<input
					type="text"
					name="keyFindings"
					onChange={handleChange}
					className="border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors h-10 text-black"
				/>
			</label>
			<label>
				Additional Notes:
				<input
					type="text"
					name="additionalNotes"
					onChange={handleChange}
					className="border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-500 transition-colors h-10 text-black"
				/>
			</label>
			<button type="submit">Update Exam</button>
		</form>
	)
}

export default UpdateExam
