import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Badge from 'material-ui/Badge';

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

function handleSelectChange(value: string, dispatch: IDispatch<any>) {
  dispatch(setSortAndFetch(value));
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
        <Badge
          style={{ float: 'right', marginTop: '20px' }}
          primary={true}
          badgeContent={props.delay / 1000 + 's'}
        />
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
          handleChange={(value: string, dispatch: IDispatch<any>) =>
            handleSelectChange(value, props.dispatch)}
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
