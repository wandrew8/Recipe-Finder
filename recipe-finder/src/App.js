import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import beef from './beef';
import category from './categories';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './components/Homepage';
import SavedPage from './components/SavedPage';
import CategoryPage from './components/CategoryPage'
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
    <Router>
      <div className="App">
      <NavbarComponent categories={this.state.categories} />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/category/:category" component={CategoryPage} />
        <Route exact path="/saved" component={SavedPage} />
        <Redirect to="/home" />
      </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
