import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ prices, selectedDropdown }) => {
  console.log(prices);
  console.log(selectedDropdown);

  // Remove <p> tags
  const oldPricePromoText = prices?.old_price_promo_text.replace(
    /<\/?p[^>]*>/g,
    '',
  );

  let oldPriceRec;
  let priceRec;

  // 24 Months price - old + new price + promo
  if (selectedDropdown.value === 24) {
    oldPriceRec = (
      <div>
        <div>
          {/* 2 prices - line thru and new one */}
          <p></p>
          <p></p>
          {/* prvih 6 meseci promo */}
          <p></p>
        </div>
      </div>
    );
  }

  // non 24 prices - single price
  if (selectedDropdown.value !== 24) {
    priceRec = (
      <div>
        <p>{prices?.price_recurring[selectedDropdown.label]}</p>
      </div>
    );
  }

  console.log(prices?.price_recurring[selectedDropdown.label]);

  return <div></div>;
};

Price.propTypes = {
  prices: PropTypes.object,
  selectedDropdown: PropTypes.object,
};

export default Price;
