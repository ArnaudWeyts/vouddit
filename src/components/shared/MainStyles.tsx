import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 20px;
  background: #212121;
`;

export const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const CardItem = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  width: 175px;
  height: 30px;
  padding: 1px 0px;
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