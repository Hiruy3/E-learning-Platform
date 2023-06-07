import React from "react";

import Cards from "../components/roadmapCard";

import img1 from "../assets/Images/CourseImages/1.jpg";
import img2 from "../assets/Images/CourseImages/2.jpg";
import img3 from "../assets/Images/CourseImages/3.jpg";
import img4 from "../assets/Images/CourseImages/4.jpg";
import img5 from "../assets/Images/CourseImages/5.jpg";
import img6 from "../assets/Images/CourseImages/6.jpg";

import "../style/Courses.css";
import Navbar from "../components/Navbar";

const Roadmap = ({ LoginStat }) => {
  return LoginStat === "true" ? (
    <>
      <Navbar/>
      <div className="row Main-row p-4 mx-3">
        <div className="row">
          <h5>Course Roadmaps</h5>
        </div>

        <div className="row card-row">
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img1}
              levelIcon="Beginner"
              Title="Frontend Foundation HTML + CSS"
              DownloadbtnState="d-flex"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              fileLink="https://docs.google.com/document/d/1soj1zvGHZ0xu0DYtlJwbzZ9EVcLoOMRludqdez1MAtk/edit?usp=sharing"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img2}
              levelIcon="Intermediate"
              Title="Javascript for Developer"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img3}
              levelIcon="Beginner"
              Title="Backend Basics"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img6}
              levelIcon="Beginner"
              Title="Intro to UI/UX Design"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-flex"
            />
          </div>
        </div>

        <div className="row card-row">
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img4}
              levelIcon="Advanced"
              Title="Advanced CSS + JavaScript"
              BadgeText="Coming Soon"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-none"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img5}
              levelIcon="Advanced"
              Title="API Development"
              BadgeText="Coming Soon"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-none"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img2}
              levelIcon="Advanced"
              Title="Introduction to React"
              BadgeText="Coming Soon"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-none"
            />
          </div>
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img6}
              levelIcon="Intermediate"
              Title="UI/UX Design for Developers"
              BadgeText="Coming Soon"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
              DownloadbtnState="d-none"
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    (window.location.href = "/Login")
  );
};

export default Roadmap;
