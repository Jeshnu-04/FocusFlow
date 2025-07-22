// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home.jsx";
import ToDoList from "./Components/ToDoList.jsx";
import { useNavigate } from 'react-router-dom';
import Cards from "./Components/Cards.jsx";
import Pomodoro from "./Components/pomodora.jsx";
import Journal from "./Components/journal.jsx";
import About from "./Components/about.jsx";
import MusicButton from './Components/MusicPlayer.jsx';


function App() {
    const navigate = useNavigate();
  return (
    <div>
        {/* Title Bar */}
      <header className="p-4 flex justify-between items-center border-b border-gray-700 bg-cyan-500" >
        <h1 className="text-2xl font-bold text-white-400 hover: cursor-pointer" href="#" onClick={() => navigate("/home")}>FocusFlow</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-cyan-300" onClick={() => navigate("/home")}>Home</a>
          <a href="#" className="hover:text-cyan-300" onClick={()=> navigate('/getstarted')}>Features</a>
          <a href="#" className="hover:text-cyan-300" onClick={()=> navigate('/getstarted')}>About</a>
          <a href="#" className="hover:text-cyan-300">Login</a>
        </nav>
      </header>
      <Routes> {/* ✅ All Route elements go inside this */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/getstarted" element={<Cards />} />
        <Route path="/pomodora" element={<Pomodoro />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal" element={<About />} />
        
      </Routes>

     <button className="fixed bottom-4 left-4 bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300">
      <MusicButton>Play The Fucking Music</MusicButton>
     </button>
      {/* Footer */}

      
      <footer className="p-4 border-t border-gray-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jeshnu • All rights reserved
      </footer>
    </div>
  );
}

export default App;





