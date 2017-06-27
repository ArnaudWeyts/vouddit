import * as React from 'react';
import styled from 'styled-components';

import icons from './shared/icons';

import Search from './shared/Search';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  justify-content: space-between;
  padding: 0 20px;
`;

const IconMenu = styled.img`
  cursor: pointer; 
  ${(props: { showPlaylists: boolean }) =>
    props.showPlaylists ? 'width: 0;' : ''}
`;

const IconSettings = styled.img`
  cursor: pointer;
  ${(props: { showSettings: boolean }) =>
    props.showSettings ? 'width: 0;' : ''}
`;

const Header: React.StatelessComponent<IHeaderProps> = props => {
  return (
    <Wrapper>
      <IconMenu
        src={icons.menu}
        alt="menu icon"
        showPlaylists={props.showPlaylists}
        onClick={props.togglePlaylists}
      />
      <Search
        suggestions={props.searchSubs}
        placeholder="videos"
        onChange={props.fetchSubs}
        onSelected={(sub: string) => props.changeSub(sub)}
        onClear={console.log}
      />
      <IconSettings
        src={icons.settings}
        alt="settings icon"
        showSettings={props.showSettings}
        onClick={props.toggleSettings}
      />
    </Wrapper>
  );
};

export default Header;
