import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import gpsDrawing from './testData/gps_art_trex.jpg';
import profilePicture from './testData/gps_art_trex.jpg';

import ActivityCard, { UPVOTE_ALT } from './';

describe('ActivityCard', () => {
  const PROFILE_NAME = 'Bob';
  const COMMENT_COUNT = 10;
  const UPVOTE_COUNT = 100;

  let upvote: () => void;
  beforeEach(() => {
    upvote = jest.fn();
  });
  test('given an activityCard when click should be called once', () => {
    const { getByAltText } = render(
      <ActivityCard
        gpsDrawing={gpsDrawing}
        profilePicture={profilePicture}
        profileName={PROFILE_NAME}
        commentCount={COMMENT_COUNT}
        upvoteCount={UPVOTE_COUNT}
        upvote={upvote}
      />,
    );
    const upvoteButton = getByAltText(UPVOTE_ALT);

    fireEvent.click(upvoteButton);
    expect(upvote).toBeCalledTimes(1);
  });
});
