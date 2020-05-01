import React from 'react';

import MessageBalloom from '../MessageBalloon';

import { Container, ScrollContainer } from './styles';

const Messages = ({ messages, name }) => {
  return (
    <ScrollContainer>
      <Container>
        {messages && messages.map((msg, i) => <MessageBalloom msg={msg} name={name} key={i} />)}
      </Container>
    </ScrollContainer>
  );
};

export default Messages;
