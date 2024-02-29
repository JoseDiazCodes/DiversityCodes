import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./index.css"
import App from "./App" // Import App component
import reportWebVitals from "./reportWebVitals"
import Modal from "react-modal"
Modal.setAppElement("#root")

const root = document.getElementById("root")
createRoot(root).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)

reportWebVitals()
