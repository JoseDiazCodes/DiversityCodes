// App.js
import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { Router, Route, Switch } from "react-router-dom";

// import "./App.css";
// import Admin from "./pages/Admin";
// import Home from "./pages/Home";
// // import Detail from "./pages/Detail";
// // import ExamView from "./pages/ExamView";
// import Navbar from "./components/NavBar"; // Import Navbar
// import Detail from "./pages/Detail";

// function App() {
//   // const [exams, setExams] = useState([]);

//   // const handleAddExam = (newExam) => {
//   //   // add the new exam to the exam array
//   //   setExams((prevExams) => [...prevExams, newExam]);
//   // };

//   return (
//     <div className="App">
//       <h1>Hello world !</h1>
//       <Navbar />
//       <Home />
//       <Admin />
//       <Detail />

//       {/* <Home exams={exams} />
//       <Admin onAddExam={handleAddExam} /> */}
//       {/* <Detail exams={exams} /> */}
//       {/* <Navbar /> Render Navbar */}
//       {/* <ExamView /> */}
//     </div>
//   );
// }

// export default App;
