import * as React from 'react';
import Slider from 'material-ui/Slider';

const SliderInput = ({ name, value, min, max, handleChange }: ISliderProps) => {
  return (
    <Slider
      value={value}
      min={min}
      max={max}
      step={1}
      onChange={(e, newValue) => handleChange(newValue)}
    />
  );
};

export default SliderInput;
