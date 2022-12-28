import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <h1>Welcome!</h1>
      {' '}
      <Link to="/products">To Products page</Link>
    </>
  );
}

export default Welcome;
