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
  width: 75%;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px
`;

const Title = styled.h2`
  white-space: nowrap;
  font-weight: 200;
  margin: 0 auto auto 0;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
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

const IconSmall = styled.img`
  margin-right: 5px;
  width: 20px;
`;

const Author = styled.span`
  font-size: 12px;
  display: flex;
  align-items: center;
  float: left;
`;

const Ups = styled.span`
  float: right;
  color: #FC754E;
  display: flex;
  align-items: center;
`;

const Next = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const NextVideo = styled.div`
  margin: 0 20px;
  background-image: ${props => props.nextVid ? `url(${props.nextVid.data.media.oembed.thumbnail_url})` : ''};
  background-size: cover;
  background-position: center;
  height: 100px;
  width: 200px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const RedditControls = (props) => {
  const {currentVid, togglePlayer} = props;
  return (
    <Wrapper>
      <Current>
        <TitleGroup>
          <Title title={currentVid && currentVid.title}>
            {currentVid && currentVid.title}
          </Title>
          <Link 
            href={currentVid && `https://www.reddit.com${currentVid.permalink}`}
            target="_blank"
            onClick={togglePlayer}>
            <Icon src={icons.reddit} alt="reddit-icon" />
          </Link>
        </TitleGroup>
        <Author>
          <IconSmall src={icons.person} alt="author icon" />
          {currentVid && currentVid.author}
        </Author>
        <Ups>
          <IconSmall src={icons.thumb_up} alt="upvoted icon" />
          {currentVid && currentVid.ups}
        </Ups>
      </Current>
      <Next>
        <Icon src={icons.chevron_right} alt="chevron right icon" />
        <NextVideo
          nextVid={props.nextVid}
          onClick={() => props.getPrevNextPost(true)} />
      </Next>
    </Wrapper>
  );
}

export default RedditControls;
