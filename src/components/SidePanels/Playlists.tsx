import * as React from 'react';
import { connect } from 'react-redux';

import { togglePlaylists } from '../../redux/actions/playlistsActions';

import {
  Wrapper, InnerWrapper,
  Close, Top, Title,
  PanelItem
} from './PanelStyles';

const Playlists: React.StatelessComponent<IPlaylistsProps> = props => {
  return (
    <Wrapper show={props.showPlaylists}>
      <InnerWrapper show={props.showPlaylists} >
        <Top>
          <Title>Playlist menu</Title>
          <Close onClick={() => props.dispatch(togglePlaylists())}>
            ╳
          </Close>
        </Top>
        <PanelItem>

        </PanelItem>
      </InnerWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ playlists }: { playlists: IPlaylists }) => ({
  showPlaylists: playlists.showPlaylists,
  searchSubs: playlists.searchSubs,
  playlists: playlists.playlists
});

export default connect(mapStateToProps)(Playlists);
