interface IPlaylists {
  showPlaylists: boolean
  showAddPlaylist: boolean
  searchSubs: Array<any>
  playlists: Array<IPlaylist>
  currentPlaylist: IPlaylist
}

interface IPlaylist {
  name?: string
  subs: Array<string>
}

interface IPlaylistsProps extends IPlaylists {
  dispatch: IDispatch<any>
  togglePlaylistsDisp: () => void
  toggleAddPlaylistDisp: () => void
  fetchSubsDisp: (query: string) => void
  updateSubDisp: (sub: string, remove?: boolean) => void
  updateNameDisp: (name: string) => void
  createPlaylistDisp: () => void
  clearCurrentPLDisp: () => void
  clearSearchSubsDisp: () => void
}

interface IAddPlaylistsProps {
  searchSubs: Array<string>
  playlist: IPlaylist
  fetchSubs: (query: string) => void
  updateSub: (sub: string, remove?: boolean) => void
  updateName: (name: string) => void
  toggleAddPlaylist: () => void
  createPlaylist: () => void
  clearSearchSubs: () => void
}
