import * as React from 'react';
import { connect } from 'react-redux';

import { togglePlaylists, toggleAddPlaylist } from '../../redux/actions/playlistsActions';

import {
  Wrapper, InnerWrapper,
  Close, Top, Title,
  PanelItem, Button, Icon
} from './PanelStyles';
import icons from '../shared/icons';

const Playlists: React.StatelessComponent<IPlaylistsProps> = props => {

  const renderAddPlaylist = () => {
    if (!props.showAddPlaylist) {
      return (
        <Button
          onClick={() => props.toggleAddPlaylistDisp()}
        >
          <Icon src={icons.playlistAdd} />
          <span>Add a playlist</span>
        </Button>
      );
    } else {
      return (
        <div>Playlist dialog</div>
      );
    }
  };

  return (
    <Wrapper show={props.showPlaylists}>
      <InnerWrapper show={props.showPlaylists} >
        <Top>
          <Title>Playlists</Title>
          <Close onClick={() => props.togglePlaylistsDisp()}>
            ╳
          </Close>
        </Top>
        <PanelItem>
          {renderAddPlaylist()}
        </PanelItem>
      </InnerWrapper>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: IDispatch<any>) => {
  return {
    togglePlaylistsDisp: () => dispatch(togglePlaylists()),
    toggleAddPlaylistDisp: () => dispatch(toggleAddPlaylist())
  };
};

const mapStateToProps = ({ playlists }: { playlists: IPlaylists }) => ({
  showPlaylists: playlists.showPlaylists,
  showAddPlaylist: playlists.showAddPlaylist,
  searchSubs: playlists.searchSubs,
  playlists: playlists.playlists
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
