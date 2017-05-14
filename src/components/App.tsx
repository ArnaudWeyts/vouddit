import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  fetchPosts,
  selectSubreddit,
  setPrevNextPost
} from '../redux/actions/postsActions';
import { togglePlayer } from '../redux/actions/playerActions';
import { toggleSettings } from '../redux/actions/settingsActions';
import { togglePlaylists } from '../redux/actions/playlistsActions';

import { debounce } from '../lib/utils';

import Header from './Header';
import Player from './Player';
import RedditControls from './RedditControls';
import Playlists from './SidePanels/Playlists';
import Settings from './SidePanels/Settings';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #151516;
  overflow: hidden;
`;

interface ContentWrapperProps {
  showSettings: boolean;
  showPlaylists: boolean;
}
const ContentWrapper = styled.div`
  margin-left: ${(props: ContentWrapperProps) => (props.showPlaylists ? '300px' : 0)};
  margin-right: ${(props: ContentWrapperProps) => (props.showSettings ? '300px' : 0)};
  transition: margin 0.3s ease-in-out;
`;

class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    const { fetchPostsDisp, subreddit, sort } = this.props;
    fetchPostsDisp(subreddit, undefined, sort);
  }

  componentDidMount() {
    window.addEventListener('keydown', debounce(this.handleKeyDown, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', debounce(this.handleKeyDown, 100));
  }

  componentWillReceiveProps(nextProps: IAppProps) {
    this.checkForUpdate(nextProps);
  }

  // keyboard shortcuts wheeeee
  handleKeyDown({ key }: { key: string }) {
    const { postActive, setPrevNextPostDisp, togglePlayerDisp } = this.props;
    if (!postActive) { return; }
    switch (key) {
      case 'ArrowRight':
        return setPrevNextPostDisp(postActive, true);
      case 'ArrowLeft':
        return setPrevNextPostDisp(postActive, false);
      case ' ':
        return togglePlayerDisp();
      default:
        return;
    }
  }

  checkForUpdate(nextProps: IAppProps) {
    // we can't update without the current posts
    if (!this.props.postActive || !nextProps.postActive) { return; }

    const {
      posts,
      nextPosts,
      subreddit,
      isFetching,
      sort,
      fetchPostsDisp
    } = this.props;

    // never update while fetching
    if (isFetching || nextProps.isFetching) { return; }

    // fetch more posts if there are only 5 left
    if (nextProps.postActive.index + 4 > posts.length) {
      fetchPostsDisp(subreddit, nextPosts, sort);
    }
  }

  // dispatch event when the subreddit is changed
  changeSub(sub: string) {
    const { sort, selectSubredditDisp, fetchPostsDisp } = this.props;
    selectSubredditDisp(sub);
    fetchPostsDisp(sub, undefined, sort);
  }

  render() {
    const {
      posts,
      postActive,
      subreddit,
      showSettings,
      showPlaylists,
      delay,
      setPrevNextPostDisp,
      togglePlayerDisp,
      toggleSettingsDisp,
      togglePlaylistsDisp
    } = this.props;

    return (
      <Wrapper>
        <ContentWrapper
          showSettings={showSettings}
          showPlaylists={showPlaylists}
        >
          <Header
            currentSub={subreddit}
            changeSub={(sub: string) => this.changeSub(sub)}
            toggleSettings={() => toggleSettingsDisp()}
            togglePlaylists={() => togglePlaylistsDisp()}
            showSettings={showSettings}
            showPlaylists={showPlaylists}
          />
          <Player
            url={postActive ? postActive.url : ''}
            // TODO make this a toggleable setting
            hideControls={
              postActive ? postActive.media.type === 'vimeo.com' : false
            }
            isFirst={postActive ? postActive.index === 0 : false}
            getPrevNextPost={direction => {
              if (!postActive) { return; }
              setPrevNextPostDisp(postActive, direction);
            }}
            delay={delay}
          />
          <RedditControls
            togglePlayer={() => togglePlayerDisp()}
            currentVid={postActive}
            nextVid={postActive ? posts[postActive.index + 1] : undefined}
            getPrevNextPost={direction => {
              if (!postActive) { return; }
              setPrevNextPostDisp(postActive, direction);
            }}
          />
        </ContentWrapper>
        <Playlists />
        <Settings />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ posts, settings, playlists }:
  { posts: IPosts, settings: ISettings, playlists: IPlaylists }
) => ({
  subreddit: posts.subreddit,
  posts: posts.posts,
  nextPosts: posts.nextPosts,
  isFetching: posts.isFetching,
  postActive: posts.postActive,
  showSettings: settings.showSettings,
  showPlaylists: playlists.showPlaylists,
  delay: settings.delay,
  sort: settings.sort,
});

const mapDispatchToProps = (dispatch: IDispatch<any>) => {
  return {
    fetchPostsDisp: (subreddit: string, after?: string, sort?: string) => {
      dispatch(fetchPosts(subreddit, after, sort));
    },
    setPrevNextPostDisp: (post: IPost, direction: boolean) => {
      dispatch(setPrevNextPost(post, direction));
    },
    selectSubredditDisp: (sub: string) => dispatch(selectSubreddit(sub)),
    togglePlayerDisp: () => dispatch(togglePlayer()),
    toggleSettingsDisp: () => dispatch(toggleSettings()),
    togglePlaylistsDisp: () => dispatch(togglePlaylists())
  };
};

export default connect<{}, {}, {}>(mapStateToProps, mapDispatchToProps)(App);
