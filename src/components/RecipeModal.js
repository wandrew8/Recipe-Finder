import React from 'react';


class RecipeModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saved: [],
        }
    }
    render() {
        const handleClick = (id) => {
            if (this.state.saved.includes(id)) {
                this.setState({
                saved: [],
            })
        } else {
            this.setState({
                saved: [id]
,            })
        }
        }
    return (
        <div>
            <div className="modal fade" id={`meal${this.props.food.id}`} tabIndex="-1" role="dialog" aria-labelledby="recipeModal"
            aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    <div>
                    <div>
                        <div className="view">
                            <img className="image" src={this.props.food.strMealThumb} alt={this.props.food.strMeal} />
                            <div className="mask gradient-mask flex-center">
                                <h1>{this.props.food.strMeal}</h1>
                            </div>
                        </div>
                    </div>
                    <hr />
                    
                    <div className="container">
                        <div className="row my-4">
                            <div className="col-md-6">
                            <a onClick={()=> handleClick(this.props.food.idMeal)} className="heart" type="button" data-toggle="modal" data-target="#addRecipe">{this.state.saved.includes(this.props.food.idMeal) ? <i className="heart2 fas fa-heart fa-2x"></i> : <i className="far heart fa-heart fa-2x"></i>}</a>
                                <img className="modal-main-image" src={this.props.food.strMealThumb} alt={this.props.food.strMeal} />
                                <div className="youtube-container">
                                    <a className="youtube" target="_blank" href={this.props.food.strYoutube}><span><i className="fab fa-youtube fa-3x"></i></span>
                                    <p>Watch on YouTube</p></a>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <h2>Ingredients</h2>
                                <ul>
                                    <li>{this.props.food.strMeasure1} {this.props.food.strIngredient1}</li>
                                    <li>{this.props.food.strMeasure2} {this.props.food.strIngredient2}</li> 
                                    <li>{this.props.food.strMeasure3} {this.props.food.strIngredient3}</li>
                                    <li>{this.props.food.strMeasure4} {this.props.food.strIngredient4}</li>
                                    <li>{this.props.food.strMeasure5} {this.props.food.strIngredient5}</li>
                                    <li>{this.props.food.strMeasure6} {this.props.food.strIngredient6}</li>
                                    <li>{this.props.food.strMeasure7} {this.props.food.strIngredient7}</li>
                                    <li>{this.props.food.strMeasure8} {this.props.food.strIngredient8}</li>
                                    <li>{this.props.food.strMeasure9} {this.props.food.strIngredient9}</li>
                                    <li>{this.props.food.strMeasure10} {this.props.food.strIngredient10}</li>
                                    <li>{this.props.food.strMeasure11} {this.props.food.strIngredient11}</li>
                                    <li>{this.props.food.strMeasure12} {this.props.food.strIngredient12}</li>
                                    <li>{this.props.food.strMeasure13} {this.props.food.strIngredient13}</li>
                                    <li>{this.props.food.strMeasure14} {this.props.food.strIngredient14}</li>
                                    <li>{this.props.food.strMeasure15} {this.props.food.strIngredient15}</li>
                                    <li>{this.props.food.strMeasure16} {this.props.food.strIngredient16}</li>
                                    <li>{this.props.food.strMeasure17} {this.props.food.strIngredient17}</li>
                                    <li>{this.props.food.strMeasure18} {this.props.food.strIngredient18}</li>
                                    <li>{this.props.food.strMeasure19} {this.props.food.strIngredient19}</li>
                                    <li>{this.props.food.strMeasure20} {this.props.food.strIngredient20}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                        
                    </div>
                    <h2 className="text-left px-5">Instructions</h2>
                        {this.props.food.strInstructions}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
}

export default RecipeModal;