import React from "react";
// import ReactDOM from "react-dom/client";
import Hello from "./components/Hello";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navebar from "./components/Navebar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";

/* Example */
import Project1 from "./components/project/Project1";

function App() {
  return (
    <Router>
      <Navebar />
      <div className="container-fluid h-100">
        <div className="row">
          <div className="col-2 h-100">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              {/* Navbar */}
              <Route path="/" element={<Hello />}></Route>
              <Route path="/about" element={<About />}></Route>
              {/* Sidebar */}
              <Route path="/home" element={<Hello />}></Route>
              <Route path="/" element={<Hello />}></Route>
              <Route path="/" element={<Hello />}></Route>

              {/* Examples */}

              <Route path="/project1" element={<Project1 />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
