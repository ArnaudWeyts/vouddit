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
            suggestions={['youtubehaiku', 'videos', 'funny']}
            placeholder="Search subs..."
          />
        </PanelItem>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Menu;
