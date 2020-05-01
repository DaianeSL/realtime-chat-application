import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import queryString from 'query-string';

import { H1, Container, Wrap, Alert, Header, Form, Input, InputWrapper, Button } from './styles';

import { store } from '../../context';

const Join = (props) => {
  const query = queryString.parse(props.location.search);
  const globalState = useContext(store);
  const {
    dispatch,
    state: { socket },
  } = globalState;
  const history = useHistory();

  const [alert, setAlert] = useState(false);
  const [user, setUser] = useState({
    name: '',
    room: '',
  });

  useEffect(() => {
    if (!socket || socket.disconnected) {
      dispatch({ type: 'SOCKET_INSTANCE', payload: io(process.env.REACT_APP_SERVER_URL) });
    }
  }, []);

  const changeState = (str, key) => {
    setUser((user) => ({
      ...user,
      [key]: str,
    }));
  };

  const validateString = (str) => {
    return /[^\w\s]/.test(str);
  };

  if (Object.keys(query).length > 0) {
    Object.keys(query).forEach((item) => {
      if (user[item] == '') {
        changeState(query[item], item);
      }
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const isInvalidName = user.name === '' || validateString(user.name);
    const isInvalidRoom = user.room === '' || validateString(user.room);

    if (isInvalidName || isInvalidRoom) return setAlert(true);

    dispatch({ type: 'ADD_USER', payload: user });
    history.push('/chat');
  };

  return (
    <Container>
      <Wrap>
        <Header>
          <H1>
            <strong>Get in loser,</strong>
            <br />
            we are going to chating!
          </H1>
          {alert && (
            <Alert>
              Plase, don't use any special characters <br /> or leave it blank.
            </Alert>
          )}
        </Header>
        <Form onSubmit={onSubmit}>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Name"
              disabled={query.name ? true : false}
              value={query.name ? query.name : user.name}
              onChange={(e) => changeState(e.target.value, 'name')}
            />
            <Input
              type="text"
              placeholder="Room"
              disabled={query.room ? true : false}
              value={query.room ? query.room : user.room}
              onChange={(e) => changeState(e.target.value, 'room')}
            />
          </InputWrapper>
          <Button type="submit">Join</Button>
        </Form>
      </Wrap>
    </Container>
  );
};

export default Join;
