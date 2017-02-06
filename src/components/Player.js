import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
`;

let Progress = styled.div`
  width: 100%;
  height: 5px;
  background-color: #FFF;
`;

const ProgressFilled = styled.div`
  background-color: #000;
  height: 100%;
  width: 5%;
`;

const Controls = styled.div`
  width: 100%;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const Toggle = styled.button`
  
`;

const Volume = styled.input`
  float: right;
`;

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { showControls: false };

    this.toggleControls = this.toggleControls.bind(this);
  }

  toggleControls(e) {
    if(e.type === 'mouseenter') {
      this.setState({showControls: true});
      
    } else {
      this.setState({showControls: false});
    }
  }

  render() {
    return (
      <Wrapper onMouseEnter={this.toggleControls} onMouseLeave={this.toggleControls}>
        <ReactPlayer url="https://youtube.com/watch?v=ysz5S6PUM-U" width="100%" height="100%" />
        <Progress>
          <ProgressFilled />
        </Progress>
        <Controls visible={this.state.showControls}>
          <Toggle>►</Toggle>
          <Volume type="range" name="volume" min={0} max={1} step={0.05} value={1} />
        </Controls>
      </Wrapper>
    );
  }
}
