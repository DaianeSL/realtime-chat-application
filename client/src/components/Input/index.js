import React from 'react';
import { Container, Form, InputText, Button } from './styles';

const Input = ({ message, setMessage, onSubmit }) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <InputText
          type="text"
          placeholder="type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit">Send!</Button>
      </Form>
    </Container>
  );
};

export default Input;
