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

interface IAppProps extends IPosts, ISettings, IMenu {
  dispatch: IDispatch<any>
}

interface IHeaderProps {
  currentSub: string
  showSettings: boolean
  showMenu: boolean
  changeSub: (value: string) => void
  toggleSettings: () => void
  toggleMenu: () => void
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

interface IMenu {
  showMenu: boolean
  searchSubs: Array<any>
  playlists: Array<{ name: string, subs: Array<string> }>
}

interface IMenuProps extends IMenu {
  toggleMenu: () => void
  fetchSubs: (sub: string) => void
  selectSub: (sub: string) => void
}
