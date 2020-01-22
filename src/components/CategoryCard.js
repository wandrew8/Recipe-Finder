import React from 'react';
import {Link } from 'react-router-dom';

function RenderCategories(props) {
    if(props.category) {
    return (
            <div key={props.category.id} className="card category-card mx-2 my-3 col-sm-5 col-md-3">
                <div className="view overlay">
                    <img className="card-img-top card-images" src={props.category.thumb2} alt={props.category.type} />
                    <div className="card-body elegant-color white-text rounded-bottom">
                        <h4 className="card-title">{props.category.strCategory}</h4>
                        <hr className="hr-light"/>
                        <p className="card-text white-text mb-4">Search through delicious {props.category.type} dishes like: {props.category.options[0]}, {props.category.options[1]}, and {props.category.options[2]}!</p>
                        <Link to={`category/${props.category.type}`}><button type="button" class="btn btn-rounded blue-gradient waves-effect">Visit</button></Link>
                    </div>
                </div>
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
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {cards}
                </div>
            </div>
        </React.Fragment>
    )
}
}

export default CategoryCard;
