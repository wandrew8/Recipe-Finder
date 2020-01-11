import React from 'react';
import {Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="site-footer">
        <div className="container">
            <div className="row my-3">             
                <div className="col-md-5">
                    <h5>Food Categories</h5>
                    <div className="row">
                        <ul className="list-unstyled col-md-6">
                            <li><Link to="/category/chicken" href="#">Chicken</Link></li>
                            <li><Link to="/category/beef" href="#">Beef</Link></li>
                            <li><Link to="/category/fish" href="#">Fish and Seafood</Link></li>
                        </ul>
                        <ul className="list-unstyled col-md-6">
                            <li><Link to="/category/vegetarian" href="#">Vegetarian</Link></li>
                            <li><Link to="/category/pasta" href="#">Pasta</Link></li>
                            <li><Link to="/category/desserts" href="#">Desserts</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md col-sm-6">
                    <h5>About Us</h5>
                    <p>Search our catalog of delicious recipes suited for you and the whole family. Save your favorite recipes to reuse again and again!</p>
                </div>
                <div className="col-md col-sm-6">
                    <h5>Directory</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home" href="#">Home</Link></li>
                        <li><Link to="/saved" href="#">Saved Recipes</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <p>&copy; 2020 <strong>Recipe<span><i className="mx-1 fas fa-wave-square"></i></span>Finder.</strong> All Rights Reserved</p>
    </footer>
    )
}
