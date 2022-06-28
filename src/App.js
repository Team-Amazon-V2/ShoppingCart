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

export default App;

// test test test