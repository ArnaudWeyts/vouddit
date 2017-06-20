import * as React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import PlaylistAddIcon from 'material-ui/svg-icons/av/playlist-add';

import {
  togglePlaylists,
  toggleAddPlaylist,
  fetchSubs,
  updateSub,
  updateName,
  receiveSubs,
  createPlaylist,
  deletePlaylist,
  selectPlaylist
} from '../../../redux/actions/playlistsActions';

import AddPlaylist from './AddPlaylist';
import PlaylistsList from './PlaylistsList';

import {
  Wrapper,
  InnerWrapper,
  Close,
  Top,
  Title,
  PanelItem
} from '../PanelStyles';

const Playlists: React.StatelessComponent<IPlaylistsProps> = props => {
  const {
    showAddPlaylist,
    playlists,
    showPlaylists,
    togglePlaylistsDisp,
    searchSubs,
    editingPlaylist,
    selectedPlaylist,
    toggleAddPlaylistDisp,
    updateNameDisp,
    createPlaylistDisp,
    fetchSubsDisp,
    clearSearchSubsDisp,
    updateSubDisp,
    deletePlaylistDisp,
    selectPlaylistDisp
  } = props;

  const renderAddPlaylist = () => {
    if (!showAddPlaylist) {
      return (
        <RaisedButton
          primary={true}
          label="Add a playlist"
          fullWidth={true}
          onClick={() => toggleAddPlaylistDisp()}
          icon={<PlaylistAddIcon />}
        />
      );
    } else {
      return (
        <AddPlaylist
          searchSubs={searchSubs}
          toggleAddPlaylist={toggleAddPlaylistDisp}
          playlist={editingPlaylist}
          fetchSubs={query => fetchSubsDisp(query)}
          updateSub={(sub, remove) => updateSubDisp(sub, remove)}
          updateName={name => updateNameDisp(name)}
          createPlaylist={id => createPlaylistDisp(id)}
          clearSearchSubs={() => clearSearchSubsDisp()}
        />
      );
    }
  };

  return (
    <Wrapper show={showPlaylists}>
      <InnerWrapper show={showPlaylists}>
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
          <PlaylistsList
            playlists={playlists}
            selectedPlaylistId={selectedPlaylist && selectedPlaylist.id}
            deletePlaylist={id => deletePlaylistDisp(id)}
            editPlaylist={id => toggleAddPlaylistDisp(id)}
            selectPlaylist={id => selectPlaylistDisp(id)}
          />
        </PanelItem>
      </InnerWrapper>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: IDispatch<any>) => {
  return {
    togglePlaylistsDisp: () => dispatch(togglePlaylists()),
    toggleAddPlaylistDisp: (id?: number) => dispatch(toggleAddPlaylist(id)),
    fetchSubsDisp: (query: string) => dispatch(fetchSubs(query)),
    updateSubDisp: (sub: string, remove?: boolean) =>
      dispatch(updateSub(sub, remove)),
    updateNameDisp: (name: string) => dispatch(updateName(name)),
    createPlaylistDisp: (id?: number) => dispatch(createPlaylist(id)),
    clearSearchSubsDisp: () => dispatch(receiveSubs([])),
    deletePlaylistDisp: (id: number) => dispatch(deletePlaylist(id)),
    selectPlaylistDisp: (id: number) => dispatch(selectPlaylist(id))
  };
};

const mapStateToProps = ({ playlists }: { playlists: IPlaylists }) => ({
  showPlaylists: playlists.showPlaylists,
  showAddPlaylist: playlists.showAddPlaylist,
  searchSubs: playlists.searchSubs,
  playlists: playlists.playlists,
  editingPlaylist: playlists.editingPlaylist,
  selectedPlaylist: playlists.selectedPlaylist
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
