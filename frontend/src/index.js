import React from "react";
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Roadmap from "./pages/Roadmap";
import Footer from "./components/Footer";
import CourseDetailTop from "./components/CourseDetail-top";
import CourseDetail from "./pages/CourseDetail";

require("jquery");
require("bootstrap");

function App() {
  let LoginStatus = localStorage.getItem("Login");
console.log(LoginStatus);
  return (
    <>
      <div className="container-fluid bg-light pb-5">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Dashboard LoginStat={LoginStatus}/>} />
            <Route path="/signup" element={<Signup LoginStat={LoginStatus}/>} />
            <Route path="/dashboard" element={<Dashboard LoginStat={LoginStatus}/>} />
            <Route path="/profile" element={<Profile LoginStat={LoginStatus}/>} />
            <Route path="/courses" element={<Courses LoginStat={LoginStatus}/>} />
            <Route path="/courses/:id" element={<CourseDetail LoginStat={LoginStatus}/>} />
            <Route path="/roadmap" element={<Roadmap LoginStat={LoginStatus}/>} />
            <Route path="*" element={<Dashboard LoginStat={LoginStatus}/>} />
          <Route path="/login" element={<Login LoginStat={LoginStatus}/>} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
