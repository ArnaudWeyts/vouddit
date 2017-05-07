interface IPlayer {
  played: number
  seeking: boolean
  playing: boolean
  timer: number
  volume: number
  showControls: boolean
  duration: number
  ended: boolean
  dispatch: IDispatch<any>
}

interface IPlayerProps {
  url: string
  hideControls: boolean
  delay: number
  useDefaultPlayer?: boolean
  isFirst: boolean
  getPrevNextPost: (direction: boolean) => void
}
