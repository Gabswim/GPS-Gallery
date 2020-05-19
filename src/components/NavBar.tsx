import React from 'react';
import styled from 'styled-components';

import iconAdd from '../assets/add_icon.svg';

const NavBar = () => {
  function AddTile() {
    console.log('Add an activity');
  }

  return (
    <Container>
      <Title>GPS Gallery</Title>
      <NewTileButton onClick={AddTile}>
        <IconAdd src={iconAdd} />
      </NewTileButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #fff;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: monospace;
`;

const NewTileButton = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: none;
  background-color: #e5e5e5;
`;

const IconAdd = styled.img`
  height: 100%;
  width: 100%;
`;

export default NavBar;
