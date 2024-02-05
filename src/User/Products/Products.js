import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$19.99',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    price: '$29.99',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    price: '$39.99',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    price: '$49.99',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$59.99',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.',
    price: '$69.99',
  },
];

const Products = () => {

    const { categoryId } = useParams();

  return (
    <div className="container mt-5">
      <div className="row">
      <h2>Products Page for Category {categoryId}</h2>
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 mb-4">
            <Card>
              <Card.Img variant="top" src={`https://via.placeholder.com/300x200?text=${product.name}`} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="text-muted">{product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
