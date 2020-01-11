import React, { Component } from 'react';
import Header from './Header';

export class CategoryPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
               <Header category={this.props.category} /> 
            </React.Fragment>
        )
    }
}

export default CategoryPage
