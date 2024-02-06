// AdminComponent.js
import React, { useState } from 'react';

const AdminComponent = () => {
  // State to manage the list of exams
  const [exams, setExams] = useState([]);

  // State for the form fields
  const [formData, setFormData] = useState({
    patientName: '',
    examDate: '',
    findings: '',
  });

  // State to manage the currently selected exam for editing
  const [selectedExam, setSelectedExam] = useState(null);

  // Function to handle form submissions for adding exams
  const handleAddExam = (event) => {
    event.preventDefault();
    const newExam = { ...formData, id: Date.now() };
    setExams([...exams, newExam]);
    setFormData({ patientName: '', examDate: '', findings: '' });
  };

  // Function to handle form submissions for editing exams
  const handleEditExam = (event) => {
    event.preventDefault();
    if (selectedExam) {
      const editedExams = exams.map((exam) =>
        exam.id === selectedExam.id ? { ...exam, ...formData } : exam
      );
      setExams(editedExams);
      setFormData({ patientName: '', examDate: '', findings: '' });
      setSelectedExam(null); // Reset selectedExam after editing
    }
  };

  // Function to handle form submissions for deleting exams
  const handleDeleteExam = (event) => {
    event.preventDefault();
    if (selectedExam) {
      const updatedExams = exams.filter((exam) => exam.id !== selectedExam.id);
      setExams(updatedExams);
      setFormData({ patientName: '', examDate: '', findings: '' });
      setSelectedExam(null); // Reset selectedExam after deletion
    }
  };

  // Function to set the selected exam when the "Edit" button is clicked
  const handleSelectExam = (exam) => {
    setSelectedExam(exam);
    setFormData({ ...exam });
  };

  return (
    <div>
      <h2>Add New Exam Record</h2>
      <form onSubmit={handleAddExam}>
        <div>
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={(e) =>
              setFormData({ ...formData, patientName: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="examDate">Exam Date:</label>
          <input
            type="date"
            id="examDate"
            name="examDate"
            value={formData.examDate}
            onChange={(e) =>
              setFormData({ ...formData, examDate: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="findings">Findings:</label>
          <textarea
            id="findings"
            name="findings"
            value={formData.findings}
            onChange={(e) =>
              setFormData({ ...formData, findings: e.target.value })
            }
            rows="4"
            required
          />
        </div>

        <button type="submit">Add Exam Record</button>
      </form>

      <h2>Edit Exam Record</h2>
      <form onSubmit={handleEditExam}>
        <div>
          <label htmlFor="editPatientName">Patient Name:</label>
          <input
            type="text"
            id="editPatientName"
            name="editPatientName"
            value={formData.patientName}
            onChange={(e) =>
              setFormData({ ...formData, patientName: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="editExamDate">Exam Date:</label>
          <input
            type="date"
            id="editExamDate"
            name="editExamDate"
            value={formData.examDate}
            onChange={(e) =>
              setFormData({ ...formData, examDate: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="editFindings">Findings:</label>
          <textarea
            id="editFindings"
            name="editFindings"
            value={formData.findings}
            onChange={(e) =>
              setFormData({ ...formData, findings: e.target.value })
            }
            rows="4"
            required
          />
        </div>

        <button type="submit">Edit Exam Record</button>
      </form>

      <h2>Delete Exam Record</h2>
      <form onSubmit={handleDeleteExam}>
        <div>
          <label htmlFor="deleteExamId">Exam ID:</label>
          <input
            type="text"
            id="deleteExamId"
            name="deleteExamId"
            value={formData.id || ''}
            readOnly
          />
        </div>

        <button type="submit">Delete Exam Record</button>
      </form>

      {/* Display the list of exams */}
      <ul>
        {exams.map((exam) => (
          <li key={exam.id}>
            {`ID: ${exam.id}, Patient Name: ${exam.patientName}, Exam Date: ${exam.examDate}, Findings: ${exam.findings}`}
            <button onClick={() => handleSelectExam(exam)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminComponent;
