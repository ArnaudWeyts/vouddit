import * as React from 'react';

import Search from '../shared/Search';

import {
  Wrapper, InnerWrapper,
  Close, Top, Title,
  PanelItem
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
        <PanelItem>
          <Search
            suggestions={props.subs}
            placeholder="Search subs..."
            onChange={props.fetchSubs}
          />
        </PanelItem>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Menu;
