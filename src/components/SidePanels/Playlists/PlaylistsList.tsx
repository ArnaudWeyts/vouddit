import * as React from 'react';

import {
  IconL
} from '../PanelStyles';

import {
  Card, CardItem
} from '../../shared/MainStyles';

import icons from '../../shared/icons';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const PlaylistsList: React.StatelessComponent<{ playlists: Array<IPlaylist> }> = ({ playlists }) => {
  if (playlists.length === 0) { return null!; }
  return (
    <Card>
      {playlists.map(playlist => {
        return (
          <CardItem key={playlist.name}>
            <IconL src={icons.playArrow} />
            {playlist.name}
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <MenuItem primaryText="Edit" />
              <MenuItem primaryText="Delete" />
            </IconMenu>
          </CardItem>
        );
      })}
    </Card>
  );
};

export default PlaylistsList;