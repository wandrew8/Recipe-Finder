import React, { Component } from 'react';
import RecipeCards from './RecipeCards';



export class AllPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="jumbotron head-banner card card-image" >
                    <div className="text-center py-5 px-4">
                        <div className="text-white">
                        <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>All Available Recipes</strong></h2>
                        <p>There are {this.props.food.length} recipes available</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <RecipeCards food={this.props.food} saved={this.props.saved} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AllPage;
