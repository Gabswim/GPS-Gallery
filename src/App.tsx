import React, { Component } from 'react';
import Tile from './Tile';
import styled from 'styled-components';

import drawing from './assets/gps_art_bike.jpg';
import drawingTrex from './assets/gps_art_trex.jpg';
import profilePic from './assets/profile_image.png';
import profilePic2 from './assets/profile_image2.jpg';

const App = () => {
  return (
    <Body>
      <Tile
        gpsDrawing={drawing}
        profilePicture={profilePic}
        profileName={'Gabriel Legault'}
        commentCount={9}
        upvoteCount={102}
      />
      <Tile
        gpsDrawing={drawingTrex}
        profilePicture={profilePic2}
        profileName={'Charles Demers-Potvin'}
        commentCount={6}
        upvoteCount={99}
      />
    </Body>
  );
};
const Body = styled.div`
  flex: 1;
`;

export default App;
