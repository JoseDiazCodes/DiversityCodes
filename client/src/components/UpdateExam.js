///////////////////////////// YONAS UPDATE //////////////////////////////
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UpdateExam = () => {
  // State variables
  const [exam, setExam] = useState(null); // State for storing exam details
  const { patientId, examId } = useParams(); // Extracting parameters from URL

  const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false); // State for showing update confirmation dialog

  // Fetch exam details when component mounts or when patientId/examId changes
  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/server/exams/patient/${patientId}/exam/${examId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch exam details");
        }
        const data = await response.json();
        setExam(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchExamDetails();
  }, [patientId, examId]);

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/server/exams/patient/${patientId}/exam/${examId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(exam),
        }
      );

      if (response.ok) {
        console.log("Exam details updated successfully");
      } else {
        console.error("Failed to update exam details");
      }
    } catch (error) {
      console.error("Error updating exam:", error);
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExam((prevExam) => ({
      ...prevExam,
      [name]: value,
    }));
  };

  // Cancel update confirmation
  const cancelUpdate = () => {
    setShowUpdateConfirmation(false);
  };

  // Show update confirmation dialog
  const handleUpdateConfirmation = () => {
    setShowUpdateConfirmation(true);
  };

  // Confirm update and hide confirmation dialog
  const confirmUpdate = (event) => {
    handleFormSubmit(event);
    setShowUpdateConfirmation(false);
  };
  return (
    <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <div className="border-4 border-blue-300 rounded-lg p-4 mb-4">
        <h2 className="text-3xl font-bold mb-4">Exam Details</h2>
      </div>

      <div
        className="bg-gray-800 shadow-md rounded-lg p-6"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <div className="info-container flex">
          <div className="info-column flex-1">
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
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-item">
                <label htmlFor="sex">Sex:</label>
                <input
                  type="text"
                  name="sex"
                  value={exam ? exam.sex : ""}
                  className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-item">
                <label htmlFor="bmi">BMI:</label>
                <input
                  type="text"
                  name="bmi"
                  value={exam ? exam.bmi : ""}
                  className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                  onChange={handleInputChange}
                />
              </div>
              <div className="info-item">
                <label htmlFor="zipCode">Zip Code:</label>
                <input
                  type="text"
                  name="zipCode"
                  value={exam ? exam.zipCode : ""}
                  className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="info-column flex-1 pl-4">
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
                <input
                  type="text"
                  name="imageURL"
                  value={exam ? exam.imageURL : ""}
                  className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                  onChange={handleInputChange}
                />
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
                  value={exam ? exam.keyFindings : ""}
                  className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="info-item">
                <label htmlFor="brixiaScores">Brixia Score:</label>
                <input
                  type="text"
                  name="brixiaScores"
                  value={exam ? exam.brixiaScores : ""}
                  className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          // onClick={handleFormSubmit}
          onClick={handleUpdateConfirmation}
          className="button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Update
        </button>
        <Link
          to="/adminView"
          className="button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
        >
          Back
        </Link>
      </div>
      {showUpdateConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-red-600 font-bold">
              Are you sure you want to update this exam?
            </p>
            <div className="flex justify-end">
              <button
                onClick={(event) => confirmUpdate(event)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Confirm
              </button>
              <button
                onClick={cancelUpdate}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateExam;
