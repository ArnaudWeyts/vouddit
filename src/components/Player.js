import React, {Component} from 'react';
import ReactPlayer from 'react-player';

import icons from '../icons';

import {
  Wrapper,
  ControlBar,
  Progress,
  ProgressFilled,
  Time,
  Controls,
  Toggle,
  Volume,
  PrevButton,
  NextButton
} from './PlayerStyles';

import {secToFormat} from '../lib/utils';

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

  componentWillReceiveProps() {
    this.resetPlayer(this);
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

  resetPlayer(context) {
    context.setState({played: 0});
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
      resetPlayer
    } = this;

    const {getPrevNextPost} = this.props;

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
          onEnded={() => {
            resetPlayer(this);
            getPrevNextPost(true);
          }}
          width="100%"
          height="100%"
          // this doesn't work with the default showinfo=0 option
          // thank google for that but it's either the title bar or small logo
          youtubeConfig={{playerVars: {modestbranding: 1}}} />
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
            <Toggle 
              src={playing ? icons.pause : icons.play_arrow}
              onClick={toggleVideo}
            />
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
          visible={showControls}
          onClick={() => getPrevNextPost(false)}
          src={icons.chevron_left} />
        <NextButton 
          visible={showControls}
          onClick={() => getPrevNextPost(true)}
          src={icons.chevron_right} />
      </Wrapper>
    );
  }
}
