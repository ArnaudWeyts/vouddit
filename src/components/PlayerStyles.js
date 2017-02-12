import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  position: relative;
  overflow: hidden;
  user-select: none;
`;

export const ControlBar = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(100%) translateY(-5px)'};
  transition: transform 0.2s;
`;

export const Progress = styled.div`
  cursor: ew-resize;
  width: 100%;
  height: ${props => props.extend ? '15' : '5'}px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: height 0.2s;
`;

export const ProgressFilled = styled.div`
  background-color: #2196F3;
  height: 100%;
  width: ${props => Math.ceil(props.played * 10000) / 100}%;
  box-sizing: border-box;
  border-right: 2px solid #2196F3;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  ${props => props.played === 0 ? 'border: none' : ''};
`;

export const Time = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: #FFF;
  cursor: default;
`;

export const Controls = styled.div`
  background: #000;
  width: 100%;
  display: flex;
  align-items: center;
  height: 35px;
`;

export const Toggle = styled.img`
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

export const Volume = styled.input`
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

export const PrevButton = styled.img`
  width: 50px;
  cursor: pointer;
  color: #FFF;
  font-size: 60px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: ${props => props.visible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform .2s;
`;

export const NextButton = styled.img`
  width: 60px;
  cursor: pointer;
  color: #FFF;
  font-size: 60px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: ${props => props.visible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .2s;
`;
