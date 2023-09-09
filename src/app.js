import React from 'react';
import ReactDOM from 'react-dom';
import axios  from 'axios';
import store from './store/store';
import { addUsers } from './actions/users';
import Header from './components/Header';
import UsersList from './components/UsersList';
import { Provider } from 'react-redux';
import './css/styles.css';

const config = require('../env/config.js');
const ENV = process.env.NODE_ENV;
const usersPath = config[ENV].server + "/users";

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:5000/users')
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

const Page = () => (
  <Provider store={store}>
  <App />
 </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);