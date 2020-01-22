import React, { Component } from 'react';
import RecipeModal from './RecipeModal';

class RenderCards extends Component {
        
    render() {
        return (
            <React.Fragment>
                <div  key={this.props.food.id} className="card recipe-card mx-2 my-3 col-sm-5 col-md-3">
                    <a type="button" data-toggle="modal" data-target={`#meal${this.props.food.id}`}>
                        <div className="view overlay">
                            <img className="card-img-top card-images" src={this.props.food.strMealThumb} alt={this.props.food.strMeal} />
                        </div>
                        <div className="card-body elegant-color white-text rounded-bottom">
                            <h4 className="card-title">{this.props.food.strMeal}</h4>
                            <hr className="hr-light"/>
                            <p className="card-text white-text mb-4">{this.props.food.strArea}</p>
                        </div>
                    </a>
                </div>
            <RecipeModal addRecipe={this.props.addRecipe} food={this.props.food} />
        </React.Fragment>
        )
    }
}

class RecipeCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
           id: null, 
        }
    }

    handleClick= (id) => {
        console.log(id)
        if (id) {
        this.setState ({
            id: id,
        })
    }
    }

    render() {
        const cards = this.props.food.map(item => {
            return (
                <React.Fragment key={item.id}>
                    <RenderCards addRecipe={this.props.addRecipe} id={this.state.id} handleClick={this.handleClick} food={item} />
                </React.Fragment>
            )
        });
        return (
            <React.Fragment>
                {cards}
            </React.Fragment>
        )
    }
}

export default RecipeCards
