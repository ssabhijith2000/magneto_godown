import React, { useRef, useState, useEffect } from "react";
import "./StockOutPopup.css";
import * as AiIcons from "react-icons/ai";
import { getAxiosInstance } from "../../utils/axios";

function StockOutPopup(props) {
  const [kitTypeList, setKitTypeList] = useState(["KIT1"]);
  const collectedbyRef = useRef();
  const noOfKitsRef = useRef();
  const kitTypeRef = useRef();
  const remarksRef = useRef();

  const handlesubmit = () => {
    let date = new Date();
    date = date.toISOString().split("T")[0];
    const collectedby = collectedbyRef.current.value;
    const noOfKits = parseInt(noOfKitsRef.current.value);
    const kitType = kitTypeRef.current.value;
    const remarks = remarksRef.current.value;
    getAxiosInstance()
      .post("api/stockout", {
        date: date,
        kitType: kitType,
        collectedBy: collectedby,
        nofKit: noOfKits,
        remarks: remarks,
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
          <select ref={kitTypeRef} className="dropdown">
            <option value="" disabled selected style={{ display: "none" }}>
              {" "}
              Kit Type*{" "}
            </option>
            {kitTypeList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            ref={collectedbyRef}
            className="input"
            type="text"
            name="Collected by"
            placeholder="Collected by*"
          ></input>
        </div>

        <div className="row">
          <select ref={noOfKitsRef} className="dropdown">
            <option value="" disabled selected style={{ display: "none" }}>
              {" "}
              No of Kits*{" "}
            </option>
            {Array.from({ length: 100 }, (_, i) => i + 1).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>

          <div className="textarea">
            <label>Remarks</label>
            <br />
            <textarea
              ref={remarksRef}
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

export default StockOutPopup;
