import React, { Component } from 'react';
import ImageLink from './ImageLink';
import CategoryCard from './CategoryCard';


export class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="jumbotron bg-gradient-blue card card-image" >
                    <div className="text-center py-5 px-4">
                        <div>
                        <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Popular Recipe Categories</strong></h2>
                        <p className="mx-5 mb-5">Find delicious recipes to enjoy with your whole family!</p>
                        <ImageLink category={this.props.category} />
                        </div>
                    </div>
                </div>
                <CategoryCard category={this.props.category} />
            </React.Fragment>
        )
    }
}

export default Homepage
