import React from 'react';

const Dropdown = ({ options, selectedOption, onChange }) => {
  return (
    <select value={selectedOption} onChange={onChange} className="dropdown" >
      {options.map((option, index) => (
        <option className="dropdown__option" key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;