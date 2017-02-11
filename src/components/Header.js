import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
`;

const Title = styled.h1`
  display: inline-block;
  margin: 20px 20px;
  color: #FFF;
  flex-grow: 1;
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

class Header extends Component {
  
  render() {
    return (
      <Wrapper>
        <Title>V</Title>
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
      </Wrapper>
    );
  }
}

export default Header;
