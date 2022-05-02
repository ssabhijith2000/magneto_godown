import React, { useEffect } from "react";
import StockOutComponent from "../components/StockOut/Stockout";
import { useNavigate } from "react-router-dom";

function StockOut() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.token) {
      navigate("/", { replace: true });
    }
  }, []);
  return <StockOutComponent />;
}

export default StockOut;
