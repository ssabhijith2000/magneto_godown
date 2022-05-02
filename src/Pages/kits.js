import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KitsComponent from "../components/Kits/kits";

function Kits() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.token) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <div>
      <KitsComponent />
    </div>
  );
}

export default Kits;
