import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  toggleSettings,
  setDelay,
  setSort,
  SORT_OPTIONS
} from '../redux/actions/settingsActions';

const Wrapper = styled.div`
  position: fixed;
  overflow-x: hidden;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #151516;
  border-radius: 2px;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  width: ${props => (props.showSettings ? '300px' : 0)};
  transition: 0.3s;
`;

const InnerWrapper = styled.div`
  padding: 20px;
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

const Select = styled.select`
  -webkit-appearance: none;
  background-color: transparent;
  padding: 2px;
  color: #FFF;
  border: none;
  font-size: 14px;
  border-radius: 0;
  border-bottom: 1px solid #2196F3;
  width: 60%;

  &:focus {
    outline: none;
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
  margin-bottom: 10px;
  display: block;
`;

const Settings = props => {
  return (
    <Wrapper showSettings={props.showSettings}>
      <InnerWrapper>
        <Top>
          <Title>Settings</Title>
          <Close onClick={() => props.dispatch(toggleSettings())}>
            ╳
          </Close>
        </Top>
        <Slider delay={props.delay}>
          <Label htmlFor="delay">Delay</Label>
          <Input
            name="delay"
            type="range"
            min="0"
            max="25"
            value={Math.round(props.delay / 1000)}
            onChange={e => props.dispatch(setDelay(e.target.value * 1000))}
          />
          <SliderValue>{Math.round(props.delay / 1000)}s</SliderValue>
        </Slider>
        <Label htmlFor="sort">Sort by</Label>
        <Select
          value={props.sort}
          name="sort"
          onChange={e => props.dispatch(setSort(e.target.value))}
        >
          {SORT_OPTIONS.map(method => (
            <option value={method} key={method}>{method}</option>
          ))}
        </Select>
      </InnerWrapper>
    </Wrapper>
  );
};

Settings.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ settings }, ownProps) => ({
  showSettings: settings.showSettings,
  delay: settings.delay,
  sort: settings.sort
});

export default connect(mapStateToProps)(Settings);
