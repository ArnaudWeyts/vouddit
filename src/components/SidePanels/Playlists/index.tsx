import * as React from 'react';
import { connect } from 'react-redux';

import {
  togglePlaylists,
  toggleAddPlaylist,
  fetchSubs,
  updateSub,
  updateName,
  receiveSubs,
  createPlaylist
} from '../../../redux/actions/playlistsActions';

import AddPlaylist from './AddPlaylist';
import PlaylistsList from './PlaylistsList';

import {
  Wrapper, InnerWrapper,
  Close, Top, Title,
  PanelItem, Button, IconL
} from '../PanelStyles';

import icons from '../../shared/icons';

const Playlists: React.StatelessComponent<IPlaylistsProps> = props => {

  const {
    showAddPlaylist, playlists,
    showPlaylists, togglePlaylistsDisp,
    searchSubs, currentPlaylist,
    toggleAddPlaylistDisp, updateNameDisp,
    createPlaylistDisp, fetchSubsDisp,
    clearSearchSubsDisp, updateSubDisp
  } = props;

  const renderAddPlaylist = () => {
    if (!showAddPlaylist) {
      return (
        <Button
          onClick={() => toggleAddPlaylistDisp()}
        >
          <IconL src={icons.playlistAdd} />
          <span>Add a playlist</span>
        </Button>
      );
    } else {
      return (
        <AddPlaylist
          searchSubs={searchSubs}
          toggleAddPlaylist={toggleAddPlaylistDisp}
          playlist={currentPlaylist}
          fetchSubs={(query: string) => fetchSubsDisp(query)}
          updateSub={(sub: string, remove?: boolean) => updateSubDisp(sub, remove)}
          updateName={(name: string) => updateNameDisp(name)}
          createPlaylist={() => createPlaylistDisp()}
          clearSearchSubs={() => clearSearchSubsDisp()}
        />
      );
    }
  };

  return (
    <Wrapper show={showPlaylists}>
      <InnerWrapper show={showPlaylists} >
        <Top>
          <Title>Playlists</Title>
          <Close onClick={() => togglePlaylistsDisp()}>
            ╳
          </Close>
        </Top>
        <PanelItem>
          {renderAddPlaylist()}
        </PanelItem>
        <PanelItem>
          <PlaylistsList playlists={playlists} />
        </PanelItem>
      </InnerWrapper>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: IDispatch<any>) => {
  return {
    togglePlaylistsDisp: () => dispatch(togglePlaylists()),
    toggleAddPlaylistDisp: () => dispatch(toggleAddPlaylist()),
    fetchSubsDisp: (query: string) => dispatch(fetchSubs(query)),
    updateSubDisp: (sub: string, remove?: boolean) => dispatch(updateSub(sub, remove)),
    updateNameDisp: (name: string) => dispatch(updateName(name)),
    createPlaylistDisp: () => dispatch(createPlaylist()),
    clearSearchSubsDisp: () => dispatch(receiveSubs([]))
  };
};

const mapStateToProps = ({ playlists }: { playlists: IPlaylists }) => ({
  showPlaylists: playlists.showPlaylists,
  showAddPlaylist: playlists.showAddPlaylist,
  searchSubs: playlists.searchSubs,
  playlists: playlists.playlists,
  currentPlaylist: playlists.currentPlaylist
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);