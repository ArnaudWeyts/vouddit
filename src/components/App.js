import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {fetchPosts} from '../redux/actions';

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

  render() {
    const {posts, postActive, dispatch} = this.props;

    return (
      <Wrapper>
        <Header />
        <Player
          post={postActive ? postActive : ''} 
          dispatch={dispatch} 
        />
        <RedditControls 
          nextVideo={postActive ? posts.children[postActive.index + 1] : null}
        />
      </Wrapper>
    );
  }
}

App.propTypes = {
  subreddit: PropTypes.string.isRequired,
  posts:  PropTypes.object.isRequired,
  activePost: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  subreddit: state.subreddit,
  posts: state.posts,
  postActive: state.postActive
});

export default connect(mapStateToProps)(App);
