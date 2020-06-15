import React from 'react';
import PropTypes from 'prop-types';

import styles from './singleBoxPackage.module.scss';
import Button from '../Button/Button';
import ProductsList from './ProductsList/ProductsList';
import PromotionImage from './PromotionImage/PromotionImage';
import Price from './Price/Price';

const SingleBoxPackage = React.memo(({ packageData, selectedDropdown }) => {
  // const [tvProducts, setTvProducts] = useState(null);
  // const [netProducts, setNetProducts] = useState(null);

  const tvProducts = packageData.included.filter(
    (product) => product.product_category === 'tv',
  );

  const netProducts = packageData.included.filter(
    (product) => product.product_category === 'net',
  );

  console.log(packageData);

  return (
    <section className={styles.boxContainer}>
      {/* box NAME */}
      <h2 className={styles.boxName}>{packageData?.name}</h2>
      {/* TV */}
      <section className={styles.tvSection}>
        <ProductsList products={tvProducts} />
      </section>
      {/*  NET + TV Pic if exist */}
      <section className={styles.netSection}>
        <ProductsList products={netProducts} />
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
  selectedDropdown: PropTypes.object,
};

export default SingleBoxPackage;
