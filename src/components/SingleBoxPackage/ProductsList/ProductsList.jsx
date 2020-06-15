import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = React.memo(({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.long_name}</li>;
      })}
    </ul>
  );
});

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
