import React from 'react';
import './ShoppingCart.css';

function ShoppingCart() {
    function handleCheckout(e){
      e.preventDefault();
      console.log('You cliked something')
    }

    return (
      <div className="ShoppingCart">
       Buy new:<br></br>
       $569.00<br></br>
       & FREE Returns<br></br>
       FREE delivery Sunday, July 3<br></br> 
       <br></br>
       Or fastest delivery Wednesday,<br></br>
       June 29. Order within 6 hrs 3 mins<br></br>
        <br></br>
       Select delivery location<br></br>
       <h3>In Stock.</h3>
       <select name="selectList" id="selectList">
          <option value="QTY 1">QTY: 1</option>
          <option value="QTY 2">QTY: 2</option>
          <option value="QTY 3">QTY: 3</option>
        </select><br></br>
        <button className="AddToCart">Add to Cart</button><br></br>
        <button onClick={handleCheckout} className="BuyNow">Buy Now</button><br></br>
        Secure transaction<br></br>
         <br></br>
         Ships from Amazon.com<br></br>
         Sold by Amazon.com<br></br>
         <br></br>
         Return policy:<p className="ReturnPolicy"> Eligible for Return,</p> <br></br>
         Refund or Replacement within 30<br></br>
         days of receipt <br></br>
         <br></br>
         Support: Free Amazon tech support included<br></br>
         <br></br>
         Add a Protection Plan:<br></br>
            AppleCare+ for iPad Air (5th<br></br>
             generation) - 2 year for<br></br>
             $79.00<br></br>
             <br></br>
            AppleCare+ for iPad Air (5th<br></br>
            generation) - Renews<br></br>
            Monthly until Cancelled for<br></br>
            $3.99/month 
      <div>Save with Used-Good</div>
      </div>
    );
  }

export default ShoppingCart;