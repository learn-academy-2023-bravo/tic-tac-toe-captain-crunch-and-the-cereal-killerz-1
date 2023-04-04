
import React, {useState} from "react";

const Square = ({ value, index, handleGamePlay }) => {
  
  const handleClick = () => {
      handleGamePlay(index)
    };
return (
    <div className="square" onClick={handleClick}>{value}</div>
    );
};



export default Square;
