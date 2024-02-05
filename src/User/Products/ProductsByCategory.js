import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductsByCategory() {
  const { catid } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1234/viewproductsbycategory?catid=${catid}`)
      .then((resp) => {
        setProducts(resp.data.relatedproducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [catid]);

  return (
    <div>
      <h2>Related Products</h2>
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

export default ProductsByCategory;
