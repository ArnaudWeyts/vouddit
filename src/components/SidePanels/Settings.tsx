import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  toggleSettings,
  setDelay,
  setSortAndFetch,
  SORT_OPTIONS
} from '../../redux/actions/settingsActions';

import SliderInput from '../shared/Slider';
import SelectInput from '../shared/Select';

import { Wrapper, InnerWrapper, Title, Top, Close } from './PanelStyles';

const Label = styled.label`
  color: #FFF;
  margin: 20px 0 10px 0;
  display: block;
`;

function handleSliderChange(newValue: number, dispatch: IDispatch<any>) {
  dispatch(setDelay(newValue * 1000));
}

function handleSelectChange(e: Event, dispatch: IDispatch<any>) {
  dispatch(setSortAndFetch((e.target as any).value));
}

const Settings: React.StatelessComponent<ISettingsProps> = props => {
  return (
    <Wrapper show={props.showSettings} right={true}>
      <InnerWrapper show={props.showSettings} right={true}>
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
          handleChange={(newValue: number, dispatch: IDispatch<any>) =>
            handleSliderChange(newValue, props.dispatch)}
        />
        <Label htmlFor="sort">Sort by</Label>
        <SelectInput
          name="sort"
          options={SORT_OPTIONS}
          selected={props.sort}
          handleChange={(e: Event, dispatch: IDispatch<any>) =>
            handleSelectChange(e, props.dispatch)}
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
