import React, { useEffect } from "react";
import StockInComponent from "../components/Stockin/Stockin";
import { useNavigate } from "react-router-dom";

function StockIn() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.token) {
      navigate("/", { replace: true });
    }
  }, []);

  return <StockInComponent />;
}

export default StockIn;
