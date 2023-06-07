import React,{useEffect, useState} from "react";
import axios from "axios";

import Cards from "../components/CourseCard";

import "../style/Courses.css";
import Navbar from "../components/Navbar";

import img1 from "../assets/Images/CourseImages/1.jpg";

const Courses = ({LoginStat}) => {
  const [data, setData] = useState([]);
  let localToken = localStorage.getItem("Token");
  let localrefreshToken = localStorage.getItem("refreshToken");


  const fetchQuotes = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localToken}`,
        refreshToken: localrefreshToken,
      },
    };
    const res = await axios.get(
      `http://elearning-api.heyeman.com/courses/1`,
      config
    );

    console.log(res.data);
    return res.data;
  };

  useEffect(() => {
    fetchQuotes().then((data) => {
      setData(data);
    });
  }, []);

  console.log(data);

  return (
    (LoginStat === 'true')?
    <>
    <Navbar/>
      <div className="row Main-row p-4 mx-3">
        <div className="row">
          <h5>Programming Courses</h5>
        </div>

        <div className="row card-row">
          {/**Mapping */}
          <div className="col-md-3 col-12 custom-card">
            <Cards
              img={img1}
              levelIcon="Beginner"
              Title="Frontend Foundation HTML + CSS"
              description="Some quick example text to build on the card title and make up the
              bulk of the card's content."
            />
          </div>
         
        </div>

       
      </div>
    </>
    :
    window.location.href = "/Login"
  );
};

export default Courses;
