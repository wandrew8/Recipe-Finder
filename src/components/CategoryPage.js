import React, { Component } from 'react';
import RecipeCards from './RecipeCards';
import Header from './Header';

export class CategoryPage extends Component {
    
    render() {
        return (
            <React.Fragment>
               <Header category={this.props.category} /> 
               <div className="container">
                   <div className="row justify-content-center">
                       <RecipeCards food={this.props.food}/>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}

export default CategoryPage
