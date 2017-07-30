interface IDispatch<T> {
  (item: T): any;
}

interface ISearch {
  searchSubs: Array<string>;
}

interface IPosts {
  subreddits: Array<string>;
  posts: Array<IPost>;
  isFetching: boolean;
  nextPosts?: string;
  postActive?: IPost;
}

interface IPost {
  title: string;
  subreddit: string;
  author: string;
  index: number;
  url: string;
  ups: number;
  permalink: string;
  media: { type: string };
  data: {
    media: {
      type: string;
      oembed: {
        thumbnail_url: string;
      };
    };
  };
}

interface ISettings {
  showSettings: boolean;
  delay: number;
  sort: string;
  useDefaultPlayer: boolean;
}

interface IAppProps extends IPosts, ISettings, IPlaylists {
  dispatch: IDispatch<any>;
  initSnoowrapDisp: () => void;
  fetchPostsDisp: (subreddit: string, after?: string, sort?: string) => void;
  setPrevNextPostDisp: (post: IPost, direction: boolean) => void;
  selectSubredditsDisp: (subs: Array<string>) => void;
  togglePlayerDisp: () => void;
  toggleSettingsDisp: () => void;
  togglePlaylistsDisp: () => void;
  fetchSubsDisp: (query: string) => void;
}

interface IHeaderProps {
  currentSub: string;
  showSettings: boolean;
  showPlaylists: boolean;
  searchSubs: Array<string>;
  changeSub: (value: string) => void;
  toggleSettings: () => void;
  togglePlaylists: () => void;
  fetchSubs: (query: string) => void;
}

interface IControlsProps {
  currentVid?: IPost;
  togglePlayer: () => void;
  getPrevNextPost: (next: boolean) => void;
  nextVid?: IPost;
}

interface ISettingsProps extends ISettings {
  dispatch: IDispatch<any>;
}
