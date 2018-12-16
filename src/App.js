import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import handleRequest from './api';

class App extends Component {
  state = {
    loading: true,
    users: null
  };

  componentDidMount() {
    handleRequest().then(res => {
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
      <div>
        <Header message="Hello React Env" />
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <h2>Users</h2>
            <p>
              from{' '}
              <a
                href="https://reqres.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://reqres.in
              </a>
            </p>
            <ul>
              <Users />
            </ul>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
