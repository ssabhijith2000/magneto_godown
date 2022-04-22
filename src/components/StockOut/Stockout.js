import React from "react";
import Navbar from "../Sidebar/Navbar";
import "./Stockout.css";
import Popup from "reactjs-popup";
import StockOutTable from "../StockOutTable/StockOutTable";

import StockButton from "../StockButton/StockButton";
import StockOutPopup from "../StockOutPopup/StockOutPopup";
function StockOutComponent() {
  return (
    <>
      <Navbar title="STOCK OUT" />
      <div style={{ marginLeft: 260 }}>
        <div className="container">
          <div className="button2">
            <Popup
              trigger={
                <a>
                  <StockButton title="Add Stock Out" />
                </a>
              }
              position="right center"
            >
              {(close) => <StockOutPopup title="Add Stock Out" close={close} />}
            </Popup>
          </div>
        </div>
        <StockOutTable title="Stock Out" />
      </div>
    </>
  );
}

export default StockOutComponent;
