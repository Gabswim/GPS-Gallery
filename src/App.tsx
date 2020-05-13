import React, { useState } from 'react';
import Tile from './components/Tile';
import TopBar from './components/TopBar';
import styled from 'styled-components';

import drawing from './assets/gps_art_bike.jpg';
import drawingTrex from './assets/gps_art_trex.jpg';
import profilePic from './assets/profile_image.png';
import profilePic2 from './assets/profile_image2.jpg';

const App = () => {
  const [upvoteCount, setUpvoteCount] = useState(102);
  const [upvoteCount2, setUpvoteCount2] = useState(99);

  const doUpvote1 = () => setUpvoteCount((prevState) => prevState + 1);
  const doUpvote2 = () => setUpvoteCount2((prevState) => prevState + 1);

  return (
    <Body>
      <TopBar />
      <Tile
        gpsDrawing={drawing}
        profilePicture={profilePic}
        profileName={'Gabriel Legault'}
        commentCount={9}
        upvoteCount={upvoteCount}
        setUpvoteCount={doUpvote1}
      />
      <Tile
        gpsDrawing={drawingTrex}
        profilePicture={profilePic2}
        profileName={'Charles Demers-Potvin'}
        commentCount={6}
        upvoteCount={upvoteCount2}
        setUpvoteCount={doUpvote2}
      />
      <Tile
        gpsDrawing={drawingTrex}
        profilePicture={profilePic2}
        profileName={'Charles Demers-Potvin'}
        commentCount={6}
        upvoteCount={upvoteCount2}
        setUpvoteCount={doUpvote2}
      />
      <Tile
        gpsDrawing={drawing}
        profilePicture={profilePic}
        profileName={'Gabriel Legault'}
        commentCount={9}
        upvoteCount={upvoteCount}
        setUpvoteCount={doUpvote1}
      />
      <Tile
        gpsDrawing={drawing}
        profilePicture={profilePic}
        profileName={'Gabriel Legault'}
        commentCount={9}
        upvoteCount={upvoteCount}
        setUpvoteCount={doUpvote1}
      />
      <Tile
        gpsDrawing={drawing}
        profilePicture={profilePic}
        profileName={'Gabriel Legault'}
        commentCount={9}
        upvoteCount={upvoteCount}
        setUpvoteCount={doUpvote1}
      />
    </Body>
  );
};
const Body = styled.div`
  background-color: #e5e5e5;
  width: 100%;
`;

export default App;
