import React, { useEffect, useState } from "react";
import "./StockOutTable.css";
import { getAxiosInstance } from "../../utils/axios";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
function StockOutTable(props) {
  const [listdata, setListData] = useState([]);
  useEffect(() => {
    getAxiosInstance()
      .get("/api/stockoutlist")
      .then((response) => {
        const data = response.data;
        setListData(data.stockouts.reverse());
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
          <td colSpan={7}> {props.title}</td>
        </tr>
        <tr className="heading">
          <td>S. No</td>
          <td>Date</td>
          <td>Kit Type</td>
          <td>No of Kits</td>
          <td>Collected By </td>
          <td>Remarks</td>
          <td>Actions</td>
        </tr>
        {listdata.map((item, index) => {
          return (
            <tr className="content">
              <td>{index + 1}</td>
              <td>{item.date}</td>
              <td>{item.item}</td>
              <td>{item.nofitem}</td>
              <td>{item.collectedby}</td>
              <td>{item.remarks}</td>
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

export default StockOutTable;
