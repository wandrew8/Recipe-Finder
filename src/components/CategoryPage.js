import React, { Component } from 'react';
import RecipeCards from './RecipeCards';
import Header from './Header';

export class CategoryPage extends Component {
    
    render() {
        return (
            <React.Fragment>
               <Header food={this.props.food} category={this.props.category} /> 
               <div className="container-fluid">
                   <div className="row justify-content-center">
                       <RecipeCards addRecipe={this.props.addRecipe} food={this.props.food}/>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}

export default CategoryPage
