import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import "./App.css";

// import ExamView from "./pages/ExamView";
import Home from "./pages/Home";
import Navbar from "./components/NavBar"; // Import Navbar
import Admin from "./pages/Admin";
import AdminView from "pages/ExamView";
import ExamTable from "pages/ExamTable";
import SinglePatientView from "components/SinglePatientView";
import SingleExamView from "components/SingleExamView";
import UpdateExam from "./components/UpdateExam";
import Footer from "components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="examTable" element={<ExamTable />} />
        <Route path="adminView" element={<AdminView />} />

        {/*    */}
        <Route
          path="/patient/:patientId/exam/:examId"
          element={<SingleExamView />}
        />
        <Route path="/patient/:patientId" element={<SinglePatientView />} />
        <Route path="/UpdateExam" element={<UpdateExam />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
