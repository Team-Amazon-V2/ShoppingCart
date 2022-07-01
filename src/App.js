import './App.css';
import React, {useState} from 'react';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';

function App() {
  const [checkout, setCheckout] = useState(false);
  const [cartContent, setContent] = useState([]);
  const item = {id: 1} 
  //const [item] = useState([id: 1])
  const [cartQTY, setQTY] = useState(0);


  if (checkout){
    return <Checkout 
              setCheckout={setCheckout}
              cartContent={cartContent}
              
              />
  } else { return <ShoppingCart 
              setCheckout={setCheckout} 
              setContent={setContent}
              getItem={item}
              />}
}
// componentDidMount(){
//   fetch('/api/cart')
//  //  ,{
//  //   method: 'GET',
//  //   headers: {
//  //     'Accept': 'application/json',
//  //     'Content-Type': 'application/json'
//  //  },
//  //   body: JSON.stringify(payload)
//  // })
//  .then((res) => res.json)
//  .then(console.log(res.json));
// }


export default App;
