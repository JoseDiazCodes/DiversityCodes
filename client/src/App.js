import React from "react"
import { Route, Routes, Switch } from "react-router-dom"
import "./App.css"


// import ExamView from "./pages/ExamView";
import Home from "./pages/Home"
import Navbar from "./components/NavBar" // Import Navbar
import Admin from "./pages/Admin"
import Footer from "components/Footer"

function App() {
	return (
		<div className="App">
			<Navbar /> {/* Render Navbar */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="admin" element={<Admin />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
