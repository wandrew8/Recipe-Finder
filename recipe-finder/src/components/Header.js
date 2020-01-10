import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="jumbotron card">
                <div className="text-white text-center py-5 px-4">
            <img className="header-image" src={this.props.beef.beef1.strMealThumb} />
                    <div>
                    <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h2>
                    <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <a className="btn btn-outline-white btn-md"><i className="fas fa-clone left"></i> View project</a>
                    </div>
                </div>
            </div>
        )
    }
}
