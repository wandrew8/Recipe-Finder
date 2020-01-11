import React from 'react';
import {Link } from 'react-router-dom';


function RenderImages({category}) {
    const categories = category.map(categoryType => {
        return (
            <Link to={`/category/${categoryType.type}`} href="#">
                <p>{categoryType.strCategory}</p>
            </Link>
        )
    })
    if ({category}) {
        return (
            <div className="col-md-5 m-1">
                <h4>Categories</h4>
                {categories}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

function ImageLink(props) {
    return (
        <div>
           <RenderImages category={props.category} />
        </div>
    )
}

export default ImageLink;

