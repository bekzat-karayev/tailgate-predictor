import React from 'react';
import axios  from 'axios';
import store from '../store/store';
import { addUsers } from '../actions/users';
import Header from './Header';
import UsersList from './UsersList';
import '../css/styles.css';

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/hello")
      .then(response => {
        console.log(response.data);
        store.dispatch(addUsers(response.data.results));
      })
  };
  render() {
    return (
      <div>
        <Header />
        <UsersList />
      </div>
    )
  }
}

export default App;
