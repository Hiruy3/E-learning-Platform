import React from "react";
import Logo from "../assets/Logo/logo.png";
import "../style/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {

  const FirstName = localStorage.getItem("userFirstname");
  const LastName = localStorage.getItem("userLastname");

  function handleLogout () {
    localStorage.setItem("Login", "false");
  }

  return (
    <div className="container-fluid mx-auto py-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo" width="170" height="30" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a 
                className="nav-link"
                href="/courses"
                >
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/roadmap">
                  Roadmaps
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/quiz">
                  Assessment
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="btn btn-primary text-white nav-link px-3 text-center"
                  href="/profile"
                >
                  {FirstName} {LastName}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-secondary text-white nav-link px-3 text-center"
                  href="/login"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
