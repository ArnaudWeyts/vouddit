import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  margin-top: -150px; /* Negative half of height. */
  margin-left: -150px; /* Negative half of width. */
  background-color: #151516;
  padding: 20px;
  border-radius: 2px;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const Title = styled.h2`
  color: #FFF;
  margin: 0;
`;

const SettingsModal = (props) => {
  // don't render anything if not open
  if (!props.showSettings) return null;

  return (
    <Wrapper>
      <Title>Settings</Title>
    </Wrapper>
  );
}

SettingsModal.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({settings}, ownProps) => ({
  showSettings: settings.showSettings
});

export default connect(mapStateToProps)(SettingsModal);