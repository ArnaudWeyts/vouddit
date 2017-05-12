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
import { toggleMenu, fetchSubs } from '../redux/actions/menuActions';

import { debounce } from '../lib/utils';

import Header from './Header';
import Player from './Player';
import RedditControls from './RedditControls';
import Menu from './SidePanels/Menu';
import Settings from './SidePanels/Settings';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #151516;
  overflow: hidden;
`;

interface ContentWrapperProps {
  showSettings: boolean;
  showMenu: boolean;
}
const ContentWrapper = styled.div`
  margin-left: ${(props: ContentWrapperProps) => (props.showMenu ? '300px' : 0)};
  margin-right: ${(props: ContentWrapperProps) => (props.showSettings ? '300px' : 0)};
  transition: margin 0.3s ease-in-out;
`;

class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    const { dispatch, subreddit, sort } = this.props;
    dispatch(fetchPosts(subreddit, undefined, sort));
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
    const { dispatch, postActive } = this.props;
    if (!postActive) { return; }
    switch (key) {
      case 'ArrowRight':
        return dispatch(setPrevNextPost(postActive, true));
      case 'ArrowLeft':
        return dispatch(setPrevNextPost(postActive, false));
      case ' ':
        return dispatch(togglePlayer());
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
      dispatch,
      sort
    } = this.props;

    // never update while fetching
    if (isFetching || nextProps.isFetching) { return; }

    // fetch more posts if there are only 5 left
    if (nextProps.postActive.index + 4 > posts.length) {
      dispatch(fetchPosts(subreddit, nextPosts, sort));
    }
  }

  // dispatch event when the subreddit is changed
  changeSub(dispatch: IDispatch<any>, sub: string) {
    const { sort } = this.props;
    dispatch(selectSubreddit(sub));
    dispatch(fetchPosts(sub, undefined, sort));
  }

  // dispatch event for next/prev post
  getPrevNextPost(dispatch: IDispatch<any>, post: IPost, direction: boolean) {
    dispatch(setPrevNextPost(post, direction));
  }

  // dispatch for togglePlayer
  togglePlayerDisp(dispatch: IDispatch<any>) {
    dispatch(togglePlayer());
  }

  // dispatch for settings
  toggleSettingsDisp(dispatch: IDispatch<any>) {
    dispatch(toggleSettings());
  }

  toggleMenuDisp(dispatch: IDispatch<any>) {
    dispatch(toggleMenu());
  }

  fetchSubsDisp(dispatch: IDispatch<any>, query: string) {
    dispatch(fetchSubs(query));
  }

  render() {
    const {
      posts,
      postActive,
      dispatch,
      subreddit,
      showSettings,
      showMenu,
      delay,
      subs
    } = this.props;

    return (
      <Wrapper>
        <ContentWrapper
          showSettings={showSettings}
          showMenu={showMenu}
        >
          <Header
            currentSub={subreddit}
            changeSub={(sub: string) => this.changeSub(dispatch, sub)}
            toggleSettings={() => this.toggleSettingsDisp(dispatch)}
            toggleMenu={() => this.toggleMenuDisp(dispatch)}
            showSettings={showSettings}
            showMenu={showMenu}
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
              this.getPrevNextPost(dispatch, postActive, direction);
            }}
            delay={delay}
          />
          <RedditControls
            togglePlayer={() => this.togglePlayerDisp(dispatch)}
            currentVid={postActive}
            nextVid={postActive ? posts[postActive.index + 1] : undefined}
            getPrevNextPost={direction => {
              if (!postActive) { return; }
              this.getPrevNextPost(dispatch, postActive, direction);
            }}
          />
        </ContentWrapper>
        <Menu
          showMenu={showMenu}
          subs={subs}
          toggleMenu={() => this.toggleMenuDisp(dispatch)}
          fetchSubs={(query: string) => this.fetchSubsDisp(dispatch, query)}
        />
        <Settings />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ posts, settings, menu }: { posts: IPosts, settings: ISettings, menu: IMenu }) => ({
  subreddit: posts.subreddit,
  posts: posts.posts,
  nextPosts: posts.nextPosts,
  isFetching: posts.isFetching,
  postActive: posts.postActive,
  showSettings: settings.showSettings,
  showMenu: menu.showMenu,
  delay: settings.delay,
  sort: settings.sort,
  subs: menu.subs
});

export default connect<{}, {}, {}>(mapStateToProps)(App);
