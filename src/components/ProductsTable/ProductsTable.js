import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import { getAxiosInstance } from "../../utils/axios";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
function ProductsTable(props) {
  const [listdata, setListData] = useState([]);
  useEffect(() => {
    getAxiosInstance()
      .get("/api/productlist")
      .then((response) => {
        const data = response.data;

        setListData(data.products);
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

          <td>Product Name</td>
          <td>Product ID</td>

          <td> Unit Price </td>
          <td>Stock left</td>
          <td>Product Description</td>
          <td>Actions</td>
        </tr>
        {listdata.map((item, index) => {
          return (
            <tr className="content">
              <td>{index + 1}</td>
              <td>{item.product_name}</td>
              <td>{item.id}</td>
              <td>{item.unit_price}</td>
              <td>{item.stockleft}</td>
              <td>{item.description}</td>
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

export default ProductsTable;
