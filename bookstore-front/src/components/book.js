import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Book extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className="single-slide">
                <div className="product-card">
                    <div className="col-sm-10">


                        <div className="product-header">
                            <Link to="/listeBooks" className="author">
                                {this.props.auteur}
                            </Link>
                            <h3><Link to="/detailBook">{this.props.titre} </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="col-sm-10">
                        <div className="product-card--body">
                            <div className="card-image">

                                <img src={this.props.couverture} />
                                <div className="hover-contents">
                                    <Link to="/detailBook" className="hover-image">
                                        <img src={this.props.couverture} />
                                    </Link>
                                    <div className="hover-btns">
                                        <a href="cart.html" className="single-btn">
                                            <i className="fas fa-shopping-basket" />
                                        </a>
                                        <a href="wishlist.html" className="single-btn">
                                            <i className="fas fa-heart" />
                                        </a>
                                        <a href="compare.html" className="single-btn">
                                            <i className="fas fa-random" />
                                        </a>
                                        <a href="#" data-toggle="modal" data-target="#quickModal" className="single-btn">
                                            <i className="fas fa-eye" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }










}

export default Book;