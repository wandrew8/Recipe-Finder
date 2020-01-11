import React, { Component } from 'react';
import ImageLink from './ImageLink';


export class Homepage extends Component {
    render() {
        return (
            <div class="jumbotron card card-image" >
                <div class="text-center py-5 px-4">
                    <div>
                    <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Popular Recipe Categories</strong></h2>
                    <p class="mx-5 mb-5">Find delicious recipes to enjoy with your whole family!</p>
                    <ImageLink category={this.props.category} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage