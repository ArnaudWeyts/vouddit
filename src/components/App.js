import PropTypes from 'prop-types';
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  fetchPosts,
  selectSubreddit,
  setPrevNextPost
} from '../redux/actions/postsActions';
import { togglePlayer } from '../redux/actions/playerActions';
import { toggleSettings } from '../redux/actions/settingsActions';

import { debounce } from '../lib/utils';

import Header from './Header';
import Player from './Player/index';
import RedditControls from './RedditControls';
import Settings from './Settings';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #151516;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  margin-right: ${props => (props.showSettings ? '300px' : 0)};
  transition: margin-right 0.3s ease-in-out;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    const { dispatch, subreddit, sort } = this.props;
    dispatch(fetchPosts(subreddit, null, sort));
  }

  componentDidMount() {
    window.addEventListener('keydown', debounce(this.handleKeyDown, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', debounce(this.handleKeyDown, 100));
  }

  componentWillReceiveProps(nextProps) {
    this.checkForUpdate(nextProps);
  }

  // keyboard shortcuts wheeeee
  handleKeyDown({ key }) {
    const { dispatch, postActive } = this.props;
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

  checkForUpdate(nextProps) {
    // we can't update without the current posts
    if (!this.props.postActive) return;

    const {
      posts,
      nextPosts,
      subreddit,
      isFetching,
      dispatch,
      sort
    } = this.props;

    // never update while fetching
    if (isFetching || nextProps.isFetching) return;

    // fetch more posts if there are only 5 left
    if (nextProps.postActive.index + 4 > posts.length) {
      dispatch(fetchPosts(subreddit, nextPosts, sort));
    }
  }

  // dispatch event when the subreddit is changed
  changeSub(dispatch, sub) {
    const { sort } = this.props;
    dispatch(selectSubreddit(sub));
    dispatch(fetchPosts(sub, null, sort));
  }

  // dispatch event for next/prev post
  getPrevNextPost(dispatch, post, direction) {
    dispatch(setPrevNextPost(post, direction));
  }

  // dispatch for togglePlayer
  togglePlayerDisp(dispatch) {
    dispatch(togglePlayer());
  }

  toggleSettingsDisp(dispatch) {
    dispatch(toggleSettings());
  }

  render() {
    const {
      posts,
      postActive,
      dispatch,
      subreddit,
      showSettings,
      delay
    } = this.props;

    return (
      <Wrapper
      /**
        this makes the menu disappear if we click on the wrapper,
        not needed atm 
        onClick={e => {
          const settings = ReactDOM.findDOMNode(this.refs.settings);
          // check if you're clicking on the settings window
          // or any child of it, and exit if so
          if (!settings || settings.contains(e.target)) return;
          if (!showSettings) return;
          // hide the settings window, because we clicked outside of it
          e.target !== settings && dispatch(toggleSettings());
        }}**/
      >
        <ContentWrapper showSettings={showSettings}>
          <Header
            currentSub={subreddit}
            changeSub={sub => this.changeSub(dispatch, sub)}
            toggleSettings={() => this.toggleSettingsDisp(dispatch)}
            showSettings={showSettings}
          />
          <Player
            url={postActive ? postActive.url : ''}
            // TODO make this a toggleable setting
            hideControls={
              postActive ? postActive.media.type === 'vimeo.com' : false
            }
            isFirst={postActive ? postActive.index === 0 : false}
            getPrevNextPost={direction =>
              this.getPrevNextPost(dispatch, postActive, direction)}
            delay={delay}
            showSettings={showSettings}
          />
          <RedditControls
            togglePlayer={() => this.togglePlayerDisp(dispatch)}
            currentVid={postActive}
            nextVid={postActive ? posts[postActive.index + 1] : null}
            getPrevNextPost={direction =>
              this.getPrevNextPost(dispatch, postActive, direction)}
          />
        </ContentWrapper>
        <Settings ref="settings" />
      </Wrapper>
    );
  }
}

App.propTypes = {
  subreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  nextPosts: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  postActive: PropTypes.object,
  showSettings: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  sort: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ posts, settings }, ownProps) => ({
  subreddit: posts.subreddit,
  posts: posts.posts,
  nextPosts: posts.nextPosts,
  isFetching: posts.isFetching,
  postActive: posts.postActive,
  showSettings: settings.showSettings,
  delay: settings.delay,
  sort: settings.sort
});

export default connect(mapStateToProps)(App);
