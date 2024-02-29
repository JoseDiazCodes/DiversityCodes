///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////UPDATED CODE FOR EXAM VIEW ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ExamView() {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  // use states for delete confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [examToDelete, setExamToDelete] = useState(null);
  const navigate = useNavigate();

  /////////////////////////////////////////////////////
  /////////DELETE CONFIRMATION COMPLETED !!!!!!!!!! ///
  /////////////////////////////////////////////////////
  const handleDeleteExam = async (examId) => {
    setExamToDelete(examId);
    setShowConfirmation(true);
  };
  const confirmDelete = async () => {
    // console.log(alert("DELETE BUTTON CLICKED"));
    console.log("Deleting Exam with ID: ", examToDelete); // Log the message in the console
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/server/exams/${examToDelete}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to Delete Exam with ID ${examToDelete}`);
      }
      // filter out the deleted exam from the state
      setExams(exams.filter((exam) => exam._id !== examToDelete));
      setShowConfirmation(false);
    } catch (error) {
      console.error("Error Deleting exam: ", error);
      setError(error.message);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setExamToDelete(null);
  };

  useEffect(() => {
    // Function to fetch data from the server
    const fetchData = async () => {
      try {
        // Send a GET request to fetch exams data from the API
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/server/exams`
        );
        // Check if the response is successful
        if (!response.ok) {
          // If not successful, throw an error with the status code
          throw new Error(
            `Network response was not ok - Status: ${response.status}`
          );
        }
        // Parse the JSON response
        const data = await response.json();
        // Log the fetched data
        console.log("Fetched data:", data);
        // Check if the fetched data is an array
        if (Array.isArray(data)) {
          // If it's an array, update the state with the fetched data
          setExams(data);
        } else {
          // If the data format is unexpected, set an error message
          setError("Unexpected data format from the API");
        }
      } catch (error) {
        // If an error occurs during fetching, set the error state and log the error
        setError(error);
        console.error("Error fetching exams:", error);
      }
    };

    // Call the fetchData function when the component mounts (empty dependency array)
    fetchData();
  }, []);

  return (
    <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <div className="border-4 border-blue-300 rounded-lg p-4 mb-4">
        <h2 className="text-3xl font-bold mb-4">Admin View</h2>
        <div className="flex-grow">
          {/* SEARCH FUNCTIONALITY */}
          <label className="mr-2">Search:</label>
          <input
            type="text"
            className="border border-gray-600 rounded-md px-2 py-1 text-black"
            placeholder="Search Patient ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* CREATE NEW EXAM BUTTON */}
          <Link
            to="/admin"
            className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Create New Exam
          </Link>
        </div>
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
              <th className="px-4 py-2">Update</th>
              <th className="px-4 py-2">Delete</th>
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
                  <td className="border border-gray-600 px-4 py-2">
                    <a
                      href={`/update-exam/${exam.patientId}/${exam.examId}`}
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
      {/* Show confirmation window */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-red-600 font-bold">
              Are you sure you want to delete this exam?
            </p>
            <div className="flex justify-end">
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Delete
              </button>
              <button
                onClick={cancelDelete}
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
}

export default ExamView;
