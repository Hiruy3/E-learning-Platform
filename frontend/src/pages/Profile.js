import React, { useEffect, useState } from "react";

import "../style/Profile.css";

import axios from "axios";

import Avatar from "../assets/icons/avatar.svg";

import Navbar from "../components/Navbar";


const Profile = ({LoginStat}) => {

/*  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    github: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
*/

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
      `http://elearning-api.heyeman.com/users/me`,
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

  return ( 
      (LoginStat === 'true')?
    <>
    <Navbar/>
    <div className="container-fluid bg-light mb-5 pb-5">
      <div
        className="row blue-gradient text-center text-white p-5 border rounded"
        style={{ fontSize: "1.6rem" }}
      >
        <div className="col-md-12 col-12">
          UTOPIX <span style={{ fontSize: "1rem" }}>E-LEARNING</span> COHORT#1
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 col-12 mx-auto text-center text-dark">
          PROFILE INFORMATION{" "}
        </div>
        <div className="col-md-12 col-12 mt-4 text-center">
          <img
            src={Avatar}
            className="rounded-circle text-center mx-auto d-block pb-1 border"
            style={{ width: "5.5rem" }}
            alt="Avatar"
          />
        </div>
        <div className="col-md-3 col-6 mt-5 bg-dark text-white text-center mx-auto">
          <div className="row">
            <div className="col-md-6 col-12 border py-2">
              Rank
              <span className="badge bg-primary text-white ms-2">3</span>
            </div>
            <div className="col-md-6 col-12 py-2">
              Points
              <span className="badge bg-primary text-white ms-2">100</span>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="row mt-5">
          <div className="col-md-10 mx-auto">
            <div className="row mx-auto">
              <div className="col-md-4 mx-auto">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  value={data.firstname}
                  disabled
                />
              </div>

              <div className="col-md-4 right-inputs mx-auto">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  value={data.lastname}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-10 mx-auto">
            <div className="row mx-auto">
              <div className="col-md-4 mx-auto">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  value={data.email}
                  disabled
                />
              </div>

              <div className="col-md-4 right-inputs mx-auto">
                <label className="form-label">Github Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputGithub"
                  value={data.github}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row input-row">
          <div className="col-md-10 mx-auto">
            <div className="row mx-auto">
            <div className="col-md-10 bg-primary text-white right-inputs mx-auto text-center">
                <p>
                Want to change your info's? Contact admins using Email:
                <a href="mailto:utopixtechnologies@gmail.com" className="text-dark mx-2">
                  utopixtechnologies@gmail.com 
                </a>
                or
                <a href="https://t.me/utopixtech" className="mx-2 text-dark">
                 @utopix 
                </a>
                on Telegram
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row input-row-2 mx-auto"></div>
{/** 
        <div className="row mb-5 mt-3 btn-row mx-auto">
          <div className="col-md-6 text-center mx-auto">
            <button className="btn submit-btn btn-primary" type="submit">
              Save
            </button>
          </div>
          <div className="col-md-6 mx-auto mb-5 text-center">
            <button className="btn submit-btn btn-secondary" type="submit">
              Cancel
            </button>
          </div>
        </div>
        **/}
      </form>
    </div>
    </>
    :
    window.location.href = "/Login"
      
  );
};

export default Profile;
