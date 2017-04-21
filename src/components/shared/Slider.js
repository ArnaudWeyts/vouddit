import React from 'react';
import styled from 'styled-components';

const Slider = styled.div`
  display: inline-block;
  position: relative;
`;

const Input = styled.input`
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -0.52em;
    height: 1.3em;
    width: 1.3em;
    border-radius: 1em;
    background: #2196F3;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  margin-top: -0.8em;
  cursor: pointer;
  background-color: #FFF;
  }

  &:focus::-webkit-slider-runnable-track {
    background-color: #FFF;
  }
`;

const SliderValue = styled.span`
  background: #2196F3;
  color: #FFF;
  margin-left: 20px;
  padding: 5px;
  border-radius: 2px;
`;

const SliderInput = ({ name, value, min, max, handleChange }) => {
  return (
    <Slider value={value}>
      <Input
        name={name}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={e => handleChange(e)}
      />
      <SliderValue>{value}s</SliderValue>
    </Slider>
  );
};

export default SliderInput;
