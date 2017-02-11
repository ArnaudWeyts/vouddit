import React from 'react';
import styled from 'styled-components';

import icons from '../icons';

const Wrapper = styled.div`
  color: #FFF;
  display: flex;
  align-items: center;
  height: 20vh;
`;

const Current = styled.div`
  margin: 0 20px;
  width: 50%;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px
`;

const Title = styled.h2`
  white-space: nowrap;
  font-weight: 200;
  width: 80%;
  margin: 0 auto auto 0;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis
`;

const Link = styled.a`
  color: #FFF;
  display: block;
  height: 30px;
  
  & i {
    font-size: 40px;
  }
`;

const Icon = styled.img`
  width: 30px;
`;

const Author = styled.span`
  font-size: 12px;
`;

const Ups = styled.span`
  float: right;
  color: #FC754E;
`;

const Next = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const NextIcon = styled.img`
  width: 30px;
`;

const NextVideo = styled.div`
  margin: 0 20px;
  background-image: ${props => props.nextVid ? `url(${props.nextVid.data.media.oembed.thumbnail_url})` : ''};
  background-size: cover;
  background-position: center;
  height: 100px;
  width: 150px;
  cursor: pointer;
`;

const RedditControls = (props) => {
  const {currentVid} = props;
  return (
    <Wrapper>
      <Current>
        <TitleGroup>
          <Title>
            {currentVid && currentVid.media.oembed.title}
          </Title>
          <Link href={currentVid && `https://www.reddit.com${currentVid.permalink}`} target="_blank">
            <Icon src={icons.reddit} alt="reddit-icon" />
          </Link>
        </TitleGroup>
        <Author>
          {currentVid && currentVid.author}
        </Author>
        <Ups>
          {currentVid && currentVid.ups}
        </Ups>
      </Current>
      <Next>
        <NextIcon src={icons.chevron_right}/>
        <NextVideo 
          nextVid={props.nextVid}
          onClick={() => props.getPrevNextPost(true)} />
      </Next>
    </Wrapper>
  );
}

export default RedditControls;
