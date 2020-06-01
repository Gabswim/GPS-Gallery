import React from 'react';
import { Reset } from 'styled-reset/lib';
import { createGlobalStyle } from 'styled-components';

import NavBar from './components/NavBar';
import drawing from './assets/gps_art_bike.jpg';
import profilePic from './assets/profile_image.png';
import { ActivitiesGrid, StravaAuthButton } from './components';
import { StravaParams } from './components/StravaAuthButton';

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
/* eslint-disable @typescript-eslint/camelcase */
const params: StravaParams = {
  approval_prompt: 'auto',
  client_id: parseInt(process.env.REACT_APP_STRAVA_APP_CLIENT_ID as string),
  permissions: [],
  redirect_uri: '',
  response_type: '',
};
/* eslint-enable @typescript-eslint/camelcase */
const App: React.FC = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <NavBar />
      <StravaAuthButton params={params} />
      {/*<ActivitiesGrid activities={FAKE_DATA} />*/}
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
  }
`;

export default App;
