import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
  user-select: none;
  z-index: 10;
`;

export const Dimmed = styled.div`
  height: 100%;
  position: relative;
  ${(props: { visible: boolean }) => (props.visible ? 'background: rgba(0, 0, 0, 0.7)' : 'display: none')};
`;

export const ControlBar = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: transform 0.2s;
  ${(props) => props.hideCompletely ? 'display: none' : ''} 
  transform: ${(props: { visible: boolean, hideCompletely: boolean }) => props.visible ? 'translateY(0)' : 'translateY(100%) translateY(-5px)'};
`;

export const Progress = styled.div`
  cursor: ew-resize;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: height 0.2s;
  height: ${(props: { extend: boolean }) => (props.extend ? '15' : '5')}px;
`;

export const ProgressFilled = styled.div`
  background-color: #2196F3;
  height: 100%;
  box-sizing: border-box;
  border-right: 2px solid #2196F3;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  width: ${(props: { played: number }) => Math.ceil(props.played * 10000) / 100}%;
  ${props => (props.played === 0 ? 'border: none' : '')};
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
  width: 60px;
  cursor: pointer;
  color: #FFF;
  font-size: 60px;
  position: absolute;
  top: 50%;
  left: 0;
  transition: transform .2s;
  transform: ${(props: { visible: boolean }) => (props.visible ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const NextButton = styled.img`
  width: 60px;
  cursor: pointer;
  color: #FFF;
  font-size: 60px;
  position: absolute;
  top: 50%;
  right: 0;
  transition: transform .2s;
  transform: ${(props: { visible: boolean }) => (props.visible ? 'translateX(0)' : 'translateX(100%)')};
`;

const countdown = keyframes`
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 471px;
  }
`;

export const Timer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 154px;
  height: 220px;
  margin-left: -77px;
  margin-top: -77px;
  text-align: center;

  .svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 154px;
    height: 154px;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }

  .button {
    width: 50px;
    left: 50%;
    bottom: 0;
    position: absolute;
    margin-left: -35px;;
  }
`;

export const Circle = styled.circle`
  stroke-dasharray: 471px;
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-linecap: round;
  stroke-width: 2px;
  stroke: white;
  fill: none;
  animation: ${countdown} ${(props: { delay: number }) => `${props.delay}ms`} linear infinite forwards;
`;