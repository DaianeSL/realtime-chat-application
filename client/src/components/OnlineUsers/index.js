import React, { useState, useEffect } from 'react';

import {
  Img,
  Name,
  User,
  List,
  Item,
  Title,
  Header,
  Container,
  ContainImg,
  CloseButton,
  ScrollContainer,
} from './styles';

const OnlineUsers = ({ users }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (window && window.innerWidth <= 768) {
      setOpen(false);
    }
  }, []);

  return (
    <Container open={open}>
      <Header>
        <Title>Online Users</Title>
        <CloseButton onClick={() => setOpen(!open)} open={open}></CloseButton>
      </Header>
      <ScrollContainer>
        <List>
          {users &&
            users.map((user) => {
              return (
                <Item>
                  <User>
                    <ContainImg>
                      <Img src={process.env.REACT_APP_SERVER_URL + user.image} alt={user.name} />
                    </ContainImg>
                    <Name>{user.name}</Name>
                  </User>
                </Item>
              );
            })}
        </List>
      </ScrollContainer>
    </Container>
  );
};

export default OnlineUsers;
