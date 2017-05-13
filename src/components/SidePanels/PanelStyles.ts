import styled from 'styled-components';

interface WrapperProps {
  show: boolean;
  right?: boolean;
}
export const Wrapper = styled.div`
  position: fixed;
  overflow-x: hidden;
  height: 100%;
  top: 0;
  background-color: #151516;
  border-radius: 2px;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: width 0.3s;
  width: ${(props: WrapperProps) => props.show ? '300px' : 0};
  ${(props: WrapperProps) => props.right ? 'right: 0' : ''};
`;

export const InnerWrapper = styled.div`
  padding: 20px;
  transition: transform 0.3s;
  ${(props: WrapperProps) => {
    if (!props.show) {
      if (props.right) {
        return 'transform: translateX(300px)';
      } else {
        return 'transform: translateX(-300px)';
      }
    } else {
      return 'transform: translateX(0)';
    }
  }};
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  color: #FFF;
  margin: 0;
  display: inline-block;
  flex-grow: 1;
`;

export const PanelItem = styled.div`
  margin-top: 15px;
  color: #FFF;
`;

export const Close = styled.span`
  cursor: pointer;
  float: right;
  color: #FFF;
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #2196F3;
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #2196F3;
  border-radius: 2px;
  font-size: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);

  &:focus {
    outline: none;
    border: 1px solid #fff;
  }

  span {
    vertical-align: middle;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  float: left;
`;