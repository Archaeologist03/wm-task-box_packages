import React from 'react';
import PropTypes from 'prop-types';

import styles from './productList.module.scss';

// Each category product - list of items package in that category offers.
const ProductsList = React.memo(({ products, icon }) => {
  return (
    <div className={styles.productContainer}>
      <img src={icon} alt='product icon' />
      <ul>
        {products.map((product) => {
          return <li key={product.id}> {product.long_name}</li>;
        })}
      </ul>
    </div>
  );
});

ProductsList.propTypes = {
  products: PropTypes.array,
  icon: PropTypes.string,
};

export default ProductsList;
