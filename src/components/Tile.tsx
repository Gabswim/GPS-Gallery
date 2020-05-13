import React from 'react';
import commentIcon from '../assets/comment_icon.svg';
import upvoteIcon from '../assets/upvote_icon.svg';
import styled from 'styled-components';

type TileProps = {
  gpsDrawing: string;
  profilePicture: string;
  profileName: string;
  commentCount: number;
  upvoteCount: number;
  setUpvoteCount: () => void;
};

const Tile = ({ gpsDrawing, profilePicture, profileName, commentCount, upvoteCount, setUpvoteCount }: TileProps) => {
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
      <ImageBtn onClick={getRide}>
        <GpsImage src={gpsDrawing}></GpsImage>
      </ImageBtn>
      <ButtonBar>
        <ProfileBtn onClick={getProfile}>
          <ProfileImage src={profilePicture}></ProfileImage>
          <ProfileName>{profileName}</ProfileName>
        </ProfileBtn>
        <ButtonGroup>
          <CommentBtn onClick={writeComment}>
            <CommentIcon src={commentIcon}></CommentIcon>
            <CommentCounter>{commentCount}</CommentCounter>
          </CommentBtn>
          <UpvoteBtn onClick={setUpvoteCount}>
            <UpvoteIcon src={upvoteIcon}></UpvoteIcon>
            <UpvoteCounter>{upvoteCount}</UpvoteCounter>
          </UpvoteBtn>
        </ButtonGroup>
      </ButtonBar>
    </TileView>
  );
};

const TileView = styled.div`
  display: inline-grid;
  width: 370px;
  height: auto;
  flex-flow: column wrap;
  background-color: #e5e5e5;
  margin-bottom: 20px;
`;

const ImageBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #e5e5e5;
`;

const GpsImage = styled.img`
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  border: 1px solid black;
`;

const ButtonBar = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  flex-flow: row wrap;
  align-items: center;
`;

const ProfileBtn = styled.button`
  display: flex;
  border: none;
  height: 100%;
  background-color: #e5e5e5;
  margin-left: 10px;
  align-items: center;
`;

const ProfileImage = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

const ProfileName = styled.label`
  font-size: 12px;
  font-family: Verdana;
  font-weight: 600;
  padding-left: 5px;
`;

const ButtonGroup = styled.div`
  height: 100%;
  float: right;
  margin-right: 10px;
`;

const CommentBtn = styled.button`
  height: 100%;
  border: none;
  background-color: #e5e5e5;
`;

const CommentIcon = styled.img``;

const CommentCounter = styled.label`
  margin-left: 2px;
`;

const UpvoteBtn = styled.button`
  height: 100%;
  border: none;
  background-color: #e5e5e5;
`;

const UpvoteIcon = styled.img``;

const UpvoteCounter = styled.label``;

export default Tile;
