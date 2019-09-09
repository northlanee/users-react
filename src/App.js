import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {

      users: [],
      searchField: ''

    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ users: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    return (
      <div className="app">
        <h1 className="title">Users</h1>
        <SearchBox
          placeholder="Search"
          handleChange={this.handleChange}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
