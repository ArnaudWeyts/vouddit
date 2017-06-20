import * as React from 'react';

import { List, ListItem } from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const rightIconMenu = (
  id: number,
  handler1: (id: number) => void,
  handler2: (id: number) => void
) => {
  return (
    <IconMenu
      iconButtonElement={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <MenuItem primaryText="Edit" onClick={() => id && handler1(id)} />
      <MenuItem primaryText="Delete" onClick={() => id && handler2(id)} />
    </IconMenu>
  );
};

const PlaylistsList: React.StatelessComponent<IPlaylistListProps> = props => {
  const {
    playlists,
    selectedPlaylistId,
    editPlaylist,
    deletePlaylist,
    selectPlaylist
  } = props;

  if (playlists.length === 0) {
    return null!;
  }

  return (
    <List>
      {playlists.map(playlist => {
        return (
          <ListItem
            key={playlist.id}
            value={playlist.id}
            primaryText={playlist.name}
            secondaryText={playlist.id === selectedPlaylistId ? 'Playing' : ''}
            onTouchTap={() => selectPlaylist(playlist.id)}
            rightIconButton={rightIconMenu(
              playlist.id,
              editPlaylist,
              deletePlaylist
            )}
          />
        );
      })}
    </List>
  );
};

export default PlaylistsList;
