import * as React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Select = ({ name, options, selected, handleChange }: ISelectProps) => {
  const renderItems = () => {
    return options.map(i => {
      return <MenuItem value={i} key={i} primaryText={i} />;
    });
  };
  return (
    <SelectField
      value={selected}
      onChange={(e: any, index: number, value: string) => handleChange(value)}
    >
      {renderItems()}
    </SelectField>
  );
};

export default Select;
