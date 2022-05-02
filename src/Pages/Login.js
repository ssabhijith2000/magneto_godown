import React, { useEffect } from "react";
import Login from "../components/Login/Login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.token) {
      navigate("/home", { replace: true });
    }
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
