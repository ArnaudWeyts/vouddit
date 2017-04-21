import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  toggleSettings,
  setDelay,
  setSort,
  SORT_OPTIONS
} from '../redux/actions/settingsActions';

import SliderInput from './shared/Slider';
import SelectInput from './shared/Select';

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

const Label = styled.label`
  color: #FFF;
  margin-bottom: 10px;
  display: block;
`;

function handleSliderChange(e, dispatch) {
  dispatch(setDelay(e.target.value * 1000));
}

function handleSelectChange(e, dispatch) {
  dispatch(setSort(e.target.value));
}

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
        <Label htmlFor="delay">Delay</Label>
        <SliderInput
          name="delay"
          value={Math.round(props.delay / 1000)}
          min={0}
          max={25}
          handleChange={(e, dispatch) => handleSliderChange(e, props.dispatch)}
        />
        <Label htmlFor="sort">Sort by</Label>
        <SelectInput
          name="sort"
          options={SORT_OPTIONS}
          sort={props.sort}
          handleChange={(e, dispatch) => handleSelectChange(e, props.dispatch)}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

Settings.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  sort: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ settings }, ownProps) => ({
  showSettings: settings.showSettings,
  delay: settings.delay,
  sort: settings.sort
});

export default connect(mapStateToProps)(Settings);
