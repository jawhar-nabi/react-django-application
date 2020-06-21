import React from 'react';
export class product extends React.Component{
    render() {
      return (
        <div>
          <div className="site-wrapper" id="top">
            <div className="site-mobile-menu">
              <header className="mobile-header d-block d-lg-none pt--10 pb-md--10">
                <div className="container">
                  <div className="row align-items-sm-end align-items-center">
                    <div className="col-md-4 col-7">
                      <a href="index.html" className="site-brand">
                        <img src="image/logo.png" alt="" />
                      </a>
                    </div>
                    <div className="col-md-5 order-3 order-md-2">
                      <nav className="category-nav   ">
                        <div>
                          <a href="javascript:void(0)" className="category-trigger"><i className="fa fa-bars" />Browse
                            categories</a>
                          <ul className="category-menu">
                            <li className="cat-item has-children">
                              <a href="">Arts &amp; Photography</a>
                              <ul className="sub-menu">
                                <li><a href="">Bags &amp; Cases</a></li>
                                <li><a href="">Binoculars &amp; Scopes</a></li>
                                <li><a href="">Digital Cameras</a></li>
                                <li><a href="">Film Photography</a></li>
                                <li><a href="">Lighting &amp; Studio</a></li>
                              </ul>
                            </li>
                            <li className="cat-item has-children mega-menu"><a href="">Biographies</a>
                              <ul className="sub-menu">
                                <li className="single-block">
                                  <h3 className="title">WHEEL SIMULATORS</h3>
                                  <ul>
                                    <li><a href="">Bags &amp; Cases</a></li>
                                    <li><a href="">Binoculars &amp; Scopes</a></li>
                                    <li><a href="">Digital Cameras</a></li>
                                    <li><a href="">Film Photography</a></li>
                                    <li><a href="">Lighting &amp; Studio</a></li>
                                  </ul>
                                </li>
                                <li className="single-block">
                                  <h3 className="title">WHEEL SIMULATORS</h3>
                                  <ul>
                                    <li><a href="">Bags &amp; Cases</a></li>
                                    <li><a href="">Binoculars &amp; Scopes</a></li>
                                    <li><a href="">Digital Cameras</a></li>
                                    <li><a href="">Film Photography</a></li>
                                    <li><a href="">Lighting &amp; Studio</a></li>
                                  </ul>
                                </li>
                                <li className="single-block">
                                  <h3 className="title">WHEEL SIMULATORS</h3>
                                  <ul>
                                    <li><a href="">Bags &amp; Cases</a></li>
                                    <li><a href="">Binoculars &amp; Scopes</a></li>
                                    <li><a href="">Digital Cameras</a></li>
                                    <li><a href="">Film Photography</a></li>
                                    <li><a href="">Lighting &amp; Studio</a></li>
                                  </ul>
                                </li>
                                <li className="single-block">
                                  <h3 className="title">WHEEL SIMULATORS</h3>
                                  <ul>
                                    <li><a href="">Bags &amp; Cases</a></li>
                                    <li><a href="">Binoculars &amp; Scopes</a></li>
                                    <li><a href="">Digital Cameras</a></li>
                                    <li><a href="">Film Photography</a></li>
                                    <li><a href="">Lighting &amp; Studio</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="cat-item has-children"><a href="">Business &amp; Money</a>
                              <ul className="sub-menu">
                                <li><a href="">Brake Tools</a></li>
                                <li><a href="">Driveshafts</a></li>
                                <li><a href="">Emergency Brake</a></li>
                                <li><a href="">Spools</a></li>
                              </ul>
                            </li>
                            <li className="cat-item has-children"><a href="">Calendars</a>
                              <ul className="sub-menu">
                                <li><a href="">Brake Tools</a></li>
                                <li><a href="">Driveshafts</a></li>
                                <li><a href="">Emergency Brake</a></li>
                                <li><a href="">Spools</a></li>
                              </ul>
                            </li>
                            <li className="cat-item has-children"><a href="">Children's Books</a>
                              <ul className="sub-menu">
                                <li><a href="">Brake Tools</a></li>
                                <li><a href="">Driveshafts</a></li>
                                <li><a href="">Emergency Brake</a></li>
                                <li><a href="">Spools</a></li>
                              </ul>
                            </li>
                            <li className="cat-item has-children"><a href="">Comics</a>
                              <ul className="sub-menu">
                                <li><a href="">Brake Tools</a></li>
                                <li><a href="">Driveshafts</a></li>
                                <li><a href="">Emergency Brake</a></li>
                                <li><a href="">Spools</a></li>
                              </ul>
                            </li>
                            <li className="cat-item"><a href="">Perfomance Filters</a></li>
                            <li className="cat-item has-children"><a href="">Cookbooks</a>
                              <ul className="sub-menu">
                                <li><a href="">Brake Tools</a></li>
                                <li><a href="">Driveshafts</a></li>
                                <li><a href="">Emergency Brake</a></li>
                                <li><a href="">Spools</a></li>
                              </ul>
                            </li>
                            <li className="cat-item "><a href="">Accessories</a></li>
                            <li className="cat-item "><a href="">Education</a></li>
                            <li className="cat-item hidden-menu-item"><a href="">Indoor Living</a></li>
                            <li className="cat-item"><a href="" className="js-expand-hidden-menu">More
                                Categories</a></li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div className="col-md-3 col-5  order-md-3 text-right">
                      <div className="mobile-header-btns header-top-widget">
                        <ul className="header-links">
                          <li className="sin-link">
                            <a href="cart.html" className="cart-link link-icon"><i className="ion-bag" /></a>
                          </li>
                          <li className="sin-link">
                            <a href="javascript:" className="link-icon hamburgur-icon off-canvas-btn"><i className="ion-navicon" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              {/*Off Canvas Navigation Start*/}
              <aside className="off-canvas-wrapper">
                <div className="btn-close-off-canvas">
                  <i className="ion-android-close" />
                </div>
                <div className="off-canvas-inner">
                  {/* search box start */}
                  <div className="search-box offcanvas">
                    <form>
                      <input type="text" placeholder="Search Here" />
                      <button className="search-btn"><i className="ion-ios-search-strong" /></button>
                    </form>
                  </div>
                  {/* search box end */}
                  {/* mobile menu start */}
                  <div className="mobile-navigation">
                    {/* mobile menu navigation start */}
                    <nav className="off-canvas-nav">
                      <ul className="mobile-menu main-mobile-menu">
                        <li className="menu-item-has-children">
                          <a href="">Home</a>
                          <ul className="sub-menu">
                            <li> <a href="index.html">Home One</a></li>
                            <li> <a href="index-2.html">Home Two</a></li>
                            <li> <a href="index-3.html">Home Three</a></li>
                            <li> <a href="index-4.html">Home Four</a></li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="">Blog</a>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <a href="">Blog Grid</a>
                              <ul className="sub-menu">
                                <li><a href="blog.html">Full Widh (Default)</a></li>
                                <li><a href="blog-left-sidebar.html">left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="">Blog List</a>
                              <ul className="sub-menu">
                                <li><a href="blog-list.html">Full Widh (Default)</a></li>
                                <li><a href="blog-list-left-sidebar.html">left Sidebar</a></li>
                                <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="">Blog Details</a>
                              <ul className="sub-menu">
                                <li><a href="blog-details.html">Image Format (Default)</a></li>
                                <li><a href="blog-details-gallery.html">Gallery Format</a></li>
                                <li><a href="blog-details-audio.html">Audio Format</a></li>
                                <li><a href="blog-details-video.html">Video Format</a></li>
                                <li><a href="blog-details-left-sidebar.html">left Sidebar</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="">Shop</a>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <a href="">Shop Grid</a>
                              <ul className="sub-menu">
                                <li><a href="shop-grid.html">Fullwidth</a></li>
                                <li><a href="shop-grid-left-sidebar.html">left Sidebar</a></li>
                                <li><a href="shop-grid-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="">Shop List</a>
                              <ul className="sub-menu">
                                <li><a href="shop-list.html">Fullwidth</a></li>
                                <li><a href="shop-list-left-sidebar.html">left Sidebar</a></li>
                                <li><a href="shop-list-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="">Product Details 1</a>
                              <ul className="sub-menu">
                                <li><a href="product-details.html">Product Details Page</a></li>
                                <li><a href="product-details-affiliate.html">Product Details
                                    Affiliate</a></li>
                                <li><a href="product-details-group.html">Product Details Group</a></li>
                                <li><a href="product-details-variable.html">Product Details
                                    Variables</a></li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="">Product Details 2</a>
                              <ul className="sub-menu">
                                <li><a href="product-details-left-thumbnail.html">left Thumbnail</a>
                                </li>
                                <li><a href="product-details-right-thumbnail.html">Right Thumbnail</a>
                                </li>
                                <li><a href="product-details-left-gallery.html">Left Gallery</a></li>
                                <li><a href="product-details-right-gallery.html">Right Gallery</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="">Pages</a>
                          <ul className="sub-menu">
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="compare.html">Compare</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="login-register.html">Login Register</a></li>
                            <li><a href="my-account.html">My Account</a></li>
                            <li><a href="order-complete.html">Order Complete</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="contact-2.html">contact 02</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                    {/* mobile menu navigation end */}
                  </div>
                  {/* mobile menu end */}
                  <nav className="off-canvas-nav">
                    <ul className="mobile-menu menu-block-2">
                      <li className="menu-item-has-children">
                        <a href="">Currency - USD $ <i className="fas fa-angle-down" /></a>
                        <ul className="sub-menu">
                          <li> <a href="cart.html">USD $</a></li>
                          <li> <a href="checkout.html">EUR €</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="">Lang - Eng<i className="fas fa-angle-down" /></a>
                        <ul className="sub-menu">
                          <li>Eng</li>
                          <li>Ban</li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="">My Account <i className="fas fa-angle-down" /></a>
                        <ul className="sub-menu">
                          <li><a href="">My Account</a></li>
                          <li><a href="">Order History</a></li>
                          <li><a href="">Transactions</a></li>
                          <li><a href="">Downloads</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div className="off-canvas-bottom">
                    <div className="contact-list mb--10">
                      <a href="" className="sin-contact"><i className="fas fa-mobile-alt" />(12345) 78790220</a>
                      <a href="" className="sin-contact"><i className="fas fa-envelope" />examle@handart.com</a>
                    </div>
                    <div className="off-canvas-social">
                      <a href="" className="single-icon"><i className="fab fa-facebook-f" /></a>
                      <a href="" className="single-icon"><i className="fab fa-twitter" /></a>
                      <a href="" className="single-icon"><i className="fas fa-rss" /></a>
                      <a href="" className="single-icon"><i className="fab fa-youtube" /></a>
                      <a href="" className="single-icon"><i className="fab fa-google-plus-g" /></a>
                      <a href="" className="single-icon"><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </aside>
              {/*Off Canvas Navigation End*/}
            </div>
            <div className="sticky-init fixed-header common-sticky">
              <div className="container d-none d-lg-block">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <a href="index.html" className="site-brand">
                      <img src="image/logo.png" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-8">
                    <div className="main-navigation flex-lg-right">
                      <ul className="main-menu menu-right ">
                        <li className="menu-item has-children">
                          <a href="javascript:void(0)">Home <i className="fas fa-chevron-down dropdown-arrow" /></a>
                          <ul className="sub-menu">
                            <li> <a href="index.html">Home One</a></li>
                            <li> <a href="index-2.html">Home Two</a></li>
                            <li> <a href="index-3.html">Home Three</a></li>
                            <li> <a href="index-4.html">Home Four</a></li>
                          </ul>
                        </li>
                        {/* Shop */}
                        <li className="menu-item has-children mega-menu">
                          <a href="javascript:void(0)">shop <i className="fas fa-chevron-down dropdown-arrow" /></a>
                          <ul className="sub-menu four-column">
                            <li className="cus-col-25">
                              <h3 className="menu-title"><a href="javascript:void(0)">Shop Grid </a></h3>
                              <ul className="mega-single-block">
                                <li><a href="shop-grid.html">Fullwidth</a></li>
                                <li><a href="shop-grid-left-sidebar.html">left Sidebar</a></li>
                                <li><a href="shop-grid-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="cus-col-25">
                              <h3 className="menu-title"> <a href="javascript:void(0)">Shop List</a></h3>
                              <ul className="mega-single-block">
                                <li><a href="shop-list.html">Fullwidth</a></li>
                                <li><a href="shop-list-left-sidebar.html">left Sidebar</a></li>
                                <li><a href="shop-list-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="cus-col-25">
                              <h3 className="menu-title"> <a href="javascript:void(0)">Product Details 1</a>
                              </h3>
                              <ul className="mega-single-block">
                                <li><a href="product-details.html">Product Details Page</a></li>
                                <li><a href="product-details-affiliate.html">Product Details
                                    Affiliate</a></li>
                                <li><a href="product-details-group.html">Product Details Group</a></li>
                                <li><a href="product-details-variable.html">Product Details
                                    Variables</a></li>
                              </ul>
                            </li>
                            <li className="cus-col-25">
                              <h3 className="menu-title"><a href="javascript:void(0)">Product Details 2</a>
                              </h3>
                              <ul className="mega-single-block">
                                <li><a href="product-details-left-thumbnail.html">left Thumbnail</a>
                                </li>
                                <li><a href="product-details-right-thumbnail.html">Right Thumbnail</a>
                                </li>
                                <li><a href="product-details-left-gallery.html">Left Gallery</a></li>
                                <li><a href="product-details-right-gallery.html">Right Gallery</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        {/* Pages */}
                        <li className="menu-item has-children">
                          <a href="javascript:void(0)">Pages <i className="fas fa-chevron-down dropdown-arrow" /></a>
                          <ul className="sub-menu">
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="compare.html">Compare</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="login-register.html">Login Register</a></li>
                            <li><a href="my-account.html">My Account</a></li>
                            <li><a href="order-complete.html">Order Complete</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="contact-2.html">contact 02</a></li>
                          </ul>
                        </li>
                        {/* Blog */}
                        <li className="menu-item has-children mega-menu">
                          <a href="javascript:void(0)">Blog <i className="fas fa-chevron-down dropdown-arrow" /></a>
                          <ul className="sub-menu three-column">
                            <li className="cus-col-33">
                              <h3 className="menu-title"><a href="javascript:void(0)">Blog Grid</a></h3>
                              <ul className="mega-single-block">
                                <li><a href="blog.html">Full Widh (Default)</a></li>
                                <li><a href="blog-left-sidebar.html">left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="cus-col-33">
                              <h3 className="menu-title"><a href="javascript:void(0)">Blog List </a></h3>
                              <ul className="mega-single-block">
                                {/* <li><a href="blog-list.html">Full Widh (Default)</a></li> */}
                                <li><a href="blog-list-left-sidebar.html">left Sidebar</a></li>
                                <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="cus-col-33">
                              <h3 className="menu-title"><a href="javascript:void(0)">Blog Details</a></h3>
                              <ul className="mega-single-block">
                                <li><a href="blog-details.html">Image Format (Default)</a></li>
                                <li><a href="blog-details-gallery.html">Gallery Format</a></li>
                                <li><a href="blog-details-audio.html">Audio Format</a></li>
                                <li><a href="blog-details-video.html">Video Format</a></li>
                                <li><a href="blog-details-left-sidebar.html">left Sidebar</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="breadcrumb-section">
              <h2 className="sr-only">Site Breadcrumb</h2>
              <div className="container">
                <div className="breadcrumb-contents">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active">Product Details</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </section>
            <main className="inner-page-sec-padding-bottom">
              <div className="container">
                <div className="row  mb--60">
                  <div className="col-lg-5 mb--30">
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
                  <div className="col-lg-7">
                    <div className="product-details-info pl-lg--30 ">
                      <p className="tag-block">Tags: <a href="">Movado</a>, <a href="">Omega</a></p>
                      <h3 className="product-title">Beats EP Wired On-Ear Headphone-Black</h3>
                      <ul className="list-unstyled">
                        <li>Ex Tax: <span className="list-value"> £60.24</span></li>
                        <li>Brands: <a href="" className="list-value font-weight-bold"> Canon</a></li>
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
                          <a href="">(1 Reviews)</a> <span>|</span>
                          <a href="">Write a review</a>
                        </div>
                      </div>
                      <article className="product-details-article">
                        <h4 className="sr-only">Product Summery</h4>
                        <p>Long printed dress with thin adjustable straps. V-neckline and wiring under the Dust
                          with ruffles at the bottom of the
                          dress.</p>
                      </article>
                      <div className="add-to-cart-row">
                        <div className="count-input-block">
                          <span className="widget-label">Qty</span>
                          <input type="number" className="form-control text-center" defaultValue={1} />
                        </div>
                        <div className="add-cart-btn">
                          <a href="" className="btn btn-outlined--primary"><span className="plus-icon">+</span>Add to
                            Cart</a>
                        </div>
                      </div>
                      <div className="compare-wishlist-row">
                        <a href="" className="add-link"><i className="fas fa-heart" />Add to Wish List</a>
                        <a href="" className="add-link"><i className="fas fa-random" />Add to Compare</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sb-custom-tab review-tab section-padding">
                  <ul className="nav nav-tabs nav-style-2" id="myTab2" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="tab1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                        DESCRIPTION
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="tab2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="true">
                        REVIEWS (1)
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content space-db--20" id="myTabContent">
                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                      <article className="review-article">
                        <h1 className="sr-only">Tab Article</h1>
                        <p>Fashion has been creating well-designed collections since 2010. The brand offers
                          feminine designs delivering
                          stylish
                          separates and statement dresses which have since evolved into a full ready-to-wear
                          collection in which every
                          item is
                          a
                          vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful
                          elegance and unmistakable
                          signature
                          style. All the beautiful pieces are made in Italy and manufactured with the greatest
                          attention. Now Fashion
                          extends
                          to
                          a range of accessories including shoes, hats, belts and more!</p>
                      </article>
                    </div>
                    <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                      <div className="review-wrapper">
                        <h2 className="title-lg mb--20">1 REVIEW FOR AUCTOR GRAVIDA ENIM</h2>
                        <div className="review-comment mb--20">
                          <div className="avatar">
                            <img src="image/icon/author-logo.png" alt="" />
                          </div>
                          <div className="text">
                            <div className="rating-block mb--15">
                              <span className="ion-android-star-outline star_on" />
                              <span className="ion-android-star-outline star_on" />
                              <span className="ion-android-star-outline star_on" />
                              <span className="ion-android-star-outline" />
                              <span className="ion-android-star-outline" />
                            </div>
                            <h6 className="author">ADMIN – <span className="font-weight-400">March 23, 2015</span>
                            </h6>
                            <p>Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio
                              quis mi.</p>
                          </div>
                        </div>
                        <h2 className="title-lg mb--20 pt--15">ADD A REVIEW</h2>
                        <div className="rating-row pt-2">
                          <p className="d-block">Your Rating</p>
                          <span className="rating-widget-block">
                            <input type="radio" name="star" id="star1" />
                            <label htmlFor="star1" />
                            <input type="radio" name="star" id="star2" />
                            <label htmlFor="star2" />
                            <input type="radio" name="star" id="star3" />
                            <label htmlFor="star3" />
                            <input type="radio" name="star" id="star4" />
                            <label htmlFor="star4" />
                            <input type="radio" name="star" id="star5" />
                            <label htmlFor="star5" />
                          </span>
                          <form action="https://demo.hasthemes.com/pustok-preview/pustok/" className="mt--15 site-form ">
                            <div className="row">
                              <div className="col-12">
                                <div className="form-group">
                                  <label htmlFor="message">Comment</label>
                                  <textarea name="message" id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <label htmlFor="name">Name *</label>
                                  <input type="text" id="name" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <label htmlFor="email">Email *</label>
                                  <input type="text" id="email" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <label htmlFor="website">Website</label>
                                  <input type="text" id="website" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="submit-btn">
                                  <a href="" className="btn btn-black">Post Comment</a>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="tab-product-details">
    <div class="brand">
      <img src="image/others/review-tab-product-details.jpg" alt="">
    </div>
    <h5 class="meta">Reference <span class="small-text">demo_5</span></h5>
    <h5 class="meta">In stock <span class="small-text">297 Items</span></h5>
    <section class="product-features">
      <h3 class="title">Data sheet</h3>
      <dl class="data-sheet">
        <dt class="name">Compositions</dt>
        <dd class="value">Viscose</dd>
        <dt class="name">Styles</dt>
        <dd class="value">Casual</dd>
        <dt class="name">Properties</dt>
        <dd class="value">Maxi Dress</dd>
      </dl>
    </section>
  </div> */}
              </div>
              {/*=================================
      RELATED PRODUCTS BOOKS
  ===================================== */}
              <section className>
                <div className="container">
                  <div className="section-title section-title--bordered">
                    <h2>RELATED PRODUCTS</h2>
                  </div>
                  <div className="product-slider sb-slick-slider slider-border-single-row" data-slick-setting="{
                  &quot;autoplay&quot;: true,
                  &quot;autoplaySpeed&quot;: 8000,
                  &quot;slidesToShow&quot;: 4,
                  &quot;dots&quot;:true
              }" data-slick-responsive="[
                  {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4} },
                  {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                  {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                  {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
              ]">
                    <div className="single-slide">
                      <div className="product-card">
                        <div className="product-header">
                          <a href="" className="author">
                            Lpple
                          </a>
                          <h3><a href="product-details.html">Revolutionize Your BOOK With</a></h3>
                        </div>
                        <div className="product-card--body">
                          <div className="card-image">
                            <img src="image/products/product-10.jpg" alt="" />
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
                                <a href="" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                          <a href="" className="author">
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
                                <a href="" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                          <a href="" className="author">
                            Wpple
                          </a>
                          <h3><a href="product-details.html">3 Ways Create Better BOOK With</a></h3>
                        </div>
                        <div className="product-card--body">
                          <div className="card-image">
                            <img src="image/products/product-3.jpg" alt="" />
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
                                <a href="" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                          <a href="" className="author">
                            Epple
                          </a>
                          <h3><a href="product-details.html">What You Can Learn From Bill Gates</a>
                          </h3>
                        </div>
                        <div className="product-card--body">
                          <div className="card-image">
                            <img src="image/products/product-5.jpg" alt="" />
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
                                <a href="" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                          <a href="" className="author">
                            Hpple
                          </a>
                          <h3><a href="product-details.html">a Half Very Simple Things You To</a></h3>
                        </div>
                        <div className="product-card--body">
                          <div className="card-image">
                            <img src="image/products/product-6.jpg" alt="" />
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
                                <a href="" data-toggle="modal" data-target="#quickModal" className="single-btn">
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
                            <p className="tag-block">Tags: <a href="">Movado</a>, <a href="">Omega</a></p>
                            <h3 className="product-title">Beats EP Wired On-Ear Headphone-Black</h3>
                            <ul className="list-unstyled">
                              <li>Ex Tax: <span className="list-value"> £60.24</span></li>
                              <li>Brands: <a href="" className="list-value font-weight-bold"> Canon</a></li>
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
                                <a href="">(1 Reviews)</a> <span>|</span>
                                <a href="">Write a review</a>
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
                                <a href="" className="btn btn-outlined--primary"><span className="plus-icon">+</span>Add to Cart</a>
                              </div>
                            </div>
                            <div className="compare-wishlist-row">
                              <a href="" className="add-link"><i className="fas fa-heart" />Add to Wish List</a>
                              <a href="" className="add-link"><i className="fas fa-random" />Add to Compare</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="widget-social-share">
                        <span className="widget-label">Share:</span>
                        <div className="modal-social-share">
                          <a href="" className="single-icon"><i className="fab fa-facebook-f" /></a>
                          <a href="" className="single-icon"><i className="fab fa-twitter" /></a>
                          <a href="" className="single-icon"><i className="fab fa-youtube" /></a>
                          <a href="" className="single-icon"><i className="fab fa-google-plus-g" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
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
      )
    }
  }