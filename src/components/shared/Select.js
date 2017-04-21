import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  -webkit-appearance: none;
  background-color: transparent;
  padding: 2px;
  color: #FFF;
  border: none;
  font-size: 14px;
  border-radius: 0;
  border-bottom: 1px solid #2196F3;
  width: 60%;

  &:focus {
    outline: none;
  }
`;

const SelectInput = ({ name, options, selected, handleChange }) => {
  return (
    <Select value={selected} name={name} onChange={e => handleChange(e)}>
      {options.map(method => (
        <option value={method} key={method}>{method}</option>
      ))}
    </Select>
  );
};

export default SelectInput;
