import React from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.png';

const Main = () => (
  <Container>
    <img src={logo} alt="GitHub Comparer" />

    <Form>
      <input type="text" placeholder="User/Repo" />
      <button type="submit">Ok</button>
    </Form>
  </Container>
);

export default Main;
