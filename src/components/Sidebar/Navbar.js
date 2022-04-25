import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="nav-menu">
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div style={{ display: "flex" }}>
              <div style={{ alignContent: "end" }}>
                <div className="logo">MAGNETO BAZAAR</div>

                <div className="logosub">GODOWN</div>
              </div>
            </div>
          </li>

          <li className="nav-text ">
            <Link to="/home">
              <FaIcons.FaRegClipboard /> <span>Products</span>
            </Link>
          </li>
          <hr className="rule" />
          <li className="nav-text">
            <Link to="/stockin">
              <AiIcons.AiOutlineImport className={"icon"} />

              <span>STOCK IN</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/stockout">
              <AiIcons.AiOutlineExport className={"icon"} />

              <span>STOCK OUT</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/kits">
              <AiIcons.AiOutlineShopping className={"icon"} />
              <span>KITS</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="navbar">
        <div>
          <div className="menu-bars">
            <FaIcons.FaBars />
          </div>
          <p className="pagetitle"> {props.title}</p>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="nav-icons">
              <BsIcons.BsChat />
            </li>
            <li className="nav-icons">
              <IoIcons.IoMdNotifications />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
