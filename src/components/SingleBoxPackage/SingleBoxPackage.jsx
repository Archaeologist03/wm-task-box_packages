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
      <h2>{packageData?.name}</h2>
      {/* TV */}
      <section>
        <ProductsList products={tvProducts} />
      </section>
      {/*  NET + TV Pic if exist */}
      <section>
        <ProductsList products={netProducts} />
        {/* Promotion image */}
        {selectedDropdown.label ===
        packageData?.promotions[0]?.discount_variations[0] ? (
          <div>
            <PromotionImage promotions={packageData?.promotions} />
          </div>
        ) : null}
      </section>
      {/* PRICE */}
      <section>
        <Price
          prices={packageData?.prices}
          selectedDropdown={selectedDropdown}
        />
      </section>
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
  selectedDropdown: PropTypes.object,
};

export default SingleBoxPackage;
