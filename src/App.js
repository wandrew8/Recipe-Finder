import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
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
        saved: [],
      }
      this.addRecipe = this.addRecipe.bind(this);
    }

    addRecipe(id) {
      console.log(this.state.saved)
      this.setState({ saved: [...this.state.saved, id] })

  }
    
    render() {
      const CategoryType = ({ match }) => {
        return (
          <CategoryPage 
          food={this.state.food.filter(foodItem => foodItem.type === match.params.category)}
          category={this.state.categories.filter(category => category.type === match.params.category)} 
          addRecipe={this.addRecipe}
          />
        )
      }

      return (
        <Router>
            <div className="App">
            <NavbarComponent categories={this.state.categories} />
          <ParallaxProvider>
            <Switch>
              <Route path="/home" render={() => <HomePage food={this.state.food} category={this.state.categories}/>} />
              <Route path="/category/:category" component={CategoryType} />} />
              <Route exact path="/saved" render={() => <SavedPage saved={this.state.saved} food={this.state.food} category={this.state.categories}/>} />
              <Redirect to="/home" />
            </Switch>
          </ParallaxProvider>
            <Footer />
            </div>
        </Router>
      );
  }
}

export default App;
