import React, { useEffect } from "react";
import StockInComponent from "../components/Stockin/Stockin";
import { useNavigate } from "react-router-dom";

function StockIn() {
  const navigate = useNavigate();

  return <StockInComponent />;
}

export default StockIn;
