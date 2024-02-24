import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = ({ onAddExam }) => {
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExam((prevExam) => ({
      ...prevExam,
      [name]: value,
    }));
  };

  const handleAddExam = () => {
    onAddExam(newExam);
    // Clear form after adding exam
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
    });
  };

  return (
    <div
      className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg"
      style={{ height: "100vh", maxWidth: "800px", margin: "0 auto" }}
    >
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="space-y-4">
        {/* Create New Exam Button
        <button className="create-new-exam button bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-4">
          Create New Exam
        </button> */}
        <div className="flex items-center mb-4">
          <Link
            to="/exam"
            className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </Link>
        </div>

        {/* Form */}
        <form>
          {/* Patient ID */}
          <div className="mb-4">
            <label htmlFor="patientId" className="block text-white-300 mb-1">
              Patient ID:
            </label>
            <input
              type="text"
              name="patientId"
              value={newExam.patientId}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label htmlFor="age" className="block text-white-300 mb-1">
              Age:
            </label>
            <input
              type="number"
              name="age"
              value={newExam.age}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
            />
          </div>

          {/* Sex */}
          <div className="mb-4">
            <label htmlFor="sex" className="block text-white-300 mb-1">
              Sex:
            </label>
            <input
              type="text"
              name="sex"
              value={newExam.sex}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
            />
          </div>

          {/* Zip Code */}
          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-white-300 mb-1">
              Zip Code:
            </label>
            <input
              type="number"
              name="zipCode"
              value={newExam.zipCode}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
            />
          </div>

          {/* BMI */}
          <div className="mb-4">
            <label htmlFor="bmi" className="block text-white-300 mb-1">
              BMI:
            </label>
            <input
              type="number"
              name="bmi"
              value={newExam.bmi}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
            />
          </div>

          {/* Exam ID */}
          <div className="mb-4">
            <label htmlFor="examId" className="block text-white-300 mb-1">
              Exam ID:
            </label>
            <input
              type="text"
              name="examId"
              value={newExam.examId}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
            />
          </div>

          {/* Key Findings */}
          <div className="mb-4">
            <label htmlFor="keyFindings" className="block text-white-300 mb-1">
              Key Findings:
            </label>
            <input
              type="text"
              name="keyFindings"
              value={newExam.keyFindings}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
            />
          </div>

          {/* Brixia Scores */}
          <div className="mb-4">
            <label htmlFor="brixiaScores" className="block text-white-300 mb-1">
              Brixia Scores:
            </label>
            <input
              type="text"
              name="brixiaScores"
              value={newExam.brixiaScores}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label htmlFor="imageURL" className="block text-white-300 mb-1">
              Image URL:
            </label>
            <input
              type="text"
              name="imageURL"
              value={newExam.imageURL}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
            />
          </div>

          {/* Add Exam Button */}
          <button
            type="button"
            onClick={handleAddExam}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Exam
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
