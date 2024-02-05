import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Cart() {
  const [products, setProducts] = useState([]);
  let userid = sessionStorage.getItem("uid");
  useEffect(() => {
    
    axios.get(`http://localhost:1234/viewuser?userid=${userid}`)
      .then((resp) => {
        setProducts(resp.data.productsincart);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userid]);

  return (
    <div>
      <h2>Products in Cart</h2>
      <ul>
        {products.map((product) => (
          <li key={product.productId}>
            <h3>{product.productname}</h3>
            <p>{product.description}</p>
           <img src={product.productimageurl} alt={"Image inka add cheyaledhu kadha"} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
