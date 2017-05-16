interface IDispatch<T> {
  (item: T): any
}

interface IPosts {
  subreddit: string
  posts: Array<IPost>
  isFetching: boolean
  nextPosts?: string
  postActive?: IPost
}

interface IPost {
  title: string
  author: string
  index: number
  url: string
  ups: number
  permalink: string
  media: { type: string }
  data: {
    media: {
      type: string
      oembed: {
        thumbnail_url: string
      }
    }
  }
}

interface ISettings {
  showSettings: boolean
  delay: number
  sort: string
  useDefaultPlayer: boolean
}

interface IAppProps extends IPosts, ISettings, IPlaylists {
  dispatch: IDispatch<any>
  fetchPostsDisp: (subreddit: string, after?: string, sort?: string) => void
  setPrevNextPostDisp: (post: IPost, direction: boolean) => void
  selectSubredditDisp: (sub: string) => void
  togglePlayerDisp: () => void
  toggleSettingsDisp: () => void
  togglePlaylistsDisp: () => void
}

interface IHeaderProps {
  currentSub: string
  showSettings: boolean
  showPlaylists: boolean
  changeSub: (value: string) => void
  toggleSettings: () => void
  togglePlaylists: () => void
}

interface IControlsProps {
  currentVid?: IPost
  togglePlayer: () => void
  getPrevNextPost: (next: boolean) => void
  nextVid?: IPost
}

interface ISettingsProps extends ISettings {
  dispatch: IDispatch<any>
}

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
  selectSubDisp: (sub: string) => void
  updateNameDisp: (name: string) => void
  createPlaylistDisp: () => void
  clearCurrentPLDisp: () => void
  clearSearchSubsDisp: () => void
}

interface IAddPlaylistsProps {
  searchSubs: Array<string>
  playlist: IPlaylist
  fetchSubs: (query: string) => void
  selectSub: (sub: string) => void
  updateName: (name: string) => void
  toggleAddPlaylist: () => void
  createPlaylist: () => void
  clearSearchSubs: () => void
}
