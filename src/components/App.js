import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {fetchPosts, selectSubreddit, setPrevNextPost} from '../redux/actions/postsActions';
import {togglePlayer} from '../redux/actions/playerActions';

import {debounce} from '../lib/utils';

import Header from './Header';
import Player from './Player';
import RedditControls from './RedditControls';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #151516;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    const {dispatch, subreddit} = this.props;
    dispatch(fetchPosts(subreddit));
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
  handleKeyDown({key}) {
    const {dispatch, postActive} = this.props;
    switch(key) {
      case 'ArrowRight':
        return dispatch(setPrevNextPost(postActive, true));
      case 'ArrowLeft':
        return dispatch(setPrevNextPost(postActive, false));
      default:
        return;
    }
  }

  checkForUpdate(nextProps) {
    // we can't update without the current posts
    if (!this.props.postActive) return;

    const {
      posts, nextPosts,
      subreddit, isFetching, 
      dispatch
    } = this.props;

    // never update while fetching
    if (isFetching || nextProps.isFetching) return;

    // fetch more posts if there are only 5 left
    if (nextProps.postActive.index + 4 > posts.length) {
      dispatch(fetchPosts(subreddit, nextPosts))
    }
  }

  // dispatch event when the subreddit is changed
  changeSub(dispatch, sub) {
    dispatch(selectSubreddit(sub));
    dispatch(fetchPosts(sub));
  }

  // dispatch event for next/prev post
  getPrevNextPost(dispatch, post, direction) {
    dispatch(setPrevNextPost(post, direction));
  }

  // dispatch for togglePlayer
  togglePlayerDisp(dispatch, playing) {
    dispatch(togglePlayer(playing));
  }

  render() {
    const {posts, postActive, dispatch, subreddit} = this.props;

    return (
      <Wrapper>
        <Header 
          currentSub={subreddit}
          changeSub={(sub) => this.changeSub(dispatch, sub)}
        />
        <Player
          url={postActive ? postActive.url : ''}
          // TODO make this a toggleable setting
          hideControls={postActive ? postActive.media.type === 'vimeo.com' : false}
          isFirst={postActive ? postActive.index === 0 : false}
          getPrevNextPost={(direction) => this.getPrevNextPost(dispatch, postActive, direction)}
        />
        <RedditControls
          togglePlayer={() => this.togglePlayerDisp(dispatch, false)}
          currentVid={postActive} 
          nextVid={postActive ? posts[postActive.index + 1] : null}
          getPrevNextPost={(direction) => this.getPrevNextPost(dispatch, postActive, direction)}
        />
      </Wrapper>
    );
  }
}

App.propTypes = {
  subreddit: PropTypes.string.isRequired,
  posts:  PropTypes.array.isRequired,
  nextPosts: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  postActive: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({postsReducer}, ownProps) => ({
  subreddit: postsReducer.subreddit,
  posts: postsReducer.posts,
  nextPosts: postsReducer.nextPosts,
  isFetching: postsReducer.isFetching,
  postActive: postsReducer.postActive
});

export default connect(mapStateToProps)(App);
