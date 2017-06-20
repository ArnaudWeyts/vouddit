import * as React from 'react';
// weird requirejs needed to make react player work
const ReactPlayer = require('react-player');
import { connect } from 'react-redux';

import {
  togglePlayer,
  toggleControls,
  updatePlayed,
  setDuration,
  toggleEnded,
  setTimer,
  cancelAutoPlay
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
  player: any;

  componentWillReceiveProps(nextProps: IPlayerProps & IPlayerPassedProps) {
    // checks if a new video is being loaded
    if (nextProps.url !== this.props.url) {
      // reset the progress and time
      this.props.updatePlayedDisp(0);
      this.props.setDurationDisp(0);
    }
  }

  scrub(e: any) {
    const seekTo = parseFloat(
      String(e.nativeEvent.offsetX / e.target.parentNode.offsetWidth)
    );
    this.player.seekTo(seekTo);
    this.props.updatePlayedDisp(seekTo);
  }

  handleEnded() {
    const {
      delay,
      getPrevNextPost,
      toggleEndedDisp,
      setTimerDisp,
      updatePlayedDisp
    } = this.props;

    toggleEndedDisp();
    // start the next post, reset the player
    const delayThis = () => {
      getPrevNextPost(true);
      updatePlayedDisp(0);
      toggleEndedDisp();
    };
    setTimerDisp(window.setTimeout(delayThis, delay));
  }

  renderTimer() {
    return (
      <Timer>
        <svg className="svg">
          <Circle r="75" cx="77" cy="77" delay={this.props.delay} />
        </svg>
        <Button
          className="button"
          onClick={() => this.props.cancelAutoplayDisp()}
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
      showControls, // duration,
      url,
      isFirst,
      useDefaultPlayer,
      ended,
      getPrevNextPost,
      toggleControlsDisp,
      setDurationDisp,
      togglePlayerDisp
    } = this.props;

    return (
      <Wrapper
        onMouseEnter={() => toggleControlsDisp()}
        onMouseLeave={() => toggleControlsDisp()}
      >
        <ReactPlayer
          ref={(player: any) => {
            this.player = player;
          }}
          url={url}
          controls={useDefaultPlayer}
          playing={playing}
          volume={volume}
          // progressFrequency={duration < 1000 ? duration : 1000}
          onPlay={() => togglePlayerDisp(true)}
          onPause={() => togglePlayerDisp(false)}
          // this is pretty dodgy because this means we're updating
          // the state alot, but it does give us a smooth bar
          // stop update played action spam for now
          // onProgress={({played}) => !seeking && dispatch(updatePlayed(played))}
          onDuration={(duration: number) => setDurationDisp(duration)}
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

const mapDispatchToProps = (dispatch: IDispatch<any>) => {
  return {
    togglePlayerDisp: (play?: boolean) => dispatch(togglePlayer(play)),
    toggleControlsDisp: () => dispatch(toggleControls()),
    updatePlayedDisp: (played: number) => dispatch(updatePlayed(played)),
    setDurationDisp: (duration: number) => dispatch(setDuration(duration)),
    toggleEndedDisp: () => dispatch(toggleEnded()),
    setTimerDisp: (timer?: number) => dispatch(setTimer(timer)),
    cancelAutoplayDisp: () => dispatch(cancelAutoPlay())
  };
};

const mapStateToProps = ({
  player,
  settings
}: {
  player: IPlayer;
  settings: ISettings;
}) => {
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

export default connect<{}, {}, IPlayerPassedProps>(
  mapStateToProps,
  mapDispatchToProps
)(Player);
