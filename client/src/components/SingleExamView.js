import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SingleExamView = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams/28542630-f4a223c5-3613-4e3a-af46-de354cd1ab3a");
        if (!response.ok) {
          throw new Error("Network response error");
        }
        const data = await response.json();
        setExams(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg" style={{  maxWidth: "1000px", margin: "0 auto" }}>
      <div className="info-container">
        <div className="info-column">
          <div className="patient-info">
            <h2 className="text-2xl font-bold mb-4">Patient Info</h2>
            <div className="info-item">
              <label htmlFor="patientId">Patient ID:</label>
              <input
                type="text"
                name="patientId"
                value={exams.patientId} 
                className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                readOnly
              />
            </div>
            <div className="info-item">
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                name="age"
                value={exams.age} 
                className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                readOnly
              />
            </div>
            <div className="info-item">
              <label htmlFor="sex">Sex:</label>
              <input
                type="text"
                name="sex"
                value={exams.sex} 
                className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                readOnly
              />
            </div>
            <div className="info-item">
              <label htmlFor="bmi">BMI:</label>
              <input
                type="text"
                name="bmi"
                value={exams.bmi} 
                className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                readOnly
              />
            </div>
            <div className="info-item">
              <label htmlFor="zipCode">Zip Code:</label>
              <input
                type="text"
                name="zipCode"
                value={exams.zipCode} 
                className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="info-column">
          <div className="exam-info">
            <h2 className="text-2xl font-bold mb-4">Exam Info</h2>
            <div className="info-item">
              <label htmlFor="examId">Exam ID:</label>
              <input
                type="text"
                name="examId"
                value={exams.examId} 
                className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                readOnly
              />
            </div>
            <div className="info-item">
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                name="imageUrl"
                value={exams.imageUrl}
                className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" 
                readOnly
              />
            </div>
            <div className="info-item">
              <label htmlFor="keyFindings">Key Findings:</label>
              <textarea
                name="keyFindings"
                readOnly
                value={exams.keyFindings}
                className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full" 
              ></textarea>
            </div>
            <div className="info-item">
              <label htmlFor="brixiaScore">Brixia Score:</label>
              <input
                type="text"
                name="brixiaScore"
                value={exams.brixiaScore} 
                className="border border-gray-300 rounded-md px-2 py-1 bg-gray-700 text-white w-full"
                readOnly
              />
            </div>
          </div>
        </div>
        <Link
          to="/exam"
          className="button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default SingleExamView;
