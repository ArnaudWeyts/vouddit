interface IDispatch<T> {
  (item: T): any
}

interface IButtonProps {
  onClick: () => void
  children?: any
  className: string
}

interface ISelectProps {
  name: string
  options: Array<string>
  selected: string
  handleChange: (e: any, dispatch?: IDispatch<any>) => void
}

interface ISliderProps {
  name: string
  value: number
  min: number
  max: number
  handleChange: (e: any, dispatch?: IDispatch<any>) => void
}

interface ISearchProps {
  suggestions: Array<string>
  placeholder: string
  onChange: (param: any) => void
  onSelected: (param: any) => void
}
