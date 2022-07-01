import React from 'react';
import './Checkout.css';
import ipad from '/Users/anthonyclay/coding/AMAZON/shopping-cart/src/ipad.jpg';

function Checkout(props) {
  function handler(){
    props.setCheckout(false)
    console.log(props.cartContent)
  }
    return (
      <div className="Checkout">
      <h1>Shopping Cart</h1>
      <h4>Deselect all items</h4>
      <div className="container">
      <h2><img src={ipad} alt="photo" /></h2>
      <div className="cont2"> {props.cartContent[0]} $569.00 </div>
      </div>
      <button> Checkout </button>
       <button onClick={() =>handler()}>Return to item page</button>
      </div>
    );
  }

export default Checkout;