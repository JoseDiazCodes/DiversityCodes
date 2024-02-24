import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "hooks/use-api";
import ExamView from "pages/ExamView";

function SinglePatientView() {
  const { clickedPatientId } = useParams();
  const [patientData, setPatientData] = useState(null);
  const [search, setSearch] = useState("");

  const { response, error } = useApi({ path: `exams/${clickedPatientId}` }); // Fetch specific Patient data

  useEffect(() => {
    if (response && response.exam) {
      setPatientData(response.exam);
    }
  }, [response]);

  return (
    <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      {!patientData && !error && <div>Loading Patient data...</div>}
      {patientData && <ExamView PatientId={clickedPatientId} />}

      <h2 className="text-2xl font-bold mb-4">Patient Details</h2>

      <h1 className="text-2xl font-bold mb-4">Patient ID: </h1>

      <h1 className="text-2xl font-bold mb-4">Number of Exams: </h1>

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
        </table>
    </div>
  );
}

export default SinglePatientView;