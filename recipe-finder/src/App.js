import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import HomePage from './components/Homepage';
import SavedPage from './components/SavedPage';
import CategoryPage from './components/CategoryPage'
import Footer from './components/Footer';
import FOOD from './food';
import CATEGORIES from './categories';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: CATEGORIES,
      food: FOOD,
    }
  }
  
  render() {
    const CategoryType = ({ match }) => {
      return (
        <CategoryPage 
        food={this.state.food.filter(foodItem => foodItem.type === match.params.category)}
        category={this.state.categories.filter(category => category.type === match.params.category)} 
        />
      )
    }

  return (
    <Router>
      <div className="App">
      <NavbarComponent categories={this.state.categories} />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/category/:category" component={CategoryType} />} />
        <Route exact path="/saved" component={SavedPage} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
  }
}

export default App;
