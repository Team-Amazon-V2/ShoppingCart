import React from 'react';
import './Checkout.css';

function Checkout(props) {
  function handler(){
    props.setCheckout(false)
    console.log(props.cartContent)
  }
    return (
      <div className="Checkout">
      <h1>Shopping Cart</h1>
      <h4>Deselect all items</h4>
      <h2>{props.cartContent} $569.00</h2>
       <button onClick={() =>handler()}>Return to item page</button>
      </div>
    );
  }

export default Checkout;