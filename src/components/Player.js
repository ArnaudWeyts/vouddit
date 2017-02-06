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
    this.state = { 
      showControls: false,
      playing: false,
      volume: 1
    };

    this.toggleControls = this.toggleControls.bind(this);
    this.toggleVideo = this.toggleVideo.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }

  toggleControls(e) {
    if(e.type === 'mouseenter') {
      this.setState({showControls: true});
      
    } else {
      this.setState({showControls: false});
    }
  }

  toggleVideo() {
    this.setState({playing: !this.state.playing});
  }

  setVolume(e) {
    this.setState({volume: parseFloat(e.target.value)});
  }

  render() {
    return (
      <Wrapper onMouseEnter={this.toggleControls} onMouseLeave={this.toggleControls}>
        <ReactPlayer 
          playing={this.state.playing}
          volume={this.state.volume}
          onPlay={() => this.setState({playing: true})} 
          onPause={() => this.setState({playing: false})}
          url="https://youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%" />
        <Progress>
          <ProgressFilled />
        </Progress>
        <Controls visible={this.state.showControls}>
          <Toggle onClick={this.toggleVideo}>►</Toggle>
          <Volume
            onChange={this.setVolume}
            type="range"
            name="volume"
            min={0} max={1} step={0.05} 
            value={this.state.volume} />
        </Controls>
      </Wrapper>
    );
  }
}
