import React, { useState } from "react"
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
