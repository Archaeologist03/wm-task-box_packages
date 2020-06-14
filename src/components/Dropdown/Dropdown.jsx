import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ dropdownData, onDropdownChange }) => {
  console.log(dropdownData, 5555);

  return (
    <div>
      <button
        style={{ border: '14px solid green' }}
        onClick={() => onDropdownChange(12)}></button>
    </div>
  );
};

Dropdown.propTypes = {
  dropdownData: PropTypes.shape({
    contract_length_options: PropTypes.array,
    preselected_contract_length: PropTypes.string,
  }),
};

export default Dropdown;
