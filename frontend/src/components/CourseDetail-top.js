import React from "react";
import "../style/Course-detail.css";

import { GoPrimitiveDot } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import {BiDollarCircle} from 'react-icons/bi';
import {AiOutlineDownload} from 'react-icons/ai';

import utopix from "../assets/Images/Instructer/utopix.png";

const CourseDetailTop = () => {
  return (
    <div className="container bg-primary">
      <div className="row">
        <div className="col-md-6 course-detail">
          <p className="text-white course-title">
            Frontend Foundation HTML + CSS
          </p>
          <GoPrimitiveDot className="text-success" />
          <span className="text-white"> Beginner </span>

          <div className="d-flex justify-content-between mt-4">
            <div className="d-flex">
              <img
                src={utopix}
                alt="profile-img"
                width="150px"
                height="30px"
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 course-detail">
          <h5 className="text-white">About this Course</h5>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          
          <div className="row mt-5">
          <div className="col-md-5">
              <IoMdTime className="text-white" size={35}/>
              <span className="ms-2 text-white"> 3 Months </span>
            </div>

        <div className="col-md-5">
            <BiDollarCircle className="text-white" size={35}/>
            <span className="ms-2 text-white"> Free </span>
        </div> 
        </div>  

        <div className="row mt-4 pt-3">
              <div className="col-md-12">
              <a className="text-dark text-decoration-none" href="download">
                <AiOutlineDownload className="text-white me-1" />
                <span className="text-white"> Download the course outline </span>
              </a>
            </div>
            </div> 

        </div>
      </div>
    </div>
  );
};

export default CourseDetailTop;
