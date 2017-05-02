import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  cursor: pointer;
  background: #FFF;
  color: #000;
  border-radius: 2px;
  padding: 10px;
`;

const ButtonInput = ({ onClick, children, className }) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonInput;
