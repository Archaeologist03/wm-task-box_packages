import React from 'react';
import PropTypes from 'prop-types';

import styles from './productList.module.scss';

// Each category product - list of items package in that category offers.
const ProductsList = React.memo(({ products, icon }) => {
  // Bold inputed part of the string.
  const boldPartOfText = (text, shouldBeBold) => {
    const textArray = text.split(shouldBeBold);
    return (
      <span>
        {textArray.map((item, index) => (
          <>
            {item}
            {index !== textArray.length - 1 && <b>{shouldBeBold}</b>}
          </>
        ))}
      </span>
    );
  };

  return (
    <div className={styles.productContainer}>
      <img src={icon} alt='product icon' />
      <ul>
        {products.map((product) => {
          const productName = product.long_name;
          const toBeBolded = product.attributes.attribute_value;
          const boldedProductName = boldPartOfText(productName, toBeBolded);

          return <li key={product.id}> {boldedProductName}</li>;
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
