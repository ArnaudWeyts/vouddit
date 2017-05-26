import * as React from 'react';

import { List, ListItem } from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const PlaylistsList: React.StatelessComponent<IPlaylistListProps> = props => {
  const {
    playlists, selectedPlaylistId,
    editPlaylist, deletePlaylist
  } = props;

  if (playlists.length === 0) { return null!; }

  return (
    <List>
      {playlists.map(playlist => {
        return (
          <ListItem
            key={playlist.name}
            value={playlist.id}
            primaryText={playlist.name}
            secondaryText={playlist.id === selectedPlaylistId ? 'Playing' : ''}
            rightIconButton={
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              >
                <MenuItem
                  onClick={() => playlist.id && editPlaylist(playlist.id)}
                  primaryText="Edit"
                />
                <MenuItem
                  primaryText="Delete"
                  onClick={() => playlist.id && deletePlaylist(playlist.id)}
                />
              </IconMenu>
            }
          />
        );
      })}
    </List>
  );
};

export default PlaylistsList;