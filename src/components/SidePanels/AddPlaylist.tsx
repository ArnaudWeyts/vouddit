import * as React from 'react';

import Search from '../shared/Search';

const AddPlaylist: React.StatelessComponent<IAddPlaylistsProps> = props => {
  return (
    <Search
      suggestions={props.searchSubs}
      placeholder="Search subs..."
      onChange={props.fetchSubs}
      onSelected={props.selectSub}
    />
  );
}

export default AddPlaylist;
