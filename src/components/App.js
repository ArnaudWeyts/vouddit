import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {fetchPosts} from '../redux/actions';

import Header from './Header';
import Player from './Player';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #151516;
`;

class App extends Component {
  componentWillMount() {
    this.props.fetchPosts('youtubehaiku');
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Player />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  activePost: state.activePost
});

export default connect(mapStateToProps, {fetchPosts})(App);
