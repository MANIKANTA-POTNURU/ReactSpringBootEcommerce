import React, { useEffect, useState } from 'react';
import EcommerceCard from './EcommerceCard';
import { useNavigate } from 'react-router-dom';  // Make sure you import from 'react-router-dom'
import axios from 'axios';

function Category() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:1234/viewallcategories")
      .then((resp) => {
        setCategories(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loadCategory = (id) => {
    navigate("/user/viewproductsbycategory/" + id);
  };

  return (
    <div>
      <h2>E-commerce Categories</h2>
      <Slider>
        {categories.map((category) => (
          <div key={category.id} onClick={() => loadCategory(category.id)}>
            <EcommerceCard title={category.categorytype} imageUrl={category.categoryimageurl} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;
