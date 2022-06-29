import './App.css';
import React, {useState} from 'react';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';

function App() {
  const [checkout, setCheckout] = useState(false);
  const [cartContent, setContent] = useState([]);
  const item = "iPad"
  const [cartQTY, setQTY] = useState(0);

  if (checkout){
    return <Checkout 
              setCheckout={setCheckout}
              cartContent={cartContent}
              // getItem={getItem}
              />
  } else { return <ShoppingCart 
              setCheckout={setCheckout} 
              setContent={setContent}
              getItem={item}
              />}
}

// API CONNECTION

const postText = async (payload) => {
  if (payload.length !== 0){
    const rawResponse = await fetch('/api/amazon/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const content = await rawResponse.json();
  
    console.log(content);}
    else {
      alert('Nothing submitted');
    }
  };

export default App;
