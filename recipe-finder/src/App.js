import React , { Component } from 'react';
import beef from './beef';
import category from './categories';
import NavbarComponent from './components/NavbarComponent';
import Header from './components/Header';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: category,
      beef: beef
    }
  }
  
  render() {
  return (
    <div className="App">
      <NavbarComponent categories={this.state.categories} />
      <Header beef={this.state.beef} />
    </div>
  );
  }
}

export default App;
