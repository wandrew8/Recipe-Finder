import React, { Component } from 'react';
import Header from './Header';
import RecipeCards from './RecipeCards';

export class SavedPage extends Component {
    render() {
        return (
            <div className="saved-recipes">
                <h2 className="my-3">You have no saved recipes</h2>
            </div>
        )
    }
}

export default SavedPage
