import * as React from 'react';
import { connect } from 'react-redux';

import { togglePlaylists } from '../../redux/actions/playlistsActions';

import {
  Wrapper, InnerWrapper,
  Close, Top, Title,
  PanelItem, Button, Icon
} from './PanelStyles';
import icons from '../shared/icons';

const Playlists: React.StatelessComponent<IPlaylistsProps> = props => {
  return (
    <Wrapper show={props.showPlaylists}>
      <InnerWrapper show={props.showPlaylists} >
        <Top>
          <Title>Playlists</Title>
          <Close onClick={() => props.dispatch(togglePlaylists())}>
            ╳
          </Close>
        </Top>
        <PanelItem>
          <Button
            onClick={() => console.log('clicked')}
          >
            <Icon src={icons.playlistAdd} />
            <span>Add a playlist</span>
          </Button>
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
