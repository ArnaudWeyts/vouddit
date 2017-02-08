import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px;
  color: #FFF;
`;

const NextVideo = styled.div`
  background-image: ${props => props.nextVideo ? `url(${props.nextVideo.data.thumbnail})` : ''};
  height: 100px;
  width: 150px;
`;

const RedditControls = (props) => {
  return (
    <Wrapper>
      <NextVideo nextVideo={props.nextVideo} />
    </Wrapper>
  );
}

export default RedditControls;