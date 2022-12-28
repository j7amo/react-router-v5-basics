import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  return (
    <section>
      <h2>{`Product with id ${id} Details`}</h2>
    </section>
  );
}

export default ProductDetails;
