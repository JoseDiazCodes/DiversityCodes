import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../alert.css';

const CreateNewExam = ({ onAddExam }) => {
  const [newExam, setNewExam] = useState({
    patientId: "",
    age: 0,
    sex: "",
    zipCode: 0,
    bmi: 0,
    examId: "",
    keyFindings: "",
    brixiaScores: "",
    imageURL: "",
    ICU_Admit: "",
    numberOfAdmits: 0,
    mortality: ""
  });

  let navigate = useNavigate();

  // Add a new state variable for the alert
  const [showAlert, setShowAlert] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExam((prevExam) => ({
      ...prevExam,
      [name]: value,
    }));
  };
  const handleAddExam = () => {
    // Show the alert when the "Add Exam" button is clicked
    setShowAlert(true);
  };

  const confirmAddExam = () => {
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/server/exams`, newExam)
      .then(response => {
        console.log(response);
        setNewExam({
          patientId: "",
          age: 0,
          sex: "",
          zipCode: 0,
          bmi: 0,
          examId: "",
          keyFindings: "",
          brixiaScores: "",
          imageURL: "",
          ICU_Admit: "",
          numberOfAdmits: 0,
          mortality: ""
        });
        navigate('/adminView');
      })
      .catch(error => {
        console.error(error);
      });

    // Hide the alert when the "Confirm" button is clicked
    setShowAlert(false);
  };

  return (
    <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg" style={{ height: "100vh", maxWidth: "800px", margin: "0 auto" }}>
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="space-y-4">
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="patientId" className="block text-white-300 mb-1">Patient ID:</label>
              <input type="text" name="patientId" value={newExam.patientId} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-white-300 mb-1">Age:</label>
              <input type="number" name="age" value={newExam.age} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>

            <div className="mb-4">
              <label htmlFor="sex" className="block text-white-300 mb-1">Sex:</label>
              <input type="text" name="sex" value={newExam.sex} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>

            <div className="mb-4">
              <label htmlFor="zipCode" className="block text-white-300 mb-1">Zip Code:</label>
              <input type="number" name="zipCode" value={newExam.zipCode} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>

            <div className="mb-4">
              <label htmlFor="bmi" className="block text-white-300 mb-1">BMI:</label>
              <input type="number" name="bmi" value={newExam.bmi} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>

            <div className="mb-4">
              <label htmlFor="examId" className="block text-white-300 mb-1">Exam ID:</label>
              <input type="text" name="examId" value={newExam.examId} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>

            <div className="mb-4">
              <label htmlFor="imageURL" className="block text-white-300 mb-1">Image URL:</label>
              <input type="text" name="imageURL" value={newExam.imageURL} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>

            <div className="mb-4">
              <label htmlFor="ICU_Admit" className="block text-white-300 mb-1">ICU Admit:</label>
              <input type="text" name="ICU_Admit" value={newExam.ICU_Admit} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>

            <div className="mb-4">
              <label htmlFor="numberOfAdmits" className="block text-white-300 mb-1">Number of Admits:</label>
              <input type="number" name="numberOfAdmits" value={newExam.numberOfAdmits} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>

            <div className="mb-4">
              <label htmlFor="mortality" className="block text-white-300 mb-1">Mortality:</label>
              <input type="text" name="mortality" value={newExam.mortality} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" />
            </div>
          </div>
        </form>
        <div>
          {/* Add Exam Button */}
          <button
            type="button"
            onClick={handleAddExam}
            className="button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Add Exam
          </button>

          {/* Alert */}
          {showAlert && (
            <div className="alert-add-exam">
              <div className="alert-add-exam-content">
                <p className="alert-add-exam-message">
                  Are you sure you want to add this exam?
                </p>
                <div>
                  <button
                    onClick={confirmAddExam}
                    className="alert-add-exam-button"
                  >
                    Add Exam
                  </button>
                  <button
                    onClick={() => setShowAlert(false)}
                    className="alert-add-exam-button"
                  >
                    Make Changes
                  </button>
                </div>
              </div>
            </div>
          )}
          <Link
            to="/adminView"
            className="button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateNewExam;
