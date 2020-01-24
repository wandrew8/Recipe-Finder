import React from 'react';
import {Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';


function RenderImages({category}) {
    const categories = category.map(categoryType => {
        return (
            <div className="col-6 col-sm-4 col-md-2">
                <Link to={`/category/${categoryType.type}`} href="#">
            <CSSTransition in={true} appear={true} timeout={2000} classNames="links">
                    <img className="image-links" src={categoryType.thumb2} alt={categoryType.type} />
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={5000} classNames="texts">
                    <p className="link-text pt-2">{categoryType.strCategory}</p>
            </CSSTransition>
                </Link>
            </div>
        )
    })
    if ({category}) {
        return (
            <React.Fragment>
                {categories}
            </React.Fragment>
        )
    } else {
        return (
            <div></div>
        )
    }
}

function ImageLink(props) {
    return (
        <div className="container">
            <div className="row">
                <RenderImages category={props.category} />
            </div>
        </div>
    )
}

export default ImageLink;

