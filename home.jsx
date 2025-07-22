import React from 'react';
import '/src/App.css'; 
import ToDoList from './ToDoList';
import { useNavigate } from 'react-router-dom';




export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="mx-screen bg-gray-900 text-white font-sans flex flex-col">
      {/* Navbar */}
      {/* <header className="p-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold text-cyan-400 hover: cursor-pointer" href="home">FocusFlow</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-cyan-300">Home</a>
          <a href="#" className="hover:text-cyan-300">Features</a>
          <a href="#" className="hover:text-cyan-300">About</a>
          <a href="#" className="hover:text-cyan-300">Login</a>
        </nav>
      </header> */}
      
      
      {/* Main */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-7xl md:text-7xl font-extrabold text-cyan-400 mb-4">
          Stay Focused. Stay Productive.
        </h2>
        <p className="text-3xl text-gray-300 mb-6 max-w-2xl">
          FocusFlow is your all-in-one productivity companion — block distractions, stay in focus mode, track your performance, and journal your thoughts.
        </p>
        <button className="px-6 py-3 bg-cyan-500 text-white rounded-4xl text-4xlg hover:bg-cyan-600 shadow-4xl transition cursor-pointer text-3xl" onClick={() => navigate("/getstarted")}>
           Get Started
        </button>

        

  



      
      </main>
     {/* Footer */}
      {/* <footer className="p-4 border-t border-gray-700 text-center text-sm text-gray-500 decoration-bold">
        © {new Date().getFullYear()} Jeshnu • All rights reserved
      </footer> */}
    </div>



  );










}


// Cards 
