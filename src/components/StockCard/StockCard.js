import React from "react";
import * as AiIcons from "react-icons/ai";
import style from './StockCard.css'
function StockCard(props) {
    const styles = {height: 100,
        margin:'10px 10px 10px 0px',
        display:'flex',
        justifyContent:"space-between",
        width: '250px',
        padding: '1rem',
        borderRadius: '5px',
        color: 'white'
        

    }
  return (
    <div style={{...styles, backgroundColor:props.color}}>
      <div >
        <div className='products'>PRODUCTS</div>
        <div  className = 'stockin'>STOCK  {props.inorout}</div>
        <div className = 'number'>{props.numberofStocks}</div>
      </div>
      <div className = 'image'>
          {props.inicon? <AiIcons.AiOutlineImport size={70}/> :<AiIcons.AiOutlineExport size={70}/>}
    
      </div>
    </div>
  );
}

export default StockCard;
