import React from 'react';

import { Container, RoomName, Close, H3 } from './styles';

const InfoBar = ({ room, name }) => {
  return (
    <Container>
      <RoomName>
        <H3>{room}</H3>
      </RoomName>
      <Close to="/" />
    </Container>
  );
};

export default InfoBar;
