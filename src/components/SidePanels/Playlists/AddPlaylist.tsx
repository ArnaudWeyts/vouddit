import * as React from 'react';
import styled from 'styled-components';

import Search from '../../shared/Search';

import {
  Button, IconR
} from '../PanelStyles';

import {
  List, ListItem, Card,
  Input, CardItem
} from '../../shared/MainStyles';

import icons from '../../shared/icons';

const PlaylistWrapper = styled.div`
  margin-top: 10px;
`;

const AddPlaylist: React.StatelessComponent<IAddPlaylistsProps> = props => {
  const renderList = () => {
    if (props.playlist.subs.length === 0) {
      return (
        <div>No subs selected</div>
      );
    }
    return (
      <List>
        {props.playlist.subs.map((sub: string) => {
          return (
            <ListItem key={sub} style={{ color: '#2196F3' }}>
              {sub}
              <IconR
                src={icons.deleteBin}
                onClick={() => props.updateSub(sub, true)}
              />
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <div>
      <PlaylistWrapper>
        <Card>
          <CardItem>
            <Input
              placeholder={props.playlist.name}
              onChange={({ target }) => {
                const value = (target as HTMLInputElement).value;
                props.updateName(value);
              }}
            />
          </CardItem>
          <CardItem>
            <Search
              suggestions={props.searchSubs}
              placeholder="Search for a sub..."
              onChange={props.fetchSubs}
              onSelected={props.updateSub}
              onClear={props.clearSearchSubs}
            />
          </CardItem>
          <CardItem>{renderList()}</CardItem>
          <CardItem>
            <Button
              onClick={() => props.createPlaylist()}
              style={{ width: '57%', marginRight: '3%' }}
              disabled={props.playlist.subs.length === 0 ? true : false}
            >
              <span>Create</span>
            </Button>
            <Button
              onClick={() => props.toggleAddPlaylist()}
              style={{ width: '37%', marginLeft: '3%' }}
            >
              <span>Cancel</span>
            </Button>
          </CardItem>
        </Card>
      </PlaylistWrapper>
    </div>
  );
};

export default AddPlaylist;
