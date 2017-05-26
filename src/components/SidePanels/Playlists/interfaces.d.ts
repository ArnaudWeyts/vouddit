interface IPlaylists {
  showPlaylists: boolean
  showAddPlaylist: boolean
  searchSubs: Array<any>
  playlists: Array<IPlaylist>
  editingPlaylist: IPlaylist | undefined
  selectedPlaylist: IPlaylist | undefined
}

interface IPlaylist {
  id: number,
  name: string
  subs: Array<string>
  updating?: boolean
}

interface IPlaylistsProps extends IPlaylists {
  dispatch: IDispatch<any>
  togglePlaylistsDisp: () => void
  toggleAddPlaylistDisp: (id?: number) => void
  fetchSubsDisp: (query: string) => void
  updateSubDisp: (sub: string, remove?: boolean) => void
  updateNameDisp: (name: string) => void
  createPlaylistDisp: (id?: number) => void
  clearCurrentPLDisp: () => void
  clearSearchSubsDisp: () => void
  deletePlaylistDisp: (id: number) => void
  selectPlaylistDisp: (id: number) => void
}

interface IAddPlaylistsProps {
  searchSubs: Array<string>
  playlist?: IPlaylist
  fetchSubs: (query: string) => void
  updateSub: (sub: string, remove?: boolean) => void
  updateName: (name: string) => void
  toggleAddPlaylist: () => void
  createPlaylist: (id?: number) => void
  clearSearchSubs: () => void
}

interface IPlaylistListProps {
  playlists: Array<IPlaylist>
  selectedPlaylistId?: number
  deletePlaylist: (id: number) => void
  editPlaylist: (id: number) => void
  selectPlaylist: (id: number) => void
}
