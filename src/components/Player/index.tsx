import * as React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';

import {
  togglePlayer,
  toggleControls,
  updatePlayed,
  setDuration,
  toggleEnded,
  setTimer
} from '../../redux/actions/playerActions';

import {
  Wrapper,
  Dimmed,
  PrevButton,
  NextButton,
  Timer,
  Circle
} from './PlayerStyles';

import icons from '../shared/icons';
import Button from '../shared/Button';

class Player extends React.Component<IPlayerProps & IPlayerPassedProps, any> {
  refs: {
    player: any
  };

  componentWillReceiveProps(nextProps: IPlayerProps & IPlayerPassedProps) {
    // checks if a new video is being loaded
    if (nextProps.url !== this.props.url) {
      // reset the progress and time
      this.props.dispatch(updatePlayed(0));
      this.props.dispatch(setDuration(0));
    }
  }

  toggleControls(e: Event) {
    if (e.type === 'mouseenter') {
      this.props.dispatch(toggleControls());
    } else {
      this.props.dispatch(toggleControls());
    }
  }

  scrub(e: any) {
    const seekTo = parseFloat(
      String(e.nativeEvent.offsetX / e.target.parentNode.offsetWidth)
    );
    this.refs.player.seekTo(seekTo);
    this.props.dispatch(updatePlayed(seekTo));
  }

  handleEnded() {
    const { dispatch, getPrevNextPost, delay } = this.props;

    dispatch(toggleEnded());
    // start the next post, reset the player
    dispatch(
      setTimer(
        window.setTimeout(
          () => {
            getPrevNextPost(true);
            dispatch(updatePlayed(0));
            dispatch(toggleEnded());
          },
          delay
        )
      )
    );
  }

  renderTimer() {
    return (
      <Timer>
        <svg className="svg">
          <Circle r="75" cx="77" cy="77" delay={this.props.delay} />
        </svg>
        <Button
          className="button"
          onClick={() => {
            if (!this.props.timer) { return; }
            clearTimeout(this.props.timer);
            this.props.dispatch(toggleEnded());
          }}
        >
          Cancel
        </Button>
      </Timer>
    );
  }

  render() {
    const {
      playing,
      volume,
      showControls,
      // duration,
      dispatch,
      getPrevNextPost,
      url,
      isFirst,
      useDefaultPlayer,
      ended
    } = this.props;

    /*if(!useDefaultPlayer) {
      const { 
        played, seeking,
        hideControls, scrub
      } = this.props;
    }*/

    // functions
    // const { toggleControls } = this;

    return (
      <Wrapper
      /*
        onMouseEnter={toggleControls.bind(this)}
        onMouseLeave={toggleControls.bind(this)}
      */
      >
        <ReactPlayer
          ref={player => {
            this.refs.player = player;
          }}
          url={url}
          controls={useDefaultPlayer}
          playing={playing}
          volume={volume}
          // progressFrequency={duration < 1000 ? duration : 1000}
          onPlay={() => dispatch(togglePlayer(true))}
          onPause={() => dispatch(togglePlayer(false))}
          // this is pretty dodgy because this means we're updating
          // the state alot, but it does give us a smooth bar
          // stop update played action spam for now
          // onProgress={({played}) => !seeking && dispatch(updatePlayed(played))}
          onDuration={duration => dispatch(setDuration(duration))}
          onEnded={() => this.handleEnded()}
          width="100%"
          height="100%"
          style={{ position: 'absolute', zIndex: '-1' }}
        />
        <Dimmed visible={ended} />
        {ended && this.renderTimer()}
        <PrevButton
          visible={!isFirst && showControls}
          onClick={() => getPrevNextPost(false)}
          src={icons.chevronLeft}
        />
        <NextButton
          visible={showControls}
          onClick={() => getPrevNextPost(true)}
          src={icons.chevronRight}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ player, settings }: { player: IPlayer, settings: ISettings }) => {
  return {
    playing: player.playing,
    played: player.played,
    volume: player.volume,
    seeking: player.seeking,
    showControls: player.showControls,
    duration: player.duration,
    ended: player.ended,
    timer: player.timer,
    useDefaultPlayer: settings.useDefaultPlayer
  };
};

export default connect<{}, {}, IPlayerPassedProps>(mapStateToProps)(Player);
