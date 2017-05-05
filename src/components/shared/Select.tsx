import * as React from 'react';
import styled from 'styled-components';
import icons from './icons';

/// <reference path="./interfaces.d.ts"/>

const Select = styled.select`
  -webkit-appearance: none;
  padding: 6px;
  color: #FFF;
  border: none;
  font-size: 14px;
  border-radius: 0;
  border-bottom: 1px solid #2196F3;
  width: 150px;
  background: ${props => `url('${icons.arrow_down}') 96% / 15% no-repeat transparent`};

  &:focus {
    outline: none;
  }
`;

const SelectInput = ({ name, options, selected, handleChange }: ISelectProps) => {
  return (
    <Select value={selected} name={name} onChange={e => handleChange(e)}>
      {options.map(method => (
        <option value={method} key={method}>{method}</option>
      ))}
    </Select>
  );
};

export default SelectInput;
