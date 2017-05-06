interface IPlayer {
  played: number
  seeking: boolean
  playing: boolean
  timer: number
  volume: number
  showControls: boolean
  duration: number
  ended: boolean
}

interface IPlayerProps extends IPlayer {
  url: string
  hideControls: boolean
  delay: number
  useDefaultPlayer: boolean
  isFirst: boolean
  dispatch: IDispatch<any>
  getPrevNextPost: (direction: boolean) => void
}