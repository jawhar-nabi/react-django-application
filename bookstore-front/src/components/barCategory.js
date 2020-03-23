import React, { Component } from 'react';
export class BarCategory extends Component{
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

          <section className="section-margin">
            <div className="container">
              <div className="section-title section-title--bordered">
                <br /> <h2>your recommended books</h2>
              </div>
              <div className="product-slider sb-slick-slider slider-border-single-row" data-slick-setting="{
                        &quot;autoplay&quot;: true,
                        &quot;autoplaySpeed&quot;: 8000,
                        &quot;slidesToShow&quot;: 5,
                        &quot;dots&quot;:true
                    }" data-slick-responsive="[
                        {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4} },
                        {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                        {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                        {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                        {&quot;breakpoint&quot;:320, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                    ]">
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Lpple
                      </a>
                      <h3><a href="product-details.html">Revolutionize Your BOOK With</a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="image/products/product-1.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-1.jpg" alt="" />
                          </a>
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
                      <div className="price-block">
                        <span className="price">£51.20</span>
                        <del className="price-old">£51.20</del>
                        <span className="price-discount">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Jpple
                      </a>
                      <h3><a href="product-details.html">Turn Your BOOK Into High Machine</a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="image/products/product-2.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-1.jpg" alt="" />
                          </a>
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
                      <div className="price-block">
                        <span className="price">£51.20</span>
                        <del className="price-old">£51.20</del>
                        <span className="price-discount">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Wpple
                      </a>
                      <h3><a href="product-details.html">3 Ways Create Better BOOK With</a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="image/products/product-6.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-2.jpg" alt="" />
                          </a>
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
                      <div className="price-block">
                        <span className="price">£51.20</span>
                        <del className="price-old">£51.20</del>
                        <span className="price-discount">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Epple
                      </a>
                      <h3><a href="product-details.html">What You Can Learn From Bill Gates</a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="image/products/product-4.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-4.jpg" alt="" />
                          </a>
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
                      <div className="price-block">
                        <span className="price">£51.20</span>
                        <del className="price-old">£51.20</del>
                        <span className="price-discount">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Hpple
                      </a>
                      <h3><a href="product-details.html">a Half Very Simple Things You To</a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="image/products/product-8.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-4.jpg" alt="" />
                          </a>
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
                      <div className="price-block">
                        <span className="price">£51.20</span>
                        <del className="price-old">£51.20</del>
                        <span className="price-discount">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Bpple
                      </a>
                      <h3><a href="product-details.html">Here Is A Quick Cure For Book</a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="image/products/product-2.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-7.jpg" alt="" />
                          </a>
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
                      <div className="price-block">
                        <span className="price">£51.20</span>
                        <del className="price-old">£51.20</del>
                        <span className="price-discount">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        zpple
                      </a>
                      <h3><a href="product-details.html">BOOK: Do You Really Need It? This </a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="image/products/product-10.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/product-11.jpg" alt="" />
                          </a>
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
          </section>
  
        </div></div>
    );
  }
}

export default BarCategory;