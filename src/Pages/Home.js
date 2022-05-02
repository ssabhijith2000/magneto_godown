import React, { useEffect } from "react";
import DashBoardComponent from "../components/DashBoard/DashBoard";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.token) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <div>
      <DashBoardComponent />
    </div>
  );
}

export default DashBoard;
