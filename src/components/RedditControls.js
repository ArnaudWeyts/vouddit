import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #FFF;
  display: flex;
  align-items: center;
  height: 20vh;
`;

const NextVideo = styled.div`
  margin: 0 20px;
  background-image: ${props => props.nextVideo ? `url(${props.nextVideo.data.media.oembed.thumbnail_url})` : ''};
  background-size: cover;
  background-position: center;
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