import React, { Component } from 'react';
import moment from 'moment';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositoryError: false,
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositories: [...this.state.repositories, repository],
        repositoryInput: '',
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Comparer" />

        <Form isErr={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="User/Repo"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
