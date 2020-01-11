import React, { Component } from 'react'

function RenderCards({ food }) {
    if (food) {
    return (
        <div key={food.id} className="card mx-2 my-3 col-sm-5 col-md-3">
                <div className="view overlay">
                    <img className="card-img-top card-images" src={food.strMealThumb} alt={food.strMeal} />
                   
                </div>
                <div className="card-body elegant-color white-text rounded-bottom">
                    <h4 className="card-title">{food.strMeal}</h4>
                    <hr className="hr-light"/>
                    <p className="card-text white-text mb-4">{food.strArea}</p>
                </div>
            </div>
    )
     } else {
         return <div></div>
     }
}


class RecipeCards extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const cards = this.props.food.map(item => {
            return (
                <React.Fragment key={item.id}>
                    <RenderCards food={item} />
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
