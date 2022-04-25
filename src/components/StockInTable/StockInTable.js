import React, { useEffect, useState } from "react";
import "./StockInTable.css";
import { getAxiosInstance } from "../../utils/axios";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
function StockInTable(props) {
  const [listdata, setListData] = useState([]);
  useEffect(() => {
    getAxiosInstance()
      .get("/api/stockinlist")
      .then((response) => {
        const data = response.data;
        setListData(data.stocklist.reverse());
        console.log(listdata);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <table className="customtable">
        <tr>
          <td colSpan={11}> {props.title}</td>
        </tr>
        <tr className="heading">
          <td>S. No</td>
          <td>Date</td>
          <td>Product Name</td>
          <td>Product ID</td>
          <td>Vendor Name</td>
          <td>Vendor ID</td>
          <td> Unit Price </td>
          <td>Quantity</td>
          <td>No of units</td>
          <td>Product Description</td>
          <td>Actions</td>
        </tr>
        {listdata.map((item, index) => {
          return (
            <tr className="content">
              <td>{index + 1}</td>
              <td>{item.date}</td>
              <td>{item.productName}</td>
              <td>{item.product_id}</td>

              <td>{item.customerName}</td>
              <td>{item.customer_id}</td>

              <td>{item.value}</td>
              <td>{item.quantity}</td>
              <td>{item.stock}</td>
              <td>{item.type}</td>
              <td>
                <AiIcons.AiFillDelete /> <FiIcons.FiEdit />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default StockInTable;
