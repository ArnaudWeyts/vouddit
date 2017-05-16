import * as React from 'react';
import styled from 'styled-components';

import Search from '../shared/Search';

import {
  Button
} from './PanelStyles';

const PlaylistWrapper = styled.div`
  margin-top: 10px;
`;

const Card = styled.div`
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 20px;
  background: #212121;
`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const CardItem = styled.div`
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Input = styled.input`
  width: 175px;
  height: 30px;
  padding: 1px 0px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #FFF;
  font-size: 20px;
  color: #2196F3;
  appearance: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 1px solid #2196F3;
  }
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
          return <ListItem key={sub} style={{ color: '#2196F3' }}>{sub}</ListItem>;
        })}
      </List>
    );
  };

  return (
    <div>
      <PlaylistWrapper>
        <Card>
          <CardTitle>Selected subs</CardTitle>
          <CardItem>
            <Search
              suggestions={props.searchSubs}
              placeholder="Search for a sub..."
              onChange={props.fetchSubs}
              onSelected={props.selectSub}
              onClear={props.clearSearchSubs}
            />
          </CardItem>
          <CardItem>{renderList()}</CardItem>
          <CardTitle>Name</CardTitle>
          <CardItem>
            <Input placeholder={props.playlist.name} />
          </CardItem>
          <Button
            onClick={() => props.createPlaylist()}
            style={{ width: '57%', marginRight: '3%', marginTop: '25px' }}
            disabled={props.playlist.subs.length === 0 ? true : false}
          >
            <span>Create</span>
          </Button>
          <Button
            onClick={() => props.toggleAddPlaylist()}
            style={{ width: '37%', marginLeft: '3%', marginTop: '25px' }}
          >
            <span>Cancel</span>
          </Button>
        </Card>
      </PlaylistWrapper>
    </div >
  );
};

export default AddPlaylist;
