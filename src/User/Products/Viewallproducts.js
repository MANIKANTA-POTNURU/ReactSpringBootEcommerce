import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
const Viewallproducts = () => {
const[products, setProducts] =useState([]);
useEffect(()=>{
  axios.get("http://localhost:1234/viewallproducts")
  .then((response)=>{
    setProducts(response.data);
  })
  .catch((error)=>{
    console.log(error);
  })
},[])
const addtocart = (id) => {
  let userid = sessionStorage.getItem("uid");
  if(userid === null || userid === ""){
    alert("Please login first");
  }
  
    else {
      axios.put(`http://localhost:1234/${userid}/cart/${id}`)
        .then((response) => {
          toast.success('Product AddedTocartSuccessfully.');
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error, if needed
          console.error(error);
        });
    }
    
  }
  return (
    <div className="container mt-5">
      <div className="row">
      <h2>Products Page</h2>
        {products.map((product) => (
          <div key={product.productId} className="col-lg-4 mb-4">
            <Card>
              <Card.Img variant="top" src={product.produrl} />
              <Card.Body>
                <Card.Title>{product.productname}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                {/* <Card.Text className="text-muted">{product.price}</Card.Text> */}
                <Button variant="primary" onClick={() => addtocart(product.productId)} >Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viewallproducts;
