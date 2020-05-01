import React from 'react';
import Emoji from 'react-emoji-render';

import { Container, ImageWrapper, Img, TextWrapper, Text, Name } from './styles';

const MessageBalloon = ({ msg, name }) => {
  const isMe = msg.slug === name.trim().toLowerCase();

  return (
    <Container isAuthor={isMe}>
      <ImageWrapper isAdmin={msg.user === 'admin'}>
        <Img src={process.env.REACT_APP_SERVER_URL + msg.image} alt={msg.user} />
      </ImageWrapper>
      <TextWrapper isAuthor={isMe}>
        <Text>
          <Emoji text={msg.text} />
        </Text>
        <Name>{isMe ? 'Me' : msg.user}</Name>
      </TextWrapper>
    </Container>
  );
};

export default MessageBalloon;
