import React from 'react';
import { useNavigate } from 'react-router-dom';

// import { Container } from './styles';

function OrderSummary() {
    const navigate = useNavigate();
  return (
    <div
    style={{marginTop:"150px",textAlign:"center"}}
    >
        <div
          style={{marginBottom:"5px",fontSize:"20pt"}}
        >Order Confirmed!</div>
        <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
    );
}

export default OrderSummary;