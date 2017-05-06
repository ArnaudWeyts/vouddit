interface IAppProps {
  subreddit: string
  posts: Array<IPost>
  nextPosts: Array<IPost>
  isFetching: boolean
  postActive: IPost
  showSettings: boolean
  delay: number
  sort: string
  dispatch: IDispatch<any>
}

interface IDispatch<T> {
  (item: T): any
}

interface IPosts {
  subreddit: string
  posts: Array<IPost>
  nextPosts: Array<IPost>
  isFetching: boolean
  postActive: IPost
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

interface IHeaderProps {
  currentSub: string
  showSettings: boolean
  changeSub: (value: string) => void
  toggleSettings: () => void
}

interface IControlsProps {
  currentVid: IPost
  togglePlayer: () => void
  getPrevNextPost: (next: boolean) => void
  nextVid?: IPost
}

interface ISettingsProps extends ISettings {
  dispatch: IDispatch<any>
}
