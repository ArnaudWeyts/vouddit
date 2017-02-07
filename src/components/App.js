import React, {Component, PropTypes} from 'react';
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
    const {dispatch} = this.props;
    dispatch(fetchPosts('youtubehaiku'));
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Player
          post={this.props.postActive ? this.props.postActive : ''} 
          dispatch={this.props.dispatch} 
        />
      </Wrapper>
    );
  }
}

App.propTypes = {
  posts:  PropTypes.object.isRequired,
  activePost: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  postActive: state.postActive
});

export default connect(mapStateToProps)(App);
