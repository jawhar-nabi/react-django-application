import React, { Component } from 'react';
export class UserBooks extends Component{
    render(){
        return(

      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Pustok - Book Store HTML Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Use Minified Plugins Version For Fast Page Load */}
        <link rel="stylesheet" type="text/css" media="screen" href="css/plugins.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
        <link rel="shortcut icon" type="image/x-icon" href="image/favicon.ico" />
        <div className="site-wrapper" id="top">
          <section className=" section-padding-top section-padding-bottom section-margin">
            
              
                  <div className="home-right-block">
                    <div className="sb-custom-tab   pt--30 pb--30">
                    <h1> Your BOOKS</h1>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="shop-tab" data-toggle="tab" href="#shop" role="tab" aria-controls="shop" aria-selected="true">
                            En cours de lecture
                          </a>
                          <span className="arrow-icon" />
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="men-tab" data-toggle="tab" href="#men" role="tab" aria-controls="men" aria-selected="true">
                            Lire   
                          </a>
                          <span className="arrow-icon" />
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="woman-tab" data-toggle="tab" href="#woman" role="tab" aria-controls="woman" aria-selected="false">
                            Vous voulez lire
                          </a>
                          <span className="arrow-icon" />
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane show active" id="shop" role="tabpanel" aria-labelledby="shop-tab">
                          <div className="product-slider product-list-slider multiple-row slider-border-multiple-row  sb-slick-slider" data-slick-setting="{
                                    &quot;autoplay&quot;: true,
                                    &quot;autoplaySpeed&quot;: 8000,
                                    &quot;slidesToShow&quot;: 2,
                                    &quot;rows&quot;:4,
                                    &quot;dots&quot;:true
                                }" data-slick-responsive="[
                                    {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;rows&quot;: 3} },

                                    {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                ]">
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-1.jpg" alt="" />
                                </div>
                                
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Nom auteur
                                    </a>
                                    <h3><a href="/detailBook">Titre Book</a></h3>
                                  </div>
                                 
                                </div>
                              </div>
                            </div>






                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-2.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Gpple
                                    </a>
                                    <h3><a href="product-details.html">What Can You Do
                                        Save Your BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>























                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-3.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Hpple
                                    </a>
                                    <h3><a href="product-details.html">From Destruction By
                                        Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-4.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Gpple
                                    </a>
                                    <h3><a href="product-details.html">Find About
                                        BOOK By Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-5.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Dpple
                                    </a>
                                    <h3><a href="product-details.html">Read This
                                        Contro versial BOOK?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-6.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Cpple
                                    </a>
                                    <h3><a href="product-details.html">Koss KPH7 Light weight
                                        Portable</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-7.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Apple
                                    </a>
                                    <h3><a href="product-details.html">Ways To Have
                                        Appealing BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-8.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Xpple
                                    </a>
                                    <h3><a href="product-details.html">Ways To Have
                                        Appealing BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-9.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Tpple
                                    </a>
                                    <h3><a href="product-details.html">In 10 Minutes, I'll
                                        Give You The Truth</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-10.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Fpple
                                    </a>
                                    <h3><a href="product-details.html">What Can You Do
                                        Save Your BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-11.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Fpple
                                    </a>
                                    <h3><a href="product-details.html">From Destruction By
                                        Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-12.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Spple
                                    </a>
                                    <h3><a href="product-details.html">From Destruction By
                                        Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-13.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Kpple
                                    </a>
                                    <h3><a href="product-details.html">Find About
                                        BOOK By Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-1.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Apple
                                    </a>
                                    <h3><a href="product-details.html">Read This
                                        Contro versial BOOK?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-2.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Apple
                                    </a>
                                    <h3><a href="product-details.html">Apple iPad with
                                        Retina Display</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-5.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Gpple
                                    </a>
                                    <h3><a href="product-details.html">Koss KPH7 Light weight
                                        Portable</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>



                            
                          </div>
                        </div>
































                        <div className="tab-pane" id="men" role="tabpanel" aria-labelledby="men-tab">
                          <div className="product-slider product-list-slider multiple-row slider-border-multiple-row  sb-slick-slider" data-slick-setting="{
                                                                    &quot;autoplay&quot;: true,
                                                                    &quot;autoplaySpeed&quot;: 8000,
                                                                    &quot;slidesToShow&quot;: 2,
                                                                    &quot;rows&quot;:4,
                                                                    &quot;dots&quot;:true
                                                                }" data-slick-responsive="[
                                                                    {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;rows&quot;: 3} },
                                
                                                                    {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                                                ]">
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-1.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Fpple
                                    </a>
                                    <h3><a href="product-details.html">5 Ways To Get Through
                                        To Your BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-2.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Gpple
                                    </a>
                                    <h3><a href="product-details.html">What Can You Do
                                        Save Your BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-3.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Hpple
                                    </a>
                                    <h3><a href="product-details.html">From Destruction By
                                        Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-4.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Gpple
                                    </a>
                                    <h3><a href="product-details.html">Find About
                                        BOOK By Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-5.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Dpple
                                    </a>
                                    <h3><a href="product-details.html">Read This
                                        Contro versial BOOK?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-6.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Cpple
                                    </a>
                                    <h3><a href="product-details.html">Koss KPH7 Light weight
                                        Portable</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-7.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Apple
                                    </a>
                                    <h3><a href="product-details.html">Ways To Have
                                        Appealing BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-8.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Xpple
                                    </a>
                                    <h3><a href="product-details.html">Ways To Have
                                        Appealing BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-9.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Tpple
                                    </a>
                                    <h3><a href="product-details.html">In 10 Minutes, I'll
                                        Give You The Truth</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-10.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Fpple
                                    </a>
                                    <h3><a href="product-details.html">What Can You Do
                                        Save Your BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-11.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Fpple
                                    </a>
                                    <h3><a href="product-details.html">From Destruction By
                                        Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-12.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Spple
                                    </a>
                                    <h3><a href="product-details.html">From Destruction By
                                        Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-13.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Kpple
                                    </a>
                                    <h3><a href="product-details.html">Find About
                                        BOOK By Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-1.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Apple
                                    </a>
                                    <h3><a href="product-details.html">Read This
                                        Contro versial BOOK?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-2.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Apple
                                    </a>
                                    <h3><a href="product-details.html">Apple iPad with
                                        Retina Display</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-5.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Gpple
                                    </a>
                                    <h3><a href="product-details.html">Koss KPH7 Light weight
                                        Portable</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="woman" role="tabpanel" aria-labelledby="woman-tab">
                          <div className="product-slider product-list-slider multiple-row slider-border-multiple-row  sb-slick-slider" data-slick-setting="{
                                                                                                    &quot;autoplay&quot;: true,
                                                                                                    &quot;autoplaySpeed&quot;: 8000,
                                                                                                    &quot;slidesToShow&quot;: 2,
                                                                                                    &quot;rows&quot;:4,
                                                                                                    &quot;dots&quot;:true
                                                                                                }" data-slick-responsive="[
                                                                                                    {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2,&quot;rows&quot;: 3} },
                                                                
                                                                                                    {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                                                                                ]">
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-1.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Fpple
                                    </a>
                                    <h3><a href="product-details.html">5 Ways To Get Through
                                        To Your BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-2.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Gpple
                                    </a>
                                    <h3><a href="product-details.html">What Can You Do
                                        Save Your BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-3.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Hpple
                                    </a>
                                    <h3><a href="product-details.html">From Destruction By
                                        Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-4.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Gpple
                                    </a>
                                    <h3><a href="product-details.html">Find About
                                        BOOK By Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-5.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Dpple
                                    </a>
                                    <h3><a href="product-details.html">Read This
                                        Contro versial BOOK?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-6.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Cpple
                                    </a>
                                    <h3><a href="product-details.html">Koss KPH7 Light weight
                                        Portable</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-7.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Apple
                                    </a>
                                    <h3><a href="product-details.html">Ways To Have
                                        Appealing BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-8.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Xpple
                                    </a>
                                    <h3><a href="product-details.html">Ways To Have
                                        Appealing BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-9.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Tpple
                                    </a>
                                    <h3><a href="product-details.html">In 10 Minutes, I'll
                                        Give You The Truth</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-10.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Fpple
                                    </a>
                                    <h3><a href="product-details.html">What Can You Do
                                        Save Your BOOK</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-11.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Fpple
                                    </a>
                                    <h3><a href="product-details.html">From Destruction By
                                        Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-12.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Spple
                                    </a>
                                    <h3><a href="product-details.html">From Destruction By
                                        Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£53.20</span>
                                    <del className="price-old">£61.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-13.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Kpple
                                    </a>
                                    <h3><a href="product-details.html">Find About
                                        BOOK By Social Media?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-1.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Apple
                                    </a>
                                    <h3><a href="product-details.html">Read This
                                        Contro versial BOOK?</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-2.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Apple
                                    </a>
                                    <h3><a href="product-details.html">Apple iPad with
                                        Retina Display</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-slide">
                              <div className="product-card card-style-list">
                                <div className="card-image">
                                  <img src="image/products/product-5.jpg" alt="" />
                                </div>
                                <div className="product-card--body">
                                  <div className="product-header">
                                    <a href="#" className="author">
                                      Gpple
                                    </a>
                                    <h3><a href="product-details.html">Koss KPH7 Light weight
                                        Portable</a></h3>
                                  </div>
                                  <div className="price-block">
                                    <span className="price">£51.20</span>
                                    <del className="price-old">£51.20</del>
                                    <span className="price-discount">20%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
           
          </section>
        </div>
        {/* Use Minified Plugins Version For Fast Page Load */}
      </div>
    );
  }
}


export default UserBooks;