import React, { Component } from 'react';
import Header from './Header/Header';
import './App.css';
import UpperBody from './UpperBody/UpperBody';
import OtherBoddy from './OtherBody/OtherBody';
import Footer from './Footer/Footer';

class App extends Component {
  render () { 
  return (
    <div className="App">
      <Header/>
      <UpperBody/>
      <OtherBoddy/>
      <Footer/>
    </div>
  );
};
}

export default App;
