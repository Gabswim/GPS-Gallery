import React from 'react';
import ActivityCard, { ActivityCardProps } from './ActivityCard';
import styled from 'styled-components';

export interface ActivitiesGridProps {
  activities: ActivityCardProps[];
}

const ActivitiesGrid: React.FC<ActivitiesGridProps> = ({ activities }) => {
  return (
    <Grid>
      {activities.map((activity, i) => (
        <ActivityCard
          key={i}
          gpsDrawing={activity.gpsDrawing}
          profilePicture={activity.profilePicture}
          profileName={activity.profileName}
          commentCount={activity.commentCount}
          upvoteCount={activity.upvoteCount}
          upvote={activity.upvote}
        />
      ))}
    </Grid>
  );
};

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px;

  @media (min-width: 320px) {
    padding: 0 5px 0 5px;
    grid-gap: 5px;
  }
  @media (min-width: 375px) {
    padding: 0 10px 0 10px;
    grid-gap: 10px;
  }
  @media (min-width: 750px) {
    padding: 0 20px 0 20px;
    grid-gap: 20px;
  }
`;

export default ActivitiesGrid;
