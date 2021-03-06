import React from 'react';
import PropTypes from 'prop-types';

import styles from './promotionImage.module.scss';
import removePTags from '../../../utils/removePTags';

const PromotionImage = React.memo(({ promotions }) => {
  const promos = promotions.map((promotionObj) => {
    const { promotion_image, promo_text, id } = promotionObj;

    const promoText = removePTags(promo_text);

    return (
      <div key={id}>
        <div className={styles.imageContainer}>
          <img src={promotion_image} alt='promotion' />
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
