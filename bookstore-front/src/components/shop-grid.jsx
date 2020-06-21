import React from 'react';
import axios from 'axios';

export class Shop extends React.Component {
  state = { books: [] }
  componentDidMount() {
    axios.get('http://localhost:8000/api/pages/books/')
      .then(
        res => (this.setState({ books: res.data }),
        console.log(res.data)
        ))
      .catch(err => console.log('erreur..', err))


  }
  render() {
    const {books} = this.state;
    return (
      <div>
        <section className="breadcrumb-section">
          <h2 className="sr-only">Site Breadcrumb</h2>
          <div className="container">
            <div className="breadcrumb-contents">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active">Shop</li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        <main className="inner-page-sec-padding-bottom">
          <div className="container">
            <div className="shop-toolbar mb--30">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-2 col-sm-6">
                  {/* Product View Mode */}
                  <div className="product-view-mode">
                    <a href="#" className="sorting-btn active" data-target="grid"><i className="fas fa-th" /></a>
                    <a href="#" className="sorting-btn" data-target="grid-four">
                      <span className="grid-four-icon">
                        <i className="fas fa-grip-vertical" /><i className="fas fa-grip-vertical" />
                      </span>
                    </a>
                    <a href="#" className="sorting-btn" data-target="list "><i className="fas fa-list" /></a>
                  </div>
                </div>
                <div className="col-xl-5 col-md-4 col-sm-6  mt--10 mt-sm--0">
                  <span className="toolbar-status">
                    Showing 1 to 9 of 14 (2 Pages)
                    </span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6  mt--10 mt-md--0">
                  <div className="sorting-selection">
                    <span>Show:</span>
                    <select className="form-control nice-select sort-select">
                      <option value selected="selected">3</option>
                      <option value>9</option>
                      <option value>5</option>
                      <option value>10</option>
                      <option value>12</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mt--10 mt-md--0 ">
                  <div className="sorting-selection">
                    <span>Sort By:</span>
                    <select className="form-control nice-select sort-select mr-0">
                      <option value selected="selected">Default Sorting</option>
                      <option value>Sort
                          By:Name (A - Z)</option>
                      <option value>Sort
                          By:Name (Z - A)</option>
                      <option value>Sort
                          By:Price (Low &gt; High)</option>
                      <option value>Sort
                          By:Price (High &gt; Low)</option>
                      <option value>Sort
                          By:Rating (Highest)</option>
                      <option value>Sort
                          By:Rating (Lowest)</option>
                      <option value>Sort
                          By:Model (A - Z)</option>
                      <option value>Sort
                          By:Model (Z - A)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-toolbar d-none">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-2 col-sm-6">
                  {/* Product View Mode */}
                  <div className="product-view-mode">
                    <a href="#" className="sorting-btn active" data-target="grid"><i className="fas fa-th" /></a>
                    <a href="#" className="sorting-btn" data-target="grid-four">
                      <span className="grid-four-icon">
                        <i className="fas fa-grip-vertical" /><i className="fas fa-grip-vertical" />
                      </span>
                    </a>
                    <a href="#" className="sorting-btn" data-target="list "><i className="fas fa-list" /></a>
                  </div>
                </div>
                <div className="col-xl-5 col-md-4 col-sm-6  mt--10 mt-sm--0">
                  <span className="toolbar-status">
                    Showing 1 to 9 of 14 (2 Pages)
                    </span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6  mt--10 mt-md--0">
                  <div className="sorting-selection">
                    <span>Show:</span>
                    <select className="form-control nice-select sort-select">
                      <option value selected="selected">3</option>
                      <option value>9</option>
                      <option value>5</option>
                      <option value>10</option>
                      <option value>12</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mt--10 mt-md--0 ">
                  <div className="sorting-selection">
                    <span>Sort By:</span>
                    <select className="form-control nice-select sort-select mr-0">
                      <option value selected="selected">Default Sorting</option>
                      <option value>Sort
                          By:Name (A - Z)</option>
                      <option value>Sort
                          By:Name (Z - A)</option>
                      <option value>Sort
                          By:Price (Low &gt; High)</option>
                      <option value>Sort
                          By:Price (High &gt; Low)</option>
                      <option value>Sort
                          By:Rating (Highest)</option>
                      <option value>Sort
                          By:Rating (Lowest)</option>
                      <option value>Sort
                          By:Model (A - Z)</option>
                      <option value>Sort
                          By:Model (Z - A)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-product-wrap grid with-pagination row space-db--30 shop-border">
              {books.slice(0, 4).map(book => (
                <div className="col-lg-4 col-sm-6">
                  <div className="product-card">
                    <div className="product-grid-content">
                      <div className="product-header">
                        <a href="#" className="author">
                          {book.title}
                        </a>
                        <h3><a href="product-details.html">{book.content}</a></h3>
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
                    <div className="product-list-content">
                      <div className="card-image">
                        <img src="image/products/product-3.jpg" alt="" />
                      </div>
                      <div className="product-card--body">
                        <div className="product-header">
                          <a href="#" className="author">
                            Gpple
                          </a>
                          <h3><a href="product-details.html" tabIndex={0}>Qpple cPad with Retina Display
                              MD510LL/A</a></h3>
                        </div>
                        <article>
                          <h2 className="sr-only">Card List Article</h2>
                          <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of
                          battery life, the new iPod classic lets you enjoy
                            up to 40,000 songs or..</p>
                        </article>
                        <div className="price-block">
                          <span className="price">£51.20</span>
                          <del className="price-old">£51.20</del>
                          <span className="price-discount">20%</span>
                        </div>
                        <div className="rating-block">
                          <span className="fas fa-star star_on" />
                          <span className="fas fa-star star_on" />
                          <span className="fas fa-star star_on" />
                          <span className="fas fa-star star_on" />
                          <span className="fas fa-star " />
                        </div>
                        <div className="btn-block">
                          <a href="#" className="btn btn-outlined">Add To Cart</a>
                          <a href="#" className="card-link"><i className="fas fa-heart" /> Add To Wishlist</a>
                          <a href="#" className="card-link"><i className="fas fa-random" /> Add To Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Block */}
            <div className="row pt--30">
              <div className="col-md-12">
                <div className="pagination-block">
                  <ul className="pagination-btns flex-center">
                    <li><a href="#" className="single-btn prev-btn ">|<i className="zmdi zmdi-chevron-left" /> </a>
                    </li>
                    <li><a href="#" className="single-btn prev-btn "><i className="zmdi zmdi-chevron-left" /> </a>
                    </li>
                    <li className="active"><a href="#" className="single-btn">1</a></li>
                    <li><a href="#" className="single-btn">2</a></li>
                    <li><a href="#" className="single-btn">3</a></li>
                    <li><a href="#" className="single-btn">4</a></li>
                    <li><a href="#" className="single-btn next-btn"><i className="zmdi zmdi-chevron-right" /></a>
                    </li>
                    <li><a href="#" className="single-btn next-btn"><i className="zmdi zmdi-chevron-right" />|</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Modal */}
            <div className="modal fade modal-quick-view" id="quickModal" tabIndex={-1} role="dialog" aria-labelledby="quickModal" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <button type="button" className="close modal-close-btn ml-auto" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                  <div className="product-details-modal">
                    <div className="row">
                      <div className="col-lg-5">
                        {/* Product Details Slider Big Image*/}
                        <div className="product-details-slider sb-slick-slider arrow-type-two" data-slick-setting="{
                &quot;slidesToShow&quot;: 1,
                &quot;arrows&quot;: false,
                &quot;fade&quot;: true,
                &quot;draggable&quot;: false,
                &quot;swipe&quot;: false,
                &quot;asNavFor&quot;: &quot;.product-slider-nav&quot;
                }">
                          <div className="single-slide">
                            <img src="image/products/product-details-1.jpg" alt="" />
                          </div>
                          <div className="single-slide">
                            <img src="image/products/product-details-2.jpg" alt="" />
                          </div>
                          <div className="single-slide">
                            <img src="image/products/product-details-3.jpg" alt="" />
                          </div>
                          <div className="single-slide">
                            <img src="image/products/product-details-4.jpg" alt="" />
                          </div>
                          <div className="single-slide">
                            <img src="image/products/product-details-5.jpg" alt="" />
                          </div>
                        </div>
                        {/* Product Details Slider Nav */}
                        <div className="mt--30 product-slider-nav sb-slick-slider arrow-type-two" data-slick-setting="{
              &quot;infinite&quot;:true,
                &quot;autoplay&quot;: true,
                &quot;autoplaySpeed&quot;: 8000,
                &quot;slidesToShow&quot;: 4,
                &quot;arrows&quot;: true,
                &quot;prevArrow&quot;:{&quot;buttonClass&quot;: &quot;slick-prev&quot;,&quot;iconClass&quot;:&quot;fa fa-chevron-left&quot;},
                &quot;nextArrow&quot;:{&quot;buttonClass&quot;: &quot;slick-next&quot;,&quot;iconClass&quot;:&quot;fa fa-chevron-right&quot;},
                &quot;asNavFor&quot;: &quot;.product-details-slider&quot;,
                &quot;focusOnSelect&quot;: true
                }">
                          <div className="single-slide">
                            <img src="image/products/product-details-1.jpg" alt="" />
                          </div>
                          <div className="single-slide">
                            <img src="image/products/product-details-2.jpg" alt="" />
                          </div>
                          <div className="single-slide">
                            <img src="image/products/product-details-3.jpg" alt="" />
                          </div>
                          <div className="single-slide">
                            <img src="image/products/product-details-4.jpg" alt="" />
                          </div>
                          <div className="single-slide">
                            <img src="image/products/product-details-5.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 mt--30 mt-lg--30">
                        <div className="product-details-info pl-lg--30 ">
                          <p className="tag-block">Tags: <a href="#">Movado</a>, <a href="#">Omega</a></p>
                          <h3 className="product-title">Beats EP Wired On-Ear Headphone-Black</h3>
                          <ul className="list-unstyled">
                            <li>Ex Tax: <span className="list-value"> £60.24</span></li>
                            <li>Brands: <a href="#" className="list-value font-weight-bold"> Canon</a>
                            </li>
                            <li>Product Code: <span className="list-value"> model1</span></li>
                            <li>Reward Points: <span className="list-value"> 200</span></li>
                            <li>Availability: <span className="list-value"> In Stock</span></li>
                          </ul>
                          <div className="price-block">
                            <span className="price-new">£73.79</span>
                            <del className="price-old">£91.86</del>
                          </div>
                          <div className="rating-widget">
                            <div className="rating-block">
                              <span className="fas fa-star star_on" />
                              <span className="fas fa-star star_on" />
                              <span className="fas fa-star star_on" />
                              <span className="fas fa-star star_on" />
                              <span className="fas fa-star " />
                            </div>
                            <div className="review-widget">
                              <a href="#">(1 Reviews)</a> <span>|</span>
                              <a href="#">Write a review</a>
                            </div>
                          </div>
                          <article className="product-details-article">
                            <h4 className="sr-only">Product Summery</h4>
                            <p>Long printed dress with thin adjustable straps. V-neckline and wiring
                            under the Dust with ruffles at the bottom
                            of the
                                dress.</p>
                          </article>
                          <div className="add-to-cart-row">
                            <div className="count-input-block">
                              <span className="widget-label">Qty</span>
                              <input type="number" className="form-control text-center" defaultValue={1} />
                            </div>
                            <div className="add-cart-btn">
                              <a href="#" className="btn btn-outlined--primary"><span className="plus-icon">+</span>Add to Cart</a>
                            </div>
                          </div>
                          <div className="compare-wishlist-row">
                            <a href="#" className="add-link"><i className="fas fa-heart" />Add to Wish
                                List</a>
                            <a href="#" className="add-link"><i className="fas fa-random" />Add to
                                Compare</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="widget-social-share">
                      <span className="widget-label">Share:</span>
                      <div className="modal-social-share">
                        <a href="#" className="single-icon"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className="single-icon"><i className="fab fa-twitter" /></a>
                        <a href="#" className="single-icon"><i className="fab fa-youtube" /></a>
                        <a href="#" className="single-icon"><i className="fab fa-google-plus-g" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/*=================================
    Brands Slider
  ===================================== */}
        <section className="section-margin">
          <h2 className="sr-only">Brand Slider</h2>
          <div className="container">
            <div className="brand-slider sb-slick-slider border-top border-bottom" data-slick-setting="{
                                              &quot;autoplay&quot;: true,
                                              &quot;autoplaySpeed&quot;: 8000,
                                              &quot;slidesToShow&quot;: 6
                                              }" data-slick-responsive="[
                  {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4} },
                  {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                  {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                  {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                  {&quot;breakpoint&quot;:320, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
              ]">
              <div className="single-slide">
                <img src="image/others/brand-1.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="image/others/brand-2.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="image/others/brand-3.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="image/others/brand-4.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="image/others/brand-5.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="image/others/brand-6.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="image/others/brand-1.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="image/others/brand-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};