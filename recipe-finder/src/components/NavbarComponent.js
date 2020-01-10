import React, { Component } from 'react';

export class NavbarComponent extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark primary-color">

            <a className="navbar-brand" href="#">Recipe Finder</a>
          
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="basicExampleNav">
          
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Saved Recipes</a>
                </li>
          
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Categories</a>
                  <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Chicken</a>
                    <a className="dropdown-item" href="#">Beef</a>
                    <a className="dropdown-item" href="#">Fish and Seafood</a>
                    <a className="dropdown-item" href="#">Vegetarian and Vegan</a>
                    <a className="dropdown-item" href="#">Pasta</a>
                    <a className="dropdown-item" href="#">Desserts</a>
                  </div>
                </li>
          
              </ul>
          
              <form className="form-inline">
                <div className="md-form my-0">
                <input placeholder="Search by category" list="categories"/>
                    <datalist id="categories">
                    <option value="Chicken"/>
                    <option value="Beef"/>
                    <option value="Fish and Seafood"/>
                    <option value="Vegetarian and Vegan"/>
                    <option value="Pasta"/>
                    <option value="Desserts"/>
                    </datalist>                
                </div>
              </form>
            </div>
          
          </nav>
        );
    }
}

export default NavbarComponent;
