import React from 'react'

import Slider from 'react-slick';

// Import your card components
import EcommerceCard from './EcommerceCard ';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Category() {
  const categories = [
    { id: 1, title: 'Category 1', imageUrl: 'path/to/category1.jpg' },
    { id: 2, title: 'Category 2', imageUrl: 'path/to/category2.jpg' },
    { id: 3, title: 'Category 3', imageUrl: 'path/to/category3.jpg' },
    // Add more categories as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div>
      <h2>E-commerce Categories</h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id}>
            <EcommerceCard title={category.title} imageUrl={category.imageUrl} />
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Category