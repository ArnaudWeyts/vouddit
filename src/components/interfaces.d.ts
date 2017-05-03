interface IAppProps {
  subreddit: string,
  posts: Array<IPost>,
  nextPosts: Array<IPost>,
  isFetching: boolean,
  postActive: IPost,
  showSettings: boolean,
  delay: number,
  sort: string,
  dispatch: IDispatch<any>
}

interface IDispatch<T> {
  (item: T): any
}

interface IPosts {
  subreddit: string,
  posts: Array<IPost>
  nextPosts: Array<IPost>
  isFetching: boolean,
  postActive: IPost,
}

interface IPost {
  title: string,
  author: string,
  index: number,
  url: string,
  ups: number,
  permalink: string,
  media: { type: string }
}

interface ISettings {
  showSettings: boolean,
  delay: number,
  sort: string
}

interface IHeaderProps {
  showSettings: boolean,
  changeSub: void,
  toggleSettings: void
}
