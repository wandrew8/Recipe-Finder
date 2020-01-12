import React, { Component } from 'react';
import RecipeModal from './RecipeModal';

function RenderCards({ food, handleClick, id }) {
    if (food) {
    return (
        <React.Fragment>
        <div  key={food.id} className="card mx-2 my-3 col-sm-5 col-md-3">
            <a onClick={() => handleClick(food.idMeal)} type="button" data-toggle="modal" data-target="#recipeModal">
            <div className="view overlay">
                <img className="card-img-top card-images" src={food.strMealThumb} alt={food.strMeal} />
            </div>
            <div className="card-body elegant-color white-text rounded-bottom">
                <h4 className="card-title">{food.strMeal}</h4>
                <hr className="hr-light"/>
                <p className="card-text white-text mb-4">{food.strArea}</p>
            </div>
            </a>
        </div>
        <RecipeModal food={food} id={id} />
    </React.Fragment>
    )
     } else {
         return <div></div>
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
                    <RenderCards id={this.state.id} handleClick={this.handleClick} food={item} />
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
