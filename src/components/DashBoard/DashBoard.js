import React from "react";
import Navbar from "../Sidebar/Navbar";
import "./DashBoard.css";

import StockButton from "../StockButton/StockButton";
import Popup from "reactjs-popup";
import ProductsTable from "../ProductsTable/ProductsTable";
import NewProductsPopup from "../NewProductsPopup/NewProductsPopup";
function DashBoard() {
  return (
    <>
      <Navbar title="Products" />
      <div style={{ marginLeft: 260 }}>
        <div className="container">
          <div className="button2">
            <Popup
              trigger={
                <a>
                  <StockButton title="Add Products" />
                </a>
              }
              position="right center"
            >
              {(close) => (
                <NewProductsPopup
                  title="Add Product"
                  route="/api/productin"
                  close={close}
                />
              )}
            </Popup>
          </div>
        </div>
        <ProductsTable title="New Products" />
      </div>
    </>
  );
}

export default DashBoard;
