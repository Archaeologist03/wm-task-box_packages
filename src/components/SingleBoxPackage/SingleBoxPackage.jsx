import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import styles from './singleBoxPackage.module.scss';
import Button from '../Button/Button';
import ProductsList from './ProductsList/ProductsList';
import PromotionImage from './PromotionImage/PromotionImage';
import Price from './Price/Price';

// On Load animation - framer-motion
const containerVariants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

// COMPONENT LOGIC
const SingleBoxPackage = React.memo(
  ({ packageData, selectedDropdown, assets }) => {
    const tvProducts = packageData.included.filter(
      (product) => product.product_category === 'tv',
    );

    const netProducts = packageData.included.filter(
      (product) => product.product_category === 'net',
    );

    return (
      <motion.section
        className={styles.boxContainer}
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'>
        {/* Box NAME */}
        <h2 className={styles.boxName}>{packageData?.name}</h2>
        {/* TV */}
        <section className={styles.tvSection}>
          <ProductsList products={tvProducts} icon={assets.tv_category} />
        </section>
        {/*  NET + TV Pic if exist */}
        <section className={styles.netSection}>
          <ProductsList products={netProducts} icon={assets.net_category} />
          {/* Promotion image */}
          {selectedDropdown.label ===
          packageData?.promotions[0]?.discount_variations[0] ? (
            <div className={styles.promoImgContainer}>
              <PromotionImage promotions={packageData?.promotions} />
            </div>
          ) : null}
        </section>
        {/* PRICE */}
        <section className={styles.priceSection}>
          <Price
            prices={packageData?.prices}
            selectedDropdown={selectedDropdown}
          />
        </section>
        <div className={styles.buttonContainer}>
          <Button />
        </div>
      </motion.section>
    );
  },
);

SingleBoxPackage.propTypes = {
  packageData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    included: PropTypes.array.isRequired,
    prices: PropTypes.object.isRequired,
    promotions: PropTypes.array,
    promoText: PropTypes.string,
  }),
  selectedDropdown: PropTypes.object,
  assets: PropTypes.object,
};

export default SingleBoxPackage;
