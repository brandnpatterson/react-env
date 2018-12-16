import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

import fetchUsers from './api';

class App extends Component {
  state = {
    loading: true,
    users: null
  };

  componentDidMount() {
    fetchUsers().then(res => {
      this.setState({
        loading: false,
        users: res.data
      });
    });
  }

  render() {
    const { loading } = this.state;

    const Users = () => {
      const { users } = this.state;

      return users.map(user => {
        return <li key={user.id}>{user.first_name}</li>;
      });
    };

    return (
      <StyledApp>
        <Header message="Hello React Env" />
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h2>Users List</h2>
            <ul>
              <Users />
            </ul>
          </div>
        )}
        <Footer />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  border: 1px dashed black;
`;

export default App;
