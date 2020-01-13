import React from 'react';
import {Link } from 'react-router-dom';

function RenderCategories(props) {
    if(props.category) {
    return (
            <div key={props.category.id} className="card category-card col-sm-5 col-md-3">
            <Link to={`/category/${props.category.type}`} href="#">

            <div className="view overlay">
                <img className="card-img-top card-images" src={props.category.strCategoryThumb} alt={props.category.type} />
            </div>
            <div className="card-body elegant-color white-text rounded-bottom">
                <h4 className="card-title">{props.category.strCategory}</h4>
                <hr className="hr-light"/>
                <p className="card-text white-text mb-4">{props.category.strCategoryDescription}</p>
            </div>
            </Link>
            </div>
    )
    } else {
        return <div></div>
    }
}


class CategoryCard extends React.Component {
    
    render() {
    const cards = this.props.category.map(categoryName => {
        return(
            <React.Fragment key={categoryName.id}>
                <RenderCategories category={categoryName} />
            </React.Fragment>
        )
    });
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {cards}
                </div>
            </div>
        </React.Fragment>
    )
}
}

export default CategoryCard;
