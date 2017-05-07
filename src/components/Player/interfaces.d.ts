interface IPlayer {
  played: number
  seeking: boolean
  playing: boolean
  volume: number
  showControls: boolean
  ended: boolean
  duration?: number
  timer?: number
}

interface IPlayerProps extends IPlayer {
  dispatch: IDispatch<any>
}

interface IPlayerPassedProps {
  url: string
  hideControls: boolean
  delay: number
  useDefaultPlayer?: boolean
  isFirst: boolean
  getPrevNextPost: (direction: boolean) => void
}
