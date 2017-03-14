import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {toggleSettings, setDelay} from '../redux/actions/settingsActions';

const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #151516;
  padding: 20px;
  border-radius: 2px;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  ${props => !props.showSettings && 'transform: translateX(400px)'};
  transition: transform 0.3s ease-in-out;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  color: #FFF;
  margin: 0;
  display: inline-block;
  flex-grow: 1;
`;

const Close = styled.span`
  cursor: pointer;
  float: right;
  color: #FFF;
`;

const Slider = styled.div`
  display: inline-block;
  position: relative;
  margin: 20px 0;
`;

const Input = styled.input`
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -0.52em;
    height: 1.3em;
    width: 1.3em;
    border-radius: 1em;
    background: #2196F3;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  margin-top: -0.8em;
  cursor: pointer;
  background-color: #FFF;
  }

  &:focus::-webkit-slider-runnable-track {
    background-color: #FFF;
  }
`;

const SliderValue = styled.span`
  background: #2196F3;
  color: #FFF;
  margin-left: 20px;
  padding: 5px;
  border-radius: 2px;
`;

const Label = styled.label`
  color: #FFF;
  margin-right: 20px;
`;

const Settings = (props) => {
  return (
    <Wrapper showSettings={props.showSettings}>
      <Top>
        <Title>Settings</Title>
        <Close
          onClick={() => props.dispatch(toggleSettings())}>
          ╳
        </Close>
      </Top>
      <Slider delay={props.delay}>
        <Label htmlFor="delay">Delay</Label>
        <Input 
          name="delay"
          type="range"
          min="0" max="25"
          value={Math.round(props.delay/1000)}
          onChange={(e) => props.dispatch(setDelay(e.target.value*1000))}/>
        <SliderValue>{Math.round(props.delay/1000)}s</SliderValue>
      </Slider>
    </Wrapper>
  );
}

Settings.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({settings}, ownProps) => ({
  showSettings: settings.showSettings,
  delay: settings.delay
});

export default connect(mapStateToProps)(Settings);