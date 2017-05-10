import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  overflow-x: hidden;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #151516;
  border-radius: 2px;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  width: ${(props: { showMenu: boolean }) => (props.showMenu ? '300px' : 0)};
  transition: 0.3s;
`;

const InnerWrapper = styled.div`
  padding: 20px;
`;

const Close = styled.span`
  cursor: pointer;
  float: right;
  color: #FFF;
`;

const Menu: React.StatelessComponent<IMenuProps> = props => {
  return (
    <Wrapper showMenu={props.showMenu}>
      <InnerWrapper>
        <Close onClick={props.toggleMenu}>
          ╳
        </Close>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Menu;
