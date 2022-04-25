import React from "react";
import Navbar from "../Sidebar/Navbar";
import "./kits.css";
import Popup from "reactjs-popup";

import StockButton from "../StockButton/StockButton";
import AddKitsPopup from "../AddKitsPopup/AddKitsPopup";
import AddProductsInKitPopup from "../AddProductsInKit/AddProductsInKit";
function KitsComponent() {
  return (
    <>
      <Navbar title="KITS" />
      <div style={{ marginLeft: 260 }}>
        <div className="container">
          <div className="button2">
            <Popup
              trigger={
                <a>
                  <StockButton title="Add Kits" />
                </a>
              }
              position="right center"
            >
              {(close) => <AddKitsPopup title="Add Kits" close={close} />}
            </Popup>
            <Popup
              trigger={
                <a>
                  <StockButton title="Add Products to Kits" />
                </a>
              }
              position="right center"
            >
              {(close) => (
                <AddProductsInKitPopup
                  title="Add Products to Kits"
                  close={close}
                />
              )}
            </Popup>
          </div>
        </div>
      </div>
    </>
  );
}

export default KitsComponent;
