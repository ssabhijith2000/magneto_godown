import React, { useRef, useState, useEffect } from "react";
import "./StockInPopup.css";
import * as AiIcons from "react-icons/ai";
import { getAxiosInstance } from "../../utils/axios";

function StockInPopup(props) {
  const [productsList, setproductsList] = useState([]);
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    getAxiosInstance()
      .get("/api/stockindropdown")
      .then((response) => {
        const data = response.data;
        setproductsList(data.products);
        setCustomerList(data.customers);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const vendorRef = useRef();
  const noOfUnitsRef = useRef();
  const productIdRef = useRef();
  const unitPriceRef = useRef();
  const quanityRef = useRef();
  const descriptionRef = useRef();

  const handlesubmit = () => {
    let date = new Date();
    date = date.toISOString().split("T")[0];
    const noOfUnits = parseInt(noOfUnitsRef.current.value);
    const customerID = vendorRef.current.value;
    const productId = productIdRef.current.value;
    const unitPrice = parseFloat(unitPriceRef.current.value);
    const quanity = parseFloat(quanityRef.current.value);
    const description = descriptionRef.current.value;
    getAxiosInstance()
      .post("api/stockin", {
        date: date,
        customerId: customerID,
        productId: productId,
        nofUnits: noOfUnits,
        description: description,
        stock: noOfUnits,
        quantity: quanity,
        unitPrice: unitPrice,
      })
      .then((response) => {
        console.log(response.data);
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
          <p>{props.title}</p>
          <AiIcons.AiOutlineClose onClick={props.close} />
        </div>
        <div className="content">
          Please enter full product information below
        </div>
        <div className="row">
          <select ref={productIdRef} className="dropdown">
            <option value="" disabled selected style={{ display: "none" }}>
              {" "}
              Product name*{" "}
            </option>
            {productsList.map((item, index) => (
              <option key={index} value={item.id}>
                {item.product_name}
              </option>
            ))}
          </select>

          <input
            ref={quanityRef}
            className="input"
            type="number"
            name="Quantity"
            placeholder="Quantity*"
          ></input>
        </div>
        <div className="row">
          <select ref={noOfUnitsRef} className="dropdown">
            <option value="" disabled selected style={{ display: "none" }}>
              {" "}
              No of Units*{" "}
            </option>
            {Array.from({ length: 100 }, (_, i) => i + 1).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            ref={unitPriceRef}
            className="input"
            name="unitprice"
            placeholder="Unit Price*"
          ></input>
        </div>
        <div className="row">
          <select ref={vendorRef} className="dropdown">
            <option value="" disabled selected style={{ display: "none" }}>
              {" "}
              Vendor*{" "}
            </option>
            {customerList.map((item, index) => (
              <option key={index} value={item.id}>
                {item.customer_name}
              </option>
            ))}
          </select>
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

export default StockInPopup;
