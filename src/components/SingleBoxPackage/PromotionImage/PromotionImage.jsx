import React from 'react';
import PropTypes from 'prop-types';

const PromotionImage = React.memo(({ promotions }) => {
  const promos = promotions.map((promotionObj) => {
    const { promotion_image, promo_text, id } = promotionObj;

    // Remove <p> tags
    const promoText = promo_text.replace(/<\/?p[^>]*>/g, '');

    return (
      <div key={id}>
        <div>
          <img src={promotion_image} alt='promotion' />
        </div>
        <div>
          <p>{promoText}</p>
        </div>
      </div>
    );
  });

  return <div>{promos}</div>;
});

PromotionImage.propTypes = {
  promotions: PropTypes.array,
};

export default PromotionImage;
