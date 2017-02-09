import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {fetchPosts, selectSubreddit, setPrevNextPost} from '../redux/actions';

import Header from './Header';
import Player from './Player';
import RedditControls from './RedditControls';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #151516;
`;

class App extends Component {
  componentWillMount() {
    const {dispatch, subreddit} = this.props;
    dispatch(fetchPosts(subreddit));
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

  render() {
    const {posts, postActive, dispatch, subreddit} = this.props;

    return (
      <Wrapper>
        <Header 
          currentSub={subreddit}
          changeSub={(sub) => this.changeSub(dispatch, sub)}
        />
        <Player
          post={postActive ? postActive : ''} 
          getPrevNextPost={(direction) => this.getPrevNextPost(dispatch, postActive, direction)}
        />
        <RedditControls 
          nextVideo={postActive ? posts[postActive.index + 1] : null}
        />
      </Wrapper>
    );
  }
}

App.propTypes = {
  subreddit: PropTypes.string.isRequired,
  posts:  PropTypes.array.isRequired,
  activePost: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  subreddit: state.subreddit,
  posts: state.posts,
  postActive: state.postActive
});

export default connect(mapStateToProps)(App);
