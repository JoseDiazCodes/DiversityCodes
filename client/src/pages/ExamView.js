import React, { useState } from "react";
import { useApi } from "../hooks/use-api";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// import SinglePatientView from "components/SinglePatientView";
import SingleExamView from "components/SingleExamView";
import UpdateExam from "components/UpdateExam";


function ExamView() {
  const { response, error } = useApi({ path: "exams" });

  const [search, setSearch] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState(null);

  const navigate = useNavigate();

  // updating an exam
  const handleUpdateExam = (examId) => {
    // TODO: open admin or navigate to an update page
    navigate(`/updateExam/${examId}`);
    setIsUpdating(true);
    setSelectedExamId(examId);
  };

  // deleting an exam
  const handleDeleteExam = async (examId) => {
    // TODO: send a request to backend API to delete the exam
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/exams/${examId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete exam");
      }
      // fetch the updated list of exams from the server
    } catch (error) {
      console.error("Error deleting exam:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSingleExam = async (examId) => {
    try {
      const response = await fetch(`/api/exams/${examId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

    } catch (error) {
      console.error("Error viewing exam:", error);
    }
  }; 

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  if (!response) {
    return <div>Loading exams data...</div>;
  }

  return (
    <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Admin View</h2>
      <div className="flex items-center mb-4">
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
        <Link
          to="/admin"
          className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Create New Exam
        </Link>
      </div>

      {response && response.exams && Array.isArray(response.exams) && (
        <table className="border-collapse border border-gray-600 w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2">Patient ID</th>
              <th className="px-4 py-2">Exam ID</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Sex</th>
              <th className="px-4 py-2">Zip Code</th>
              <th className="px-4 py-2">BMI</th>
              <th className="px-4 py-2">Key Findings</th>
              <th className="px-4 py-2">Brixia Scores</th>
              <th className="px-4 py-2">Image URL</th>
              <th className="px-4 py-2">Update</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {response.exams
              .filter((exam) =>
                exam
                  ? exam.patientId
                      .toLowerCase()
                      .includes(search.trim().toLowerCase())
                  : false
              )
              .map((exam, index) => (
                <tr key={exam._id || index} className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-2">
                    <Link to={`/patient/${exam.patientId}`} className="hover:underline">
                      {exam.patientId}
                    </Link>
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                  <Link to={`/exam/${exam.examId}`} className="hover:underline">
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
                    {exam.keyFindings}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {exam.brixiaScores}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    <a
                      href={exam.imageURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white-400 hover:underline"
                    >
                      View Image
                    </a>
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    <a
                      href="#"
                      onClick={() => handleUpdateExam(exam._Id)}
                      className="text-blue-400 hover:underline"
                    >
                      Update
                    </a>
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    <a
                      href="#"
                      onClick={() => handleDeleteExam(exam._id)}
                      className="text-red-400 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      
    </div>
  );
}

<Routes>
  <Route path="/exam/:examId" element={<SingleExamView />} />
  <Route path="/updateExam/:examId" element={<UpdateExam />} />
</Routes>

export default ExamView;