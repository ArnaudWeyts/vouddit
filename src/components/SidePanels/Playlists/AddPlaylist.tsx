import * as React from 'react';
import styled from 'styled-components';

import Search from '../../shared/Search';

import { Card, CardText, CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const PlaylistWrapper = styled.div`
  margin-top: 10px;
`;

const AddPlaylist: React.StatelessComponent<IAddPlaylistsProps> = props => {
  const renderList = () => {
    if (props.playlist!.subs.length === 0) {
      return (
        <CardText>No subs selected</CardText>
      );
    }
    return (
      <List>
        {props.playlist!.subs.map((sub: string) => {
          return (
            <ListItem
              primaryText={sub}
              key={sub}
              rightIcon={<DeleteIcon />}
              onClick={() => props.updateSub(sub, true)}
            />
          );
        })}
      </List>
    );
  };

  const {
    playlist, searchSubs,
    fetchSubs, updateName,
    clearSearchSubs, updateSub,
    createPlaylist, toggleAddPlaylist
  } = props;

  return (
    <div>
      <PlaylistWrapper>
        <Card>
          <CardText>
            <TextField
              hintText={playlist!.name}
              value={playlist!.updating ? playlist!.name : undefined}
              onChange={({ target }) => {
                const value = (target as HTMLInputElement).value;
                updateName(value);
              }}
              fullWidth={true}
            />
            <Search
              suggestions={searchSubs}
              placeholder="Search for a sub..."
              onChange={fetchSubs}
              onSelected={updateSub}
              onClear={clearSearchSubs}
            />
          </CardText>
          {renderList()}
          <CardActions>
            <RaisedButton
              primary={true}
              label={playlist!.updating ? 'Edit' : 'Create'}
              disabled={playlist!.subs.length === 0 ? true : false}
              onClick={() => {
                if (playlist!.updating) {
                  createPlaylist(playlist!.id);
                } else {
                  createPlaylist();
                }
              }}
            />
            <RaisedButton
              label="Cancel"
              onClick={() => toggleAddPlaylist()}
            />
          </CardActions>
        </Card>
      </PlaylistWrapper>
    </div>
  );
};

export default AddPlaylist;
