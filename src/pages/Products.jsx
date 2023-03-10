import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <>
      <h1>Products!</h1>
      {' '}
      <ul>
        <li>
          <Link to="products/1">Product 1</Link>
        </li>
        <li>
          <Link to="products/2">Product 2</Link>
        </li>
        <li>
          <Link to="products/3">Product 3</Link>
        </li>
      </ul>
      {' '}
      <Link to="/welcome">To Welcome page</Link>
    </>
  );
}

export default Products;
