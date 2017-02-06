import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  overflow: hidden;
`;

const AllControls = styled.div`
  width: 100%;
  position: absolute;
  background-color: #000;
  bottom: 0;
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(100%) translateY(-5px)'};
  transition: transform 0.2s;
`;

let Progress = styled.div`
  cursor: pointer;
  width: 100%;
  height: ${props => props.extend ? '20' : '5'}px;
  background-color: #FFF;
  transition: height 0.2s;
`;

const ProgressFilled = styled.div`
  background-color: #000;
  height: 100%;
  width: ${props => props.played * 100}%;
`;

const Controls = styled.div`
  width: 100%; 
`;

const Toggle = styled.button`
  width: 40px;
  height: 35px;
  cursor: pointer;
  color: #FFF;
  border: 1px solid #FFF;
  border-radius: 2px;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const Volume = styled.input`
  -webkit-appearance: none;
  background: transparent;
  float: right;
  color: #FFF;
  border: none;
  margin-top: 5px;
  margin-right: 5px;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    background: #FFF;
    box-sizing: border-box;
    border-radius: 2px;
    margin-top: 5px;
  }
  &::-webkit-slider-thumb {
    border: 1px solid #FFF;
    background-color: #000;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5.6px;
  }
`;

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showControls: false,
      playing: false,
      volume: 1,
      played: 0,
      seeking: false
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

  scrub(e) {
    const seekTo = parseFloat(e.nativeEvent.offsetX / e.target.parentNode.offsetWidth);
    this.player.seekTo(seekTo);
    this.setState({played: seekTo});
  }

  render() {
    return (
      <Wrapper onMouseEnter={this.toggleControls} onMouseLeave={this.toggleControls}>
        <ReactPlayer 
          ref={player => {this.player = player}}
          playing={this.state.playing}
          volume={this.state.volume}
          onPlay={() => this.setState({playing: true})} 
          onPause={() => this.setState({playing: false})}
          onProgress={({played}) => !this.state.seeking && this.setState({played: played})}
          url="https://youtu.be/GFeBR_soN5s"
          width="100%"
          height="100%"
          />
        <AllControls visible={this.state.showControls}>
          <Progress
            extend={this.state.showControls}
            onClick={this.scrub.bind(this)}
            onMouseMove={this.state.seeking && this.scrub.bind(this)}
            onMouseDown={() => this.setState({seeking: true, playing: false})}
            onMouseUp={() => this.setState({seeking: false, playing: true})}
            onMouseLeave={() => this.state.seeking && this.setState({seeking: false, playing: true})}
            >
            <ProgressFilled played={this.state.played} />
          </Progress>
          <Controls>
            <Toggle onClick={this.toggleVideo}>{this.state.playing ? '||' : '►'}</Toggle>
            <Volume
              onChange={this.setVolume}
              type="range"
              name="volume"
              min={0} max={1} step={0.05} 
              value={this.state.volume} />
          </Controls>
        </AllControls>
      </Wrapper>
    );
  }
}
