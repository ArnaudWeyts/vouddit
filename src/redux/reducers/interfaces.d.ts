interface IAction {
  type: string
}

interface IPlayerAction extends IAction {
  play: boolean
  played: number
  volume: number
  seeking: boolean
  duration: number
  timer: number
}

interface IPostsAction extends IAction {
  posts: { children: Array<IPost>, after: string }
  update: boolean
  nextPostId: number
  subreddits: Array<string>
}

interface ISettingsAction extends IAction {
  showSettings: boolean
  useDefaultPlayer: boolean
  delay: number
  sort: string
}

interface IPlaylistsAction extends IAction {
  showPlaylists: boolean
  showAddPlaylist: boolean
  searchSubs: Array<any>
  playlist: IPlaylist
  sub: string
  id: number
  name: string
}