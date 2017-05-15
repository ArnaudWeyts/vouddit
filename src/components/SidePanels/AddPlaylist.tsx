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

const AddPlaylist: React.StatelessComponent<IAddPlaylistsProps> = props => {
  const renderList = () => {
    if (props.selectedSubs.length === 0) {
      return (
        <div>No subs selected</div>
      );
    }
    return (
      <List>
        {props.selectedSubs.map((sub: string) => {
          return <ListItem key={sub}>{sub}</ListItem>;
        })}
      </List>
    );
  };

  return (
    <div>
      <Search
        suggestions={props.searchSubs}
        placeholder="Search for a sub..."
        onChange={props.fetchSubs}
        onSelected={props.selectSub}
      />
      <PlaylistWrapper>
        <Card>
          <CardTitle>Selected subs</CardTitle>
          {renderList()}
          <Button
            onClick={() => props.createPlaylist()}
            style={{ width: '57%', marginRight: '3%', marginTop: '25px' }}
            disabled={props.selectedSubs.length === 0 ? true : false}
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
