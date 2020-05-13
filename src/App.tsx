import React, { Component } from 'react';
import Tile from './Tile';
import styled from 'styled-components';

import drawing from './assets/gps_art_bike.jpg';
import profilePic from './assets/profile_image.png';
import upvoteIcon from './assets/upvote_icon.svg';
import commentIcon from './assets/comment_icon.svg';

console.log(drawing);

const App = () => {
  return (
    <Body>
      <Tile></Tile>
      <Tile></Tile>
      <Tile></Tile>
    </Body>
  );
};
const Body = styled.div`
  flex: 1;
`;

export default App;
