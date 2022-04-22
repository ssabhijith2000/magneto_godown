import React, { useState } from "react";
import Navbar from "../Sidebar/Navbar";
import "./Stockin.css";
import StockInTable from "../StockInTable/StockInTable";
import StockButton from "../StockButton/StockButton";
import Popup from "reactjs-popup";
import StockInPopup from "../StockInpopup/StockInPopup";

function StockInComponent() {
  return (
    <>
      <Navbar title="STOCK IN" />
      <div style={{ marginLeft: 260 }}>
        <div className="container">
          <div className="button2">
            <Popup
              trigger={
                <a>
                  <StockButton title="Add Stock In" />
                </a>
              }
              position="right center"
            >
              {(close) => (
                <StockInPopup
                  title="Add Stock In"
                  route="/api/productin"
                  close={close}
                />
              )}
            </Popup>
          </div>
        </div>
        <StockInTable title="Stock In" />
      </div>
    </>
  );
}

export default StockInComponent;
