import * as React from 'react';

import {
  IconL, IconR
} from '../PanelStyles';

import {
  Card, CardItem
} from '../../shared/MainStyles';

import icons from '../../shared/icons';

const PlaylistsList: React.StatelessComponent<{ playlists: Array<IPlaylist> }> = ({ playlists }) => {
  if (playlists.length === 0) { return null!; }
  return (
    <Card>
      {playlists.map(playlist => {
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

export default PlaylistsList;