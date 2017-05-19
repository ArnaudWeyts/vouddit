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
} from '../../redux/actions/playlistsActions';

import AddPlaylist from './AddPlaylist';

import {
  Wrapper, InnerWrapper,
  Close, Top, Title,
  PanelItem, Button, IconL, IconR
} from './PanelStyles';
import {
  Card, CardItem
} from '../shared/MainStyles';
import icons from '../shared/icons';

const Playlists: React.StatelessComponent<IPlaylistsProps> = props => {

  const renderAddPlaylist = () => {
    if (!props.showAddPlaylist) {
      return (
        <Button
          onClick={() => props.toggleAddPlaylistDisp()}
        >
          <IconL src={icons.playlistAdd} />
          <span>Add a playlist</span>
        </Button>
      );
    } else {
      return (
        <AddPlaylist
          searchSubs={props.searchSubs}
          toggleAddPlaylist={props.toggleAddPlaylistDisp}
          playlist={props.currentPlaylist}
          fetchSubs={(query: string) => props.fetchSubsDisp(query)}
          updateSub={(sub: string, remove?: boolean) => props.updateSubDisp(sub, remove)}
          updateName={(name: string) => props.updateNameDisp(name)}
          createPlaylist={() => props.createPlaylistDisp()}
          clearSearchSubs={() => props.clearSearchSubsDisp()}
        />
      );
    }
  };

  const renderPlaylists = () => {
    return (
      <Card>
        {props.playlists.map(playlist => {
          return (
            <CardItem>
              <IconL src={icons.playArrow} />
              {playlist.name}
              <IconR src={icons.arrowDown} />
            </CardItem>
          );
        })}
      </Card>
    );
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
        <PanelItem>
          {renderPlaylists()}
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
