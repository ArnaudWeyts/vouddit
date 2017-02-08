import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import {setPrevNextPost,} from '../redux/actions';

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  position: relative;
  overflow: hidden;
`;

const ControlBar = styled.div`
  width: 100%;
  position: absolute;
  background-color: #000;
  bottom: 0;
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(100%) translateY(-5px)'};
  transition: transform 0.2s;
`;

let Progress = styled.div`
  cursor: ew-resize;
  width: 100%;
  height: ${props => props.extend ? '15' : '5'}px;
  background-color: #000;
  transition: height 0.2s;
`;

const ProgressFilled = styled.div`
  background-color: #2196F3;
  height: 100%;
  width: ${props => Math.ceil(props.played * 10000)/100}%;
`;

const Time = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #FFF;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 35px;
`;

const Toggle = styled.button`
  width: 30px;
  height: 100%;
  cursor: pointer;
  color: #FFF;
  border: none;
  background: transparent;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 10px;

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
  margin-left: auto;
  margin-right: 10px;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: #FFF;
    box-sizing: border-box;
    border-radius: 2px;
  }
  &::-webkit-slider-thumb {
    border: 1px solid #FFF;
    background-color: #000;
    box-sizing: content-box;
    height: 16px;
    width: 3px;
    margin-top: -5px;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

const PrevButton = styled.a`
  cursor: pointer;
  color: #FFF;
  font-size: 60px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: ${props => props.visible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform .2s;
`;

const NextButton = styled.a`
  cursor: pointer;
  color: #FFF;
  font-size: 60px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: ${props => props.visible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .2s;
`;

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      showControls: false,
      playing: false,
      volume: 1,
      played: 0,
      seeking: false,
      duration: null
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

  /**
   * Accepts seconds and formats it for our video player
   * 
   * @param {int} secs
   * @returns {time} HH:MM:SS
   * 
   * @memberOf Player
   */
  secToFormat(secs) {
    if (secs === null) {
      return '0:00';
    }
    const sec_num = parseInt(secs, 10)    
    const hours   = Math.floor(sec_num / 3600) % 24
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60    
    return [hours,minutes,seconds]
      // filter out hours if it's 0
      .filter((t, index) => !(index === 0 && t === 0))
      // map over everything and put a 0 in front, except when
      // it's the first one
      .map((t, index) => (index > 0) && t < 10 ? "0" + t: t)
      .join(":");
  }

  getPrevNextPost(direction) {
    this.setState({played: 0});
    const {post, dispatch} = this.props;
    const next = setPrevNextPost(post, direction);
    dispatch(next);
  }

  render() {
    // state variables
    const {
      playing,
      volume,
      seeking,
      showControls,
      played,
      duration
    } = this.state;
    // functions
    const {
      toggleControls,
      toggleVideo,
      setVolume,
      scrub,
      secToFormat,
      getPrevNextPost
    } = this;

    return (
      <Wrapper onMouseEnter={toggleControls} onMouseLeave={toggleControls}>
        <ReactPlayer 
          ref={player => {this.player = player}}
          url={this.props.post.url}
          progressFrequency={250}
          playing={playing}
          volume={volume}
          onPlay={() => this.setState({playing: true})} 
          onPause={() => this.setState({playing: false})}
          onProgress={({played}) => !seeking && this.setState({played: played})}
          onDuration={(duration) => this.setState({duration: duration})}
          onEnded={getPrevNextPost.bind(this, true)}
          width="100%"
          height="100%"
          />
        <ControlBar visible={showControls}>
          <Progress
            extend={showControls}
            onClick={scrub.bind(this)}
            onMouseMove={seeking && scrub.bind(this)}
            onMouseDown={() => this.setState({seeking: true, playing: false})}
            onMouseUp={() => this.setState({seeking: false, playing: true})}
            onMouseLeave={() => seeking && this.setState({seeking: false, playing: true})}
            >
            <ProgressFilled played={played} />
          </Progress>
          <Controls>
            <Toggle onClick={toggleVideo}><i className="material-icons">{playing ? 'pause' : 'play_arrow'}</i></Toggle>
            <Time>{secToFormat(played * duration)} / {secToFormat(duration)}</Time>
            <Volume
              onChange={setVolume}
              type="range"
              name="volume"
              min={0} max={1} step={0.05} 
              value={volume} />
          </Controls>
        </ControlBar>
        <PrevButton 
          className="material-icons"
          visible={showControls}
          onClick={getPrevNextPost.bind(this, true)}>
          chevron_left
        </PrevButton>
        <NextButton 
          className="material-icons"
          visible={showControls}
          onClick={getPrevNextPost.bind(this, true)}>
          chevron_right
        </NextButton>
      </Wrapper>
    );
  }
}
