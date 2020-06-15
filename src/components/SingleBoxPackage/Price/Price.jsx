import React from 'react';
import PropTypes from 'prop-types';

import styles from './price.module.scss';

const Price = ({ prices, selectedDropdown }) => {
  // Remove <p> tags
  const oldPricePromoText = prices?.old_price_promo_text.replace(
    /<\/?p[^>]*>/g,
    '',
  );

  let oldPriceRec;
  let priceRec;

  // 24 Months price - old + new price + promo
  if (selectedDropdown.value === 24) {
    const fixedNum = Number(
      prices?.old_price_recurring[selectedDropdown.label],
    ).toFixed(0);

    oldPriceRec = (
      <div className={styles.oldPriceRecContainer}>
        {/* 2 prices - line thru and new one */}
        <p className={styles.lineThruPrice}>{fixedNum} rsd/mes.</p>
        <p className={styles.newPrice}> 1 rsd/mes.</p>
        {/* prvih 6 meseci promo */}
        <p className={styles.promoText}>{oldPricePromoText}</p>
      </div>
    );
  }

  // non 24 prices - single price
  if (selectedDropdown.value !== 24) {
    const fixedNum = Number(
      prices?.price_recurring[selectedDropdown.label],
    ).toFixed(0);

    priceRec = <p className={styles.priceRec}>{fixedNum} rsd/mes.</p>;
  }

  return (
    <div className={styles.priceContainer}>
      {priceRec ? priceRec : oldPriceRec}
    </div>
  );
};

Price.propTypes = {
  prices: PropTypes.object,
  selectedDropdown: PropTypes.object,
};

export default Price;
