import './App.css';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';

function App() {
  const shoppingCart = true;

  return (
    <div>
    {/* <ShoppingCart /> */}
     { function check(shoppingCart) {if(shoppingCart){return  <ShoppingCart />} else{return <Checkout />}}
    </div>
  );
}

export default App;
