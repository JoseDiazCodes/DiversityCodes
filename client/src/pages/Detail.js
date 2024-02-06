// I am having an issue fixing this Detail page
// I will keep working on it

import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ exams }) => {
  // Move the useParams hook inside the functional component
  const { examId } = useParams();
  const exam = exams.find((e) => e.examId === examId);

  // if (!exam) {
  //   return <div>Exam not found</div>;
  // }

  return (
    <div className="detail-container">
      <h2>Detail Page</h2>
      <p>Patient ID: {exam.patientId}</p>
      <p>Age: {exam.age}</p>
      <p>Sex: {exam.sex}</p>
      <p>Zip Code: {exam.zipCode}</p>
      <p>BMI: {exam.bmi}</p>
      <p>Exam ID: {exam.examId}</p>
      <p>Key Findings: {exam.keyFindings}</p>
      <p>Brixia Scores: {exam.brixiaScores}</p>
      <img src={exam.imageURL} alt="Chest X-ray" />
    </div>
  );
};

export default Detail;

// import React from "react";
// import { useParams } from "react-router-dom";

// const Detail = ({ exams }) => {
//   const { examId } = useParams();
//   const exam = exams.find((e) => e.examId === examId);

//   if (!exam) {
//     return <div>Exam not found !!</div>;
//   }

//   return (
//     <div className="detail-container">
//       <h2>Detail Page</h2>
//       <p>Patient ID: {exam.patientId}</p>
//       <p>Age: {exam.age}</p>
//       <p>Sex: {exam.sex}</p>
//       <p>Zip Code: {exam.zipCode}</p>
//       <p>BMI: {exam.bmi}</p>
//       <p>Exam ID: {exam.examId}</p>
//       <p>Key Findings: {exam.keyFindings}</p>
//       <p>Brixia Scores: {exam.brixiaScores}</p>
//       <img src={exam.imageURL} alt="Chest X-ray" />
//     </div>
//   );
// };

// export default Detail;

// import React from "react";
// import { useParams } from "react-router-dom";

// const Detail = ({ exams }) => {
//   const { examId } = useParams();
//   const exam = exams.find((e) => e.examId === examId);

//   if (!exam) {
//     return <div>Exam not found</div>;
//   }

//   return (
//     <div className="detail-container">
//       <h2>Detail Page</h2>
//       <p>Patient ID: {exam.patientId}</p>
//       <p>Age: {exam.age}</p>
//       <p>Sex: {exam.sex}</p>
//       <p>Zip Code: {exam.zipCode}</p>
//       <p>BMI: {exam.bmi}</p>
//       <p>Exam ID: {exam.examId}</p>
//       <p>Key Findings: {exam.keyFindings}</p>
//       <p>Brixia Scores: {exam.brixiaScores}</p>
//       <img src={exam.imageURL} alt="Chest X-ray" />
//     </div>
//   );
// };

// export default Detail;
