import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import styles from './singleBoxPackage.module.scss';

const SingleBoxPackage = React.memo(({ packageData }) => {
  return (
    <section className={styles.boxContainer}>
      <h2>{packageData.name}</h2>
      <section>{/* TV */}</section>
      <section>{/*  NET + TV Pic if exist */}</section>
      <section>{/* PRICE */}</section>
      <Button />
    </section>
  );
});

SingleBoxPackage.propTypes = {
  packageData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    included: PropTypes.array.isRequired,
    prices: PropTypes.object.isRequired,
    promotions: PropTypes.array,
    promoText: PropTypes.string,
  }),
};

export default SingleBoxPackage;
