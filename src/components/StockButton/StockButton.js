import React from "react";
import  './StockButton.css'
function StockButton(props) {
    
  return (
    <div className = "button1">
      {props.title}
      
    </div>
  );
}

export default StockButton;
