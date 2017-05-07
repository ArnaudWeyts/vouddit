import * as React from 'react';
import styled from 'styled-components';

import icons from './shared/icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  justify-content: space-between;
  padding: 0 20px;
`;

const Label = styled.label`
  color: #FFF;
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const SubInput = styled.input`
  width: 175px;
  height: 30px;
  padding: 1px 5px;
  margin: 0 10px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #FFF;
  font-size: 20px;
  color: #2196F3;
  appearance: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 1px solid #2196F3;
  }
`;

const Icon = styled.img`
  cursor: pointer; 
`;

const IconSettings = styled.img`
  cursor: pointer;
  ${(props: { showSettings: boolean }) => props.showSettings ? 'width: 0;' : ''}
`;

const Submit = styled.input`
  border: 0;

  &:focus {
    outline: none;
  }
`;

const Header: React.StatelessComponent<IHeaderProps> = props => {
  return (
    <Wrapper>
      <Icon src={icons.menu} alt="menu icon" />
      <Form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          const key = 'sub';
          props.changeSub(e.target[key].value);
          e.target[key].blur();
        }}
      >
        <Label htmlFor="sub">/r/</Label>
        <SubInput autoComplete="off" name="sub" placeholder="videos" />
        <Submit src={icons.search} type="image" alt="Submit" />
      </Form>
      <IconSettings
        src={icons.settings}
        alt="settings icon"
        showSettings={props.showSettings}
        onClick={props.toggleSettings}
      />
    </Wrapper>
  );
};

export default Header;
