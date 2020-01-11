import React, { Component } from 'react'

export class RecipeCards extends Component {
    render() {
        return (
            <div class="card">
                <div class="view overlay">
                    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg" alt="Card image cap" />
                    <a>
                    <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div class="card-body elegant-color white-text rounded-bottom">
                    <a class="activator waves-effect mr-4"><i class="fas fa-share-alt white-text"></i></a>
                    <h4 class="card-title">Card title</h4>
                    <hr class="hr-light"/>
                    <p class="card-text white-text mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" class="white-text d-flex justify-content-end"><h5>Read more <i class="fas fa-angle-double-right"></i></h5></a>
                </div>
            </div>
        )
    }
}

export default RecipeCards
