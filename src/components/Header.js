import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

function findRecipes(foodType, food) {
    const recipeArray = food.map(item => item.strMeal)
    return (
        `Find recipes for ${recipeArray[0]}, ${recipeArray[1]}, and ${recipeArray[2]}. Recipes that you and your whole family are sure to enjoy.`
    )
}

class Header extends Component {
    render() {
        return (
                <ParallaxBanner className="jumbotron text-center view"
                    layers={[
                            {
                            image: `${this.props.category[0].thumb2}`,
                            amount: 1,
                            },
                        ]}
                    style={{
                            height: '300px',
                        }}>
                    <div className="mask text-white flex-center rgba-stylish-strong">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 text-center mx-2">
                                <h1 className="card-title h1-responsive font-bold"><strong>{this.props.category[0].strCategory}</strong></h1>
                            </div>
                            <div className="col-md-7 text-center mx-2">
                                <p className="">{findRecipes(this.props.category[0].strCategory, this.props.food)}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </ParallaxBanner>
        )
    }
}

export default Header;
