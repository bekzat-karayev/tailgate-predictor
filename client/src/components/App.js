import React from 'react';
import axios  from 'axios';
import store from '../store/store';
import { addUsers } from '../actions/users';
import Header from './Header';
import DbButton from './DbButton';
import '../css/styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DbButton />
      </div>
    )
  }
}

export default App;
