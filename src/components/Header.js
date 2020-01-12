import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="text-center py-5 px-4">
                    <img className="header-image" src={this.props.category[0].strCategoryThumb} alt={this.props.category[0].strCategory} />
                    <div>
                        <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>{this.props.category[0].strCategory}</strong></h2>
                        <p className="mx-5 mb-5">{this.props.category[0].strCategoryDescription}</p>
                    </div>
                </div>
            </div>
        )
    }
}
