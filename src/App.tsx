import React from 'react';
import { Reset } from 'styled-reset/lib';
import styled from 'styled-components';
import { ActivityCardProps } from './components/ActivityCard';

import TopBar from './components/TopBar';
import drawing from './assets/gps_art_bike.jpg';
import profilePic from './assets/profile_image.png';
import ActivitiesGrid from './components/ActivitiesGrid';

const FAKE_DATA: ActivityCardProps[] = [
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

const App = () => {
  return (
    <>
      <Reset />
      <Body>
        <TopBar />
        <ActivitiesGrid activities={FAKE_DATA} />
      </Body>
    </>
  );
};
const Body = styled.div`
  background-color: #fafafa;
  width: 100%;
`;

export default App;
