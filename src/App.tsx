import React from 'react';
import { Reset } from 'styled-reset/lib';
import { createGlobalStyle } from 'styled-components';

import NavBar from './components/NavBar';
import drawing from './assets/gps_art_bike.jpg';
import profilePic from './assets/profile_image.png';
import { ActivitiesGrid } from './components';

const FAKE_DATA = [
  {
    commentCount: 6,
    gpsDrawing: drawing,
    profileName: 'Gabriel Legault 1',
    profilePicture: profilePic,
    upvote: () => console.log('upvote'),
    upvoteCount: 10,
  },
  {
    commentCount: 6,
    gpsDrawing: drawing,
    profileName: 'Gabriel Legault 2',
    profilePicture: profilePic,
    upvote: () => console.log('upvote'),
    upvoteCount: 10,
  },
  {
    commentCount: 6,
    gpsDrawing: drawing,
    profileName: 'Gabriel Legault 3',
    profilePicture: profilePic,
    upvote: () => console.log('upvote'),
    upvoteCount: 10,
  },
  {
    commentCount: 6,
    gpsDrawing: drawing,
    profileName: 'Gabriel Legault 4',
    profilePicture: profilePic,
    upvote: () => console.log('upvote'),
    upvoteCount: 10,
  },
];

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <NavBar />
      <ActivitiesGrid activities={FAKE_DATA} />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
  }
`;

export default App;
