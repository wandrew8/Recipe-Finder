import React from 'react'



function RecipeModal(props) {
    return (
        <div>
            <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="recipeModal"
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
                            <img className="image" src={props.food.strMealThumb} alt={props.food.strMeal} />
                            <div class="mask gradient-mask flex-center">
                                <h1>{props.food.strMeal}</h1>
                            </div>
                        </div>
                    </div>
                    <hr />
                    
                    <div className="container">
                        <div className="row my-4">
                            <div className="col-md-6">
                                <img className="modal-main-image" src={props.food.strMealThumb} alt={props.food.strMeal} />
                                <div className="youtube-container">
                                    <a className="youtube" target="_blank" href={props.food.strYoutube}><span><i class="fab fa-youtube fa-3x"></i></span>
                                    <p>Watch on Youtube</p></a>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <h2>Ingredients</h2>
                                <ul>
                                    <li>{props.food.strMeasure1} {props.food.strIngredient1}</li>
                                    <li>{props.food.strMeasure2} {props.food.strIngredient2}</li>
                                    <li>{props.food.strMeasure3} {props.food.strIngredient3}</li>
                                    <li>{props.food.strMeasure4} {props.food.strIngredient4}</li>
                                    <li>{props.food.strMeasure5} {props.food.strIngredient5}</li>
                                    <li>{props.food.strMeasure6} {props.food.strIngredient6}</li>
                                    <li>{props.food.strMeasure7} {props.food.strIngredient7}</li>
                                    <li>{props.food.strMeasure8} {props.food.strIngredient8}</li>
                                    <li>{props.food.strMeasure9} {props.food.strIngredient9}</li>
                                    <li>{props.food.strMeasure10} {props.food.strIngredient10}</li>
                                    <li>{props.food.strMeasure11} {props.food.strIngredient11}</li>
                                    <li>{props.food.strMeasure12} {props.food.strIngredient12}</li>
                                    <li>{props.food.strMeasure13} {props.food.strIngredient13}</li>
                                    <li>{props.food.strMeasure14} {props.food.strIngredient14}</li>
                                    <li>{props.food.strMeasure15} {props.food.strIngredient15}</li>
                                    <li>{props.food.strMeasure16} {props.food.strIngredient16}</li>
                                    <li>{props.food.strMeasure17} {props.food.strIngredient17}</li>
                                    <li>{props.food.strMeasure18} {props.food.strIngredient18}</li>
                                    <li>{props.food.strMeasure19} {props.food.strIngredient19}</li>
                                    <li>{props.food.strMeasure20} {props.food.strIngredient20}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                        
                    </div>
                    <h2 className="text-left px-5">Instructions</h2>
                        {props.food.strInstructions}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default RecipeModal;