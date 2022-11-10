import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  function add(item) {
    
    const a = {...cart};
    if(item.name in a){
      a[item.name] = a[item.name]+1
    }
    else{
      a[item.name] = 1
    }

    setCart(a)
    setTotal(total + item.price)
  }
  return (
    <div className="App">
      <div >
        <div className="item1">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      </div>
        <div className = "Bakery">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components

          <BakeryItem className = "BakeryItem" item = {item} add = {add}/> // replace with BakeryItem component
        ))}
        </div>
      </div>
      <div>
        <h2>Cart</h2>
        {Object.entries(cart).map(([k, v]) => {
     return <p>{k} X{v}</p>
   })}
    <p>Total: ${total}</p>
      </div>
    </div>
  );
}

export default App;
