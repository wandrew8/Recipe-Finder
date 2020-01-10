import React, { Component } from 'react';
import {Link } from 'react-router-dom';

export class NavbarComponent extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            <Link className="navbar-brand" href="#" to="/home">Recipe Finder</Link>
          
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="basicExampleNav">
          
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" href="#" to="/home">Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#" to="/saved" >Saved Recipes</Link>
                </li>
          
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Categories</a>
                  <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" href="#" to="/category/chicken">Chicken</Link>
                    <Link className="dropdown-item" href="#" to="/category/beef">Beef</Link>
                    <Link className="dropdown-item" href="#" to="/category/fish">Fish and Seafood</Link>
                    <Link className="dropdown-item" href="#" to="/category/vegetarian">Vegetarian and Vegan</Link>
                    <Link className="dropdown-item" href="#" to="/category/pasta">Pasta</Link>
                    <Link className="dropdown-item" href="#" to="/category/desserts">Desserts</Link>
                  </div>
                </li>
          
              </ul>
            </div>
          
          </nav>
        );
    }
}

export default NavbarComponent;
