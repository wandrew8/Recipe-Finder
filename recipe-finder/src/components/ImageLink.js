import React from 'react';
import {Link } from 'react-router-dom';


function RenderImages({category}) {
    const categories = category.map(categoryType => {
        return (
            <div className="col-6 col-sm-4 col-md-2">
                <Link to={`/category/${categoryType.type}`} href="#">
                    <img className="image-links" src={categoryType.strCategoryThumb} alt={categoryType.type} />
                    <p>{categoryType.strCategory}</p>
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

