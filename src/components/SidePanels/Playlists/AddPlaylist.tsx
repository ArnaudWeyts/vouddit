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
    if (props.playlist.subs.length === 0) {
      return (
        <CardText>No subs selected</CardText>
      );
    }
    return (
      <List>
        {props.playlist.subs.map((sub: string) => {
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

  return (
    <div>
      <PlaylistWrapper>
        <Card>
          <CardText>
            <TextField
              hintText={props.playlist.name}
              onChange={({ target }) => {
                const value = (target as HTMLInputElement).value;
                props.updateName(value);
              }}
              fullWidth={true}
            />
            <Search
              suggestions={props.searchSubs}
              placeholder="Search for a sub..."
              onChange={props.fetchSubs}
              onSelected={props.updateSub}
              onClear={props.clearSearchSubs}
            />
          </CardText>
          {renderList()}
          <CardActions>
            <RaisedButton
              primary={true}
              label="Create"
              disabled={props.playlist.subs.length === 0 ? true : false}
              onClick={() => props.createPlaylist()}
            />
            <RaisedButton
              label="Cancel"
              onClick={() => props.toggleAddPlaylist()}
            />
          </CardActions>
        </Card>
      </PlaylistWrapper>
    </div>
  );
};

export default AddPlaylist;
