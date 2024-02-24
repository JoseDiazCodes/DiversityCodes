import React, { useState } from "react";
import { useApi } from "../hooks/use-api";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  const { response, error } = useApi({ path: "exams" });
  const [search, setSearch] = useState("");

  if (error) {
    return <div className="text-red-500">Error: {JSON.stringify(error)}</div>;
  }

  if (!response) {
    return <div className="text-blue-500">Loading exams data...</div>;
  }

  return (
    <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Home View</h2>
      <div className="mb-4">
        Search:
        <input
          type="text"
          className="border border-gray-600 rounded-md px-2 py-1 ml-2 text-black"
          placeholder="Search Patient ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
                    {exam.examId}
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
                      className="text-white hover:underline"
                    >
                      View Image
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
