import React, { Component } from 'react';
import './App.css';
import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';
import MyContainer from './components/Container';
import TypeWriter from './components/TypeWriter';

class App extends Component {
  render() {
    return (
      <div>

        <header>
          <MyNavbar />

          <TypeWriter />
        </header>

        <main>
          <MyContainer />
        </main>
        
        <MyFooter />

      </div>
    );
  }
}

export default App;