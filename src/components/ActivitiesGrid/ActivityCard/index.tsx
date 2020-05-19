import React from 'react';
import commentIcon from './comment_icon.svg';
import upvoteIcon from './upvote_icon.svg';
import styled from 'styled-components';

export interface ActivityCardProps {
  gpsDrawing: string;
  profilePicture: string;
  profileName: string;
  commentCount: number;
  upvoteCount: number;
  upvote: () => void;
}

export const UPVOTE_ALT = 'upvote icon';

const ActivityCard: React.FC<ActivityCardProps> = ({
  gpsDrawing,
  profilePicture,
  profileName,
  commentCount,
  upvoteCount,
  upvote,
}) => {
  function getRide() {
    console.log('Open the ride stats');
  }
  function getProfile() {
    console.log('Get profile information');
  }
  function writeComment() {
    console.log('write a comment here');
  }

  return (
    <TileView>
      <div onClick={getRide}>
        <GpsImage src={gpsDrawing} alt="ride image" />
      </div>
      <ButtonBar>
        <ProfileBtn onClick={getProfile}>
          <ProfileImage src={profilePicture} />
          <ProfileName>{profileName}</ProfileName>
        </ProfileBtn>
        <ButtonGroup>
          <CommentBtn onClick={writeComment}>
            <img src={commentIcon} alt="comment icon" />
            <CommentCounter>{commentCount}</CommentCounter>
          </CommentBtn>
          <UpvoteBtn onClick={upvote}>
            <img src={upvoteIcon} alt={UPVOTE_ALT} />
            <label>{upvoteCount}</label>
          </UpvoteBtn>
        </ButtonGroup>
      </ButtonBar>
    </TileView>
  );
};

const TileView = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  align-content: center;
  height: auto;
  position: relative;
`;

const GpsImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
`;

const ButtonBar = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  flex-flow: row wrap;
  align-items: center;
`;

const ProfileBtn = styled.a`
  display: flex;
  border: none;
  align-items: center;
`;

const ProfileImage = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

const ProfileName = styled.label`
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  padding-left: 5px;
`;

const ButtonGroup = styled.div`
  margin-left: auto;
`;

const CommentBtn = styled.a`
  border: none;
`;

const CommentCounter = styled.label`
  margin-left: 2px;
`;

const UpvoteBtn = styled.a`
  cursor: pointer;
  & > * {
    cursor: pointer;
  }
  padding-left: 8px;
`;

export default ActivityCard;
