import { useState } from 'react';

import numberFromString from '../utils/numberFromString';

export const useDropdownState = (contractLength) => {
  const [dropdownState, setDropdownState] = useState(null);

  if (contractLength?.preselected_contract_length) {
    const preselectedContract = numberFromString(
      contractLength?.preselected_contract_length,
    );

    setDropdownState(preselectedContract);
  }

  return [dropdownState, setDropdownState];
};
