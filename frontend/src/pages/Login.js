import React, { useState } from "react";
import axios from "axios";
import Logo from "../assets/Logo/logo.png";
import "../style/Account.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = ({LoginStat}) => {
  let [login, setLogin] = useState(false);
  
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const getUsers = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "http://elearning-api.heyeman.com/users/auth/login",
        {
          email: values.email,
          password: values.password,
        }
      );

      alert("you have successfully loggedin");

      setLogin = true;

      window.location.href = "/dashboard";

      localStorage.setItem("Token", res.data.tokens.accessToken);
      localStorage.setItem("refreshToken", res.data.tokens.refreshToken);
      localStorage.setItem("Id", res.data.userDetails._id);
      localStorage.setItem("userEmail", res.data.userDetails.email);
      localStorage.setItem("userFirstname", res.data.userDetails.firstname);
      localStorage.setItem("userLastname", res.data.userDetails.lastname);
      localStorage.setItem("userGithub", res.data.userDetails.githubUsername);
      localStorage.setItem("userGender", res.data.userDetails.gender);
      localStorage.setItem("Login", "true");

      console.log(res.data);
    } catch (err) {
      setLogin = false;
      alert(err.message);
      localStorage.setItem("Login", "false");
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
          <a className="menu-button text-decoration-none" href="/signup">
            SIGN UP
          </a>
        </div>
        <div className="col-md-6 col-6 text-center">
          <a className="menu-button active text-decoration-none" href="/login">
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
                <span className="social-text ps-2">Login with Google</span>
              </div>
              <div className="col-md-5 col-11 rounded social-button btn pt-2">
                <BsGithub className="github-icon " size={30} />
                <span className="social-text ps-2">Login with Github</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center pb-3 bg-white">Or</div>

        <form onSubmit={getUsers}>
          <div className="form-row mx-auto bg-white mt-4">
            <div className="col-md-12 col-12 mx-auto">
              <div className="row mx-auto">
                <div className="col-md-10 col-12 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChange("email")}
                  />
                </div>
                <div className="col-md-10 col-12 mx-auto my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange("password")}
                  />
                </div>
                <div className="col-md-10 col-12 mx-auto my-4">
                  <button className="btn btn-primary form-control">
                    SIGN IN
                  </button>
                </div>
                <div className="col-md-10 col-12 mx-auto text-center my-2">
                  Forgot Password?
                  <a className="text-decoration-none" href="#Forgot">
                    {" "}
                    Reset
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    :
    window.location.href = "/Dashboard"
  );
};

export default Login;
