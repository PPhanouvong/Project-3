import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';
import MyContainer from './components/Container';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <MyNavbar />
        </div>

        <div>
          <MyContainer />
        </div>

        <div>
          <MyFooter />
        </div>
      </div>
    );
  }
}

export default App;