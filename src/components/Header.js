import React, { Component } from 'react';

function findRecipes(foodType, food) {
    const recipeArray = food.map(item => item.strMeal)
    return (
        `Here you'll find some delicious ${foodType} recipes. Recipes that your whole family is sure to enjoy, like ${recipeArray[0]}, ${recipeArray[1]}, and ${recipeArray[2]}`
    )
}

class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="text-center py-5 px-4">
                    <img className="header-image" src={this.props.category[0].strCategoryThumb} alt={this.props.category[0].strCategory} />
                    <div>
                        <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>{this.props.category[0].strCategory}</strong></h2>
                        <p className="mx-5 mb-5">{findRecipes(this.props.category[0].strCategory, this.props.food)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
