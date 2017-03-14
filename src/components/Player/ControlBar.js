import React from 'react';

import {
  ControlBar,
  Progress,
  ProgressFilled,
  Time,
  Controls,
  Toggle,
  Volume
} from './PlayerStyles';

import icons from '../../icons';

import {secToFormat} from '../../lib/utils';

const ControlBarComponent = (props) => {

  const {
    showControls, scrub,
    seeking, seek,
    played, playing,
    duration, volume
   } = props;

  return (
    <ControlBar visible={showControls}>
      <Progress
        extend={showControls}
        onClick={scrub.bind(this)}
        onMouseMove={seeking && scrub.bind(this)}
        onMouseDown={() => {
          dispatch(seek(true));
          dispatch(togglePlayer(false));
        }}
        onMouseUp={() => {
          dispatch(seek(false));
          dispatch(togglePlayer(true));
        }}
        onMouseLeave={() => seeking && dispatch(seek(false), togglePlayer(true))}
      >
        <ProgressFilled played={played} />
      </Progress>
      <Controls>
        <Toggle
          src={playing ? icons.pause : icons.play_arrow}
          onClick={() => dispatch(togglePlayer())}
        />
        <Time>{secToFormat(played * duration)} / {secToFormat(duration)}</Time>
        <Volume
          onChange={(e) => dispatch(setVolume(parseFloat(e.target.value)))}
          type="range"
          name="volume"
          min={0} max={1} step={0.05}
          value={volume} />
      </Controls>
    </ControlBar>
  );
}

export default ControlBarComponent;