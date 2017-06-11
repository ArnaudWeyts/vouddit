interface IPlayer {
  played: number;
  seeking: boolean;
  playing: boolean;
  volume: number;
  showControls: boolean;
  ended: boolean;
  duration?: number;
  timer?: number;
}

interface IPlayerProps extends IPlayer {
  dispatch: IDispatch<any>;
  togglePlayerDisp: (toggle?: boolean) => void;
  toggleControlsDisp: () => void;
  updatePlayedDisp: (played: number) => void;
  setDurationDisp: (duration: number) => void;
  toggleEndedDisp: () => void;
  setTimerDisp: (timer?: number) => void;
  cancelAutoplayDisp: () => void;
}

interface IPlayerPassedProps {
  url: string;
  hideControls: boolean;
  delay: number;
  useDefaultPlayer?: boolean;
  isFirst: boolean;
  getPrevNextPost: (direction: boolean) => void;
}
