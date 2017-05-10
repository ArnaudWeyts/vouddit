import * as React from 'react';

import {
  Wrapper, InnerWrapper,
  Close, Top, Title
} from './PanelStyles';

const Menu: React.StatelessComponent<IMenuProps> = props => {
  return (
    <Wrapper show={props.showMenu}>
      <InnerWrapper show={props.showMenu} >
        <Top>
          <Title>Playlist menu</Title>
          <Close onClick={props.toggleMenu}>
            ╳
          </Close>
        </Top>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Menu;
