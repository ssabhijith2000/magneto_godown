import React, { useEffect, useState } from "react";
import "./KitsProductsTable.css";
import { getAxiosInstance } from "../../utils/axios";
function KitsProductsTable(props) {
  useEffect(() => {
    console.log(props.list);
  }, []);
  return (
    <div>
      <table className="customtable">
        <tr className="heading">
          <td className="customtd">Kit Type</td>
          <td className="customtd">Product ID</td>
          <td className="customtd">Quantity</td>
        </tr>
        {props.list.map((item, index) => {
          return (
            <tr className="content">
              <td className="customtd">{item.kitType}</td>
              <td className="customtd">{item.productId}</td>
              <td className="customtd">{item.quantity}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default KitsProductsTable;
