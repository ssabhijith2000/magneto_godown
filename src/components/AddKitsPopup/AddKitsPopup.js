import React, { useRef, useState, useEffect } from "react";
import "./AddKitsPopup.css";
import * as AiIcons from "react-icons/ai";
import { getAxiosInstance } from "../../utils/axios";

function AddKitsPopup(props) {
  const kitnameref = useRef();

  const handlesubmit = () => {
    const kitName = kitnameref.current.value;
    getAxiosInstance()
      .post("api/stockout", {
        kitName: kitName,
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

        <div className="row">
          <input
            ref={kitnameref}
            className="input"
            type="text"
            name="Kit Name"
            placeholder="Kit Name*"
          ></input>
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

export default AddKitsPopup;
