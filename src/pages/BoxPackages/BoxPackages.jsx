import React, { useState, useEffect } from 'react';

import styles from './boxPackages.module.scss';
import { BOX_PACKAGES_URL } from '../../constants/urls';
import { useHttp } from '../../hooks/useHttp';
import numberFromString from '../../utils/numberFromString';

import SingleBoxPackage from '../../components/SingleBoxPackage/SingleBoxPackage';
import Dropdown from '../../components/Dropdown/Dropdown';

const BoxPackages = () => {
  const [fetchedData, isLoading] = useHttp(BOX_PACKAGES_URL);
  const [selectedDropdown, setSelectedDropdown] = useState({
    value: 24,
    label: 'Ugovor 24 meseca',
  });

  console.log(fetchedData);

  // DROPDOWN LOGIC
  // Setting Selected Dropdown on initial load
  useEffect(() => {
    if (fetchedData?.contract_length?.preselected_contract_length) {
      const { preselected_contract_length } = fetchedData.contract_length;

      const preselectedContract = numberFromString(preselected_contract_length);

      setSelectedDropdown({
        value: preselectedContract,
        label: preselected_contract_length,
      });
    }
  }, [fetchedData]);

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

    // All single boxes with data passed to them
    singleBoxPackages = packageBoxesData.map((singlePackageData) => {
      let singleBoxPackageComp;

      // Send promo_text along with item data if package IS_FEATURED
      if (singlePackageData.is_featured === 1) {
        singleBoxPackageComp = (
          <SingleBoxPackage
            packageData={{ ...singlePackageData, promoText }}
            selectedDropdown={selectedDropdown}
            assets={fetchedData?.assets}
          />
        );
      } else {
        singleBoxPackageComp = (
          <SingleBoxPackage
            packageData={singlePackageData}
            selectedDropdown={selectedDropdown}
            assets={fetchedData?.assets}
          />
        );
      }
      return (
        <div key={singlePackageData.id} className={styles.singleBoxContainer}>
          {singleBoxPackageComp}
        </div>
      );
    });
  }

  return (
    <div className={styles.boxPackagesContainer}>
      <aside className={styles.dropdownContainer}>
        <Dropdown
          dropdownData={dropdownData}
          selectedDropdown={selectedDropdown}
          setSelectedDropdown={setSelectedDropdown}
        />
      </aside>
      <section className={styles.boxesContainer}>{singleBoxPackages}</section>
    </div>
  );
};

export default BoxPackages;
