import React, { useRef, useState, useEffect } from "react";
import "./NewProductsPopup.css";
import * as AiIcons from "react-icons/ai";
import { getAxiosInstance } from "../../utils/axios";

function NewProductsPopup(props) {
  const productNameRef = useRef();
  const unitPriceRef = useRef();
  const descriptionRef = useRef();

  const handlesubmit = () => {
    const productName = productNameRef.current.value;
    const unitPrice = unitPriceRef.current.value;
    const description = descriptionRef.current.value;
    getAxiosInstance()
      .post("api/productin", {
        productName: productName,
        description: description,
        unitPrice: unitPrice,
      })
      .then((response) => {
        alert("submit successfull");
      })
      .then(props.close)
      .catch((e) => {
        alert("Something went wrong");
        console.log(e);
      });
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="title">
          <p>Add Products</p>
          <AiIcons.AiOutlineClose onClick={props.close} />
        </div>
        <div className="content">
          Please enter full product information below
        </div>
        <div className="row">
          <input
            ref={productNameRef}
            className="input"
            type="text"
            name="Product Name"
            placeholder="Product Name*"
          ></input>
          <input
            ref={unitPriceRef}
            type="number"
            className="input"
            name="Unit Price"
            placeholder="Unit Price*"
          ></input>
        </div>

        <div className="row">
          <div className="textarea">
            <label>Description</label>
            <br />
            <textarea
              ref={descriptionRef}
              className="input-textarea"
              placeholder="Type something here..."
            ></textarea>
          </div>
        </div>
        <div className="button-row">
          <a className="cancel-buttton" onClick={props.close}>
            Cancel
          </a>
          <div
            onClick={(e) => {
              e.preventDefault();
              handlesubmit();
            }}
            className="add-button"
          >
            {props.title}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProductsPopup;
