import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  toggleSettings,
  setDelay,
  setSortAndFetch,
  SORT_OPTIONS
} from '../redux/actions/settingsActions';

import SliderInput from './shared/Slider';
import SelectInput from './shared/Select';

/// <reference path="./interfaces.d.ts"/>

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
  width: ${(props: { showSettings: boolean }) => (props.showSettings ? '300px' : 0)};
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
  margin: 20px 0 10px 0;
  display: block;
`;

function handleSliderChange(e: Event, dispatch: IDispatch<any>) {
  dispatch(setDelay((e.target as any).value * 1000));
}

function handleSelectChange(e: Event, dispatch: IDispatch<any>) {
  dispatch(setSortAndFetch((e.target as any).value));
}

const Settings: React.StatelessComponent<ISettingsProps> = props => {
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
          handleChange={(e: Event, dispatch: IDispatch<any>) => handleSliderChange(e, props.dispatch)}
        />
        <Label htmlFor="sort">Sort by</Label>
        <SelectInput
          name="sort"
          options={SORT_OPTIONS}
          selected={props.sort}
          handleChange={(e: Event, dispatch: IDispatch<any>) => handleSelectChange(e, props.dispatch)}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

const mapStateToProps = ({ settings }: { settings: ISettings }) => ({
  showSettings: settings.showSettings,
  delay: settings.delay,
  sort: settings.sort
});

export default connect(mapStateToProps)(Settings);