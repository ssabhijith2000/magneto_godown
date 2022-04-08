import React from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';

function Header() {
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
         
          <input type="text" />
       
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
         
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
         
        </div>
        <div className="loginPage">
          <span>Login</span>
          <hr />
        </div>

        <div className="sellMenu">
       
          <div className="sellMenuContent">
            
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
