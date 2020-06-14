import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import styles from './dropdown.module.scss';

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
      border: 'none',
      background: '#f8f0df',
      // match with the menu
      borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? 'yellow' : 'green',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? 'red' : 'blue',
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
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
      background: '#f8f4eb',
      color: '#444f62',
    }),

    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
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
