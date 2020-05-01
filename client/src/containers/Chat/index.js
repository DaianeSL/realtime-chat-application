import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import InfoBar from '../../components/InfoBar';
import Input from '../../components/Input';
import Messages from '../../components/Messages';
import OnlineUsers from '../../components/OnlineUsers';
import { store } from '../../context';
import catImage from '../../images/admin.jpg';

import { Container, Wrap, ChatContainer, ErrorContainer, Error, Img, BackLink } from './styles';

const Chat = ({ location }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const globalState = useContext(store);
  const {
    dispatch,
    state: {
      socket,
      user: { name, room },
    },
  } = globalState;

  useEffect(() => {
    socket &&
      socket.emit('join', { name, room }, (error) => {
        error && setError(true);
      });

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [globalState]);

  useEffect(() => {
    socket &&
      socket.on('msg', (msg) => {
        setMessages((messages) => [...messages, msg]);
      });

    socket &&
      socket.on('roomData', (users) => {
        setUsers(users);
      });
  }, []);

  if (!socket) {
    return <Redirect to="/" />;
  }

  const sendMessage = (message) => {
    if (message) {
      socket.emit('sendMsg', message, () => setMessage(''));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
  };

  return (
    <Container>
      <Wrap>
        {error ? (
          <ErrorContainer>
            <Error>Wait! Looks like someone already has that username!</Error>
            <Img src={catImage} />
            <BackLink to="/">Try another username</BackLink>
          </ErrorContainer>
        ) : (
          <>
            <ChatContainer>
              <InfoBar name={name} room={room} />
              <Messages messages={messages} name={name} />
              <Input message={message} onSubmit={onSubmit} setMessage={setMessage} />
            </ChatContainer>
            <OnlineUsers users={users.users} />
          </>
        )}
      </Wrap>
    </Container>
  );
};

export default Chat;
