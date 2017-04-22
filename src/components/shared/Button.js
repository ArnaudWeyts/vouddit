import React from 'react';
import styled from 'styled-components';

const ButtonInput = styled.a`
  cursor: pointer;
  background: #FFF;
  color: #000;
  border-radius: 2px;
  padding: 10px;
`;

const Button = ({ onClick, children, className }) => {
  return (
    <ButtonInput className={className} onClick={onClick}>
      {children}
    </ButtonInput>
  );
};

export default Button;
