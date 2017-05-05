import * as React from 'react';
import styled from 'styled-components';

/// <reference path="./interfaces.d.ts"/>

const Button = styled.a`
  cursor: pointer;
  background: #FFF;
  color: #000;
  border-radius: 2px;
  padding: 10px;
`;

const ButtonInput = ({ onClick, children, className }: IButtonProps) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonInput;
