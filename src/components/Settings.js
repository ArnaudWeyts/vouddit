import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {toggleSettings} from '../redux/actions/settingsActions';

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
    </Wrapper>
  );
}

Settings.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({settings}, ownProps) => ({
  showSettings: settings.showSettings
});

export default connect(mapStateToProps)(Settings);