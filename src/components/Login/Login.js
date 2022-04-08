import React from 'react';
import Logo from '../../logo.png';
import './Login.css';

function Login() {
  return (
    <div>
      <div className="loginParentDiv">
        <center>

        <img width="100px" height="100px" src={Logo} alt = 'MagnetoBazaar'></img>
        <br />
        </center>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
