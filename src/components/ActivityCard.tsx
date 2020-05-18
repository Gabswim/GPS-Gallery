import React from 'react';
import commentIcon from '../assets/comment_icon.svg';
import upvoteIcon from '../assets/upvote_icon.svg';
import styled from 'styled-components';

export interface ActivityCardProps {
  gpsDrawing: string;
  profilePicture: string;
  profileName: string;
  commentCount: number;
  upvoteCount: number;
  upvote: () => void;
}

const ActivityCard = ({
  gpsDrawing,
  profilePicture,
  profileName,
  commentCount,
  upvoteCount,
  upvote,
}: ActivityCardProps) => {
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
      <GpsImage src={gpsDrawing} alt="ride image" />
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
            <img src={upvoteIcon} alt="upvote icon" />
            <UpvoteCounter>{upvoteCount}</UpvoteCounter>
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

const ImageBtn = styled.a`
  border: none;
  line-height: 0;
  padding: 0 0 0 0;
`;

const GpsImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 1px solid black;
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
  float: right;
  margin-right: 10px;
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
`;

const UpvoteCounter = styled.label``;

export default ActivityCard;
