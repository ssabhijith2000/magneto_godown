import React, { useRef, useEffect } from "react";
import Logo from "../../logo.png";
import { getAxiosInstance } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.token) {
      navigate("/home", { replace: true });
    }
  }, []);
  const handleSignin = async () => {
    const name = emailref.current.value;

    const password = passwordref.current.value;
    getAxiosInstance()
      .post("/api/login", {
        email: name,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/home", { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <center>
          <img
            width="100px"
            height="100px"
            src={Logo}
            alt="MagnetoBazaar"
          ></img>
          <br />
        </center>
        <form>
          <label htmlFor="fname">Email</label>
          <br />

          <input
            ref={emailref}
            className="input"
            type="text"
            id="email"
            name="Email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            ref={passwordref}
            className="input"
            type="password"
            id="password"
            name="password"
          />
          <br />
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSignin();
            }}
          >
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
