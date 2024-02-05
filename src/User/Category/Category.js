import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';  // Make sure you import from 'react-router-dom'
import axios from 'axios';
import CatCard from './CatCard';

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
      {/* <Slider> */}
        {categories.map((category) => (
          <div key={category.id} onClick={() => loadCategory(category.id)}>
            <CatCard title={category.categorytype} imageUrl={category.categoryimageurl} />
            <CatCard/>
          </div>
        ))}
      {/* </Slider> */}
    </div>
  );
}

export default Category;
