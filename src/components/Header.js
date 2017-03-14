import React, {Component} from 'react';
import styled from 'styled-components';

import icons from '../icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  justify-content: space-between;
  padding: 0 20px;
`;

const Label = styled.label`
  color: #FFF;
  margin-right: 10px;
  font-size: 20px;
`;

const SubInput = styled.input`
  margin-right: 20px;
  width: 175px;
  height: 30px;
  padding: 1px 5px;
  background-color: transparent;
  border: 1px solid #FFF;
  border-radius: 2px;
  font-size: 20px;
  color: #FFF;
  appearance: none;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  cursor: pointer;
`;

class Header extends Component {
  
  render() {
    return (
      <Wrapper>
        <Icon 
          src={icons.menu}
          alt="menu icon"
        />
        <form 
          autoComplete="off"
          onSubmit={e => {
            e.preventDefault();
            this.props.changeSub(e.target['sub'].value);
            e.target['sub'].blur();
          }}>
          <Label for="sub">/r/</Label>
          <SubInput 
            autocomplete="off"
            name="sub"
            placeholder="videos"/>
        </form>
        <Icon 
          src={icons.settings}
          alt="settings icon"
          onClick={this.props.toggleSettings} />
      </Wrapper>
    );
  }
}

export default Header;
