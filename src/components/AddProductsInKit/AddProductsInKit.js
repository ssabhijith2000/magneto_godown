import React, { useRef, useState, useEffect } from "react";
import "./AddProductsInKit.css";
import * as AiIcons from "react-icons/ai";
import { getAxiosInstance } from "../../utils/axios";
import KitsProductsTable from "../KitsProductsTable/KitsProductsTable";

function AddProductsInKitPopup(props) {
  const [productsList, setproductsList] = useState([]);
  const [selectappear, setselectsappear] = useState(false);
  const [prodInKitList, setProdInKitList] = useState([]);
  useEffect(() => {
    getAxiosInstance()
      .get("/api/stockindropdown")
      .then((response) => {
        const data = response.data;
        setproductsList(data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const noOfUnitsRef = useRef();
  const productIdRef = useRef();
  const quanityRef = useRef();

  const handlesubmit = () => {
    const productId = productIdRef.current.value;
    const quanity = parseFloat(quanityRef.current.value);
    getAxiosInstance()
      .post("api/stockin", {
        productId: productId,
        quantity: quanity,
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
        <div className="content">Select the Kit to add Products</div>
        <div className="rowcenter">
          <select ref={noOfUnitsRef} className="dropdown">
            <option value="" disabled selected style={{ display: "none" }}>
              No of Units
            </option>
            {["Kit 1", "Kit 2"].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {selectappear ? (
          <KitsProductsTable list={prodInKitList} />
        ) : (
          <div></div>
        )}
        <div className="row">
          <select ref={productIdRef} className="dropdown">
            <option value="" disabled selected style={{ display: "none" }}>
              {" "}
              Product Name*{" "}
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
          <div className="icon">
            <AiIcons.AiOutlinePlusCircle
              size={30}
              onClick={() => {
                if (selectappear === false) setselectsappear(true);
                setProdInKitList([
                  ...prodInKitList,
                  {
                    kitType: noOfUnitsRef.current.value,
                    productId: productIdRef.current.value,
                    quantity: quanityRef.current.value,
                  },
                ]);
              }}
            />
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

export default AddProductsInKitPopup;
