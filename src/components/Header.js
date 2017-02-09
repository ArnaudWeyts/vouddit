import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  display: inline-block;
  margin: 20px 20px;
  color: #FFF;
`;

const SubSelect = styled.div`
  color: #FFF;

  & label {
    margin-right: 20px;
  }
`;

class Header extends Component {
  renderSubs(currentSub) {
    const subs = [
      'videos',
      'youtubehaiku',
      'listentothis'
    ];

    return subs.map(sub => {
      return `<option value=${sub} ${currentSub === sub && 'selected'}>${sub}</option>`;
    });
  }
  
  render() {
    return (
      <Wrapper>
        <Title>V</Title>
        <SubSelect>
          <label htmlFor="subreddit">Select a subreddit:</label>
          {// eslint-disable-next-line
          }<select 
            name="subreddit"
            id="subreddit"
            dangerouslySetInnerHTML={{__html: this.renderSubs(this.props.currentSub)}}
            onChange={(e) => this.props.changeSub(e.target.value)}>
          </select>
        </SubSelect>
      </Wrapper>
    );
  }
}

export default Header;
