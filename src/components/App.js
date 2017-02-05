import React, {Component} from 'react';
import styled from 'styled-components';

import Header from './Header';
import Player from './Player';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #151516;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Player />
      </Wrapper>
    );
  }
}

export default App;
