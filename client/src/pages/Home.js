import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return ( 
    <div style={{ backgroundColor: "#1a202c" }} className="min-h-screen relative">
      <header className="bg-blue-400 text-white py-4">
        <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold">DiversityCodes</h1>
          <h3 className="text-3xl font-bold" style={{ color: '#f87171' }}>Doctor Database</h3>
        </div>
      </header>
      {/* Half-circle */}
      <div className="half-circle"></div>
      <div className="absolute bottom-0 right-20 mb-40">
        <div className="logo-container2">
          <img src="/favicon.png" alt="hacksLogo" className="logo" />
        </div>
      </div>
      {/* Main content */}
      <main className="container mx-auto mt-8 px-4">
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">About Us</h2>
          <p className="text-lg font-semibold text-white-700">
            Welcome to our MERN stack application.
            A application that allows doctors to 
            Create, Read, Update, and Delete (CRUD) 
            structured radiology reports as an assesment 
            of x-rays images for exams of patients with COVID-19.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
