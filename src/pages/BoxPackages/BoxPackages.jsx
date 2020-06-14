import React, { useState } from 'react';

import styles from './boxPackages.module.scss';
import { BOX_PACKAGES_URL } from '../../constants/urls';
import { useHttp } from '../../hooks/useHttp';

import SingleBoxPackage from '../../components/SingleBoxPackage/SingleBoxPackage';
import Dropdown from '../../components/Dropdown/Dropdown';

const BoxPackages = () => {
  const [fetchedData, isLoading] = useHttp(BOX_PACKAGES_URL);
  const [dropdownState, setDropdownState] = useState(24);

  console.log(fetchedData, 3333);

  // SINGLE BOX LOGIC
  let dropdownData;
  let packageBoxesData;
  let singleBoxPackages;
  let promoText = fetchedData?.promo_text;

  // Data Ready and loading finished.
  if (isLoading === false && fetchedData) {
    dropdownData = {
      ...fetchedData?.contract_length,
    };

    packageBoxesData = [...fetchedData?.items];

    singleBoxPackages = packageBoxesData.map((singlePackageData) => {
      // Send promo_text along with item data if package is featured.
      if (singlePackageData.is_featured === 1) {
        return (
          <div key={singlePackageData.id} className={styles.singleBoxContainer}>
            <SingleBoxPackage
              packageData={{ ...singlePackageData, promoText }}
              dropdownState={dropdownState}
            />
          </div>
        );
      }

      return (
        <div key={singlePackageData.id} className={styles.singleBoxContainer}>
          <SingleBoxPackage
            packageData={singlePackageData}
            dropdownState={dropdownState}
          />
        </div>
      );
    });
  }

  // DROPDOWN LOGIC
  const onDropdownChange = (contractLength) => {
    setDropdownState(contractLength);
  };

  return (
    <div className={styles.boxPackagesContainer}>
      <aside className={styles.dropdownContainer}>
        <Dropdown
          dropdownData={dropdownData}
          onDropdownChange={onDropdownChange}
        />
      </aside>
      <section className={styles.boxesContainer}>{singleBoxPackages}</section>
    </div>
  );
};

export default BoxPackages;
