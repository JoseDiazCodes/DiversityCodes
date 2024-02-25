///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////UPDATED CODE FOR EXAM VIEW ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ExamView() {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  //TODO
  const handleDeleteExam = (input) => {
    console.log(input);
  };

  // TODO
  const handleUpdateExam = (input) => {
    console.log();
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

  // TODO
  const navigate = useNavigate();

  return (
    <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Admin View</h2>

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

      {/* CREATE NEW EXAM */}
      <div className="flex justify-end mb-4">
        <Link
          to="/admin"
          className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Create New Exam
        </Link>
      </div>

      {error && <div>Error: {error.message}</div>}

      {exams.length === 0 && !error && <div>Loading exams data...</div>}

      {exams.length > 0 && (
        <table className="border-collapse border border-gray-600 w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2">Patient ID</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Sex</th>
              <th className="px-4 py-2">Zip Code</th>
              <th className="px-4 py-2">BMI</th>
              <th className="px-4 py-2">Latest Weight</th>
              <th className="px-4 py-2">Image URL</th>
              <th className="px-4 py-2">Exam ID</th>
              <th className="px-4 py-2">ICU Admit</th>
              <th className="px-4 py-2">Number of Admits</th>
              <th className="px-4 py-2">Mortality</th>
              <th className="px-4 py-2">Actions</th>
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
                    {exam.patientId}
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
                    {exam.examId}
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
                      href="#"
                      onClick={() => handleUpdateExam(exam._id)}
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
                  {/* <td className="border border-gray-600 px-4 py-2">
                  <Link
                    to={`/exams/${exam._id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View Details
                  </Link>
                </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExamView;

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// BELOW IS THE OLD VERSION CODE ///////////////////////////
///////////////////////////// I KEPT IT NOT TO LOSE RELEVANT PEACE OF CODE ////////////
///////////////////////////// CAN BE REMOVED LATER ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// // import React, { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom"; // Add Link here

// function ExamView() {
//   const [exams, setExams] = useState([]);
//   const [search, setSearch] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.REACT_APP_API_BASE_URL}/server/exams`
//         );
//         if (!response.ok) {
//           throw new Error(
//             `Network response was not ok - Status: ${response.status}`
//           );
//         }

//         const data = await response.json();
//         console.log("Fetched data:", data);

//         if (data.exams && Array.isArray(data.exams)) {
//           setExams(data.exams);
//         } else {
//           // setError("Unexpected data format from the API");
//           setError(
//             `Unexpected data format from the API: ${JSON.stringify(data)}`
//           );
//         }
//       } catch (error) {
//         setError("Failed to fetch exams. Please try again later.");
//         console.error("Error fetching exams:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleUpdateExam = (examId) => {
//     navigate(`/updateExam/${examId}`);
//   };

//   const handleDeleteExam = async (examId) => {
//     try {
//       const response = await fetch(`/server/exams/${examId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (!response.ok) {
//         throw new Error("Failed to delete exam");
//       }
//       // Remove the deleted exam from the list
//       setExams(exams.filter((exam) => exam._id !== examId));
//     } catch (error) {
//       console.error("Error deleting exam:", error);
//     }
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (exams.length === 0) {
//     return <div>Loading exams data...</div>;
//   }

//   return (
//     <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Admin View</h2>
//       <div className="flex items-center mb-4">
// <div className="flex-grow">
//   <label className="mr-2">Search:</label>
//   <input
//     type="text"
//     className="border border-gray-600 rounded-md px-2 py-1 text-black"
//     placeholder="Search Patient ID"
//     value={search}
//     onChange={(e) => setSearch(e.target.value)}
//   />
// </div>
// <Link
//   to="/admin"
//   className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
// >
//   Create New Exam
// </Link>
//       </div>

//       <table className="border-collapse border border-gray-600 w-full">
//         <thead>
//           <tr className="bg-gray-700">
//             <th className="px-4 py-2">Patient ID</th>
//             <th className="px-4 py-2">Exam ID</th>
//             <th className="px-4 py-2">Age</th>
//             <th className="px-4 py-2">Sex</th>
//             <th className="px-4 py-2">Zip Code</th>
//             <th className="px-4 py-2">BMI</th>
//             <th className="px-4 py-2">Key Findings</th>
//             <th className="px-4 py-2">Brixia Scores</th>
//             <th className="px-4 py-2">Image URL</th>
//             <th className="px-4 py-2">Update</th>
//             <th className="px-4 py-2">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {exams
//             .filter((exam) =>
//               exam.patientId.toLowerCase().includes(search.trim().toLowerCase())
//             )
//             .map((exam, index) => (
//               <tr key={exam._id || index} className="bg-gray-800">
//                 <td className="border border-gray-600 px-4 py-2">
//                   <Link
//                     to={`/patient/${exam.patientId}`}
//                     className="hover:underline"
//                   >
//                     {exam.patientId}
//                   </Link>
//                 </td>
//                 <td className="border border-gray-600 px-4 py-2">
//                   <Link to={`/exam/${exam.examId}`} className="hover:underline">
//                     {exam.examId}
//                   </Link>
//                 </td>
//                 <td className="border border-gray-600 px-4 py-2">{exam.age}</td>
//                 <td className="border border-gray-600 px-4 py-2">{exam.sex}</td>
//                 <td className="border border-gray-600 px-4 py-2">
//                   {exam.zipCode}
//                 </td>
//                 <td className="border border-gray-600 px-4 py-2">{exam.bmi}</td>
//                 <td className="border border-gray-600 px-4 py-2">
//                   {exam.keyFindings}
//                 </td>
//                 <td className="border border-gray-600 px-4 py-2">
//                   {exam.brixiaScores}
//                 </td>
//                 <td className="border border-gray-600 px-4 py-2">
//                   <a
//                     href={exam.imageURL}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white-400 hover:underline"
//                   >
//                     View Image
//                   </a>
//                 </td>
// <td className="border border-gray-600 px-4 py-2">
//   <a
//     href="#"
//     onClick={() => handleUpdateExam(exam._id)}
//     className="text-blue-400 hover:underline"
//   >
//     Update
//   </a>
// </td>
// <td className="border border-gray-600 px-4 py-2">
//   <a
//     href="#"
//     onClick={() => handleDeleteExam(exam._id)}
//     className="text-red-400 hover:underline"
//   >
//     Delete
//   </a>
// </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ExamView;
