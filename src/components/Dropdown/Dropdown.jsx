import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import numberFromString from '../../utils/numberFromString';

const Dropdown = ({ dropdownData, selectedDropdown, setSelectedDropdown }) => {
  let options;
  if (dropdownData?.contract_length_options) {
    options = dropdownData.contract_length_options.map((option) => {
      let value = numberFromString(option);

      return { value: value, label: option };
    });
  }

  const handleChange = (selectedOption) => {
    setSelectedDropdown(selectedOption);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: '#f8f0df',
      border: '2px solid transparent',
      transition: '0.5s border ease-in-out',
      '&:hover': {
        border: '2px solid #742d6c',
      },
    }),
    option: (base) => ({
      ...base,
      background: '#f8f0df',
      color: '#111',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#742d6c',
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      background: '#f8f4eb',
      color: '#fff',
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
  };

  return (
    <Select
      styles={customStyles}
      // value={selectedDropdown}
      defaultValue={selectedDropdown}
      options={options}
      onChange={handleChange}></Select>
  );
};

Dropdown.propTypes = {
  dropdownData: PropTypes.shape({
    contract_length_options: PropTypes.array,
    preselected_contract_length: PropTypes.string,
  }),
  selectedDropdown: PropTypes.object,
  setSelectedDropdown: PropTypes.func,
};

export default Dropdown;
