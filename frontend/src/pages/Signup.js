import React, { useState } from "react";
import Logo from "../assets/Logo/logo.png";
import axios from "axios";
import "../style/Account.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Signup = ({LoginStat}) => {
  const [values, setValues] = useState({
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    github: "",
    gender: "Male",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const regUsers = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "http://elearning-api.heyeman.com/users/auth/register",
        {
          lastname: values.lastName,
          password: values.password,
          firstname: values.firstName,
          email: values.email,
          githubUsername: values.github,
          gender: values.gender,
        }
      );

      alert("you have successfully Registered");

      window.location.href = "/login";
      console.log(res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    (LoginStat === 'false')?
    <div className="container-fluid mx-auto py-3">
      <div className="row my-4">
        <div className="col-12 col-md-12 mx-auto text-center">
          <img src={Logo} alt="Logo" className="img-fluid" />
        </div>
      </div>
      <div className="menu-row mx-auto bg-white">
        <div className="col-md-6 col-6 text-center">
          <button className="menu-button active">SIGN UP</button>
        </div>
        <div className="col-md-6 col-6 text-center">
          <a className="menu-button text-decoration-none" href="/login">
            SIGN IN
          </a>
        </div>
      </div>

      <div className="container-fluid-custom mx-auto">
        <div className="social-row mx-auto bg-white">
          <div className="col-md-12 col-12 mx-auto">
            <div className="row mx-auto">
              <div className="col-md-5 col-11 rounded social-button btn pt-2">
                <FcGoogle className="google-icon" size={30} />
                <span className="social-text ps-2">Signup with Google</span>
              </div>
              <div className="col-md-5 col-11 rounded social-button btn pt-2">
                <BsGithub className="github-icon " size={30} />
                <span className="social-text ps-2">Signup with Github</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center py-3 bg-white">Or</div>

        <div className="form-row mx-auto bg-white mt-4">
          <div className="col-md-12 col-12 mx-auto">
            <div className="row mx-auto">
              <form onSubmit={regUsers}>
                <div className="col-md-10 col-12 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={handleChange("firstName")}
                  />
                </div>
                <div className="col-md-10 col-12 mx-auto my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={handleChange("lastName")}
                  />
                </div>
                <div className="col-md-10 col-12 mx-auto my-4">
                  <select name="gender" id="gender" className="border rounded p-2 w-100" onChange={handleChange("gender")}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-md-10 col-12 mx-auto my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Github Username"
                    onChange={handleChange("githubUsername")}
                  />
                </div>

                <div className="col-md-10 col-12 mx-auto mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChange("email")}
                  />
                </div>
                <div className="col-md-10 col-12 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange("password")}
                  />
                </div>

                <div className="col-md-10 col-12 mx-auto my-4">
                  <button className="btn btn-primary form-control">
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
    window.location.href = "/Dashboard"
  );
};

export default Signup;
