import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="site-wrapper" id="top">
          <div className="site-header d-none d-lg-block">
            <div className="header-middle pt--10 pb--10">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 ">
                    <a href="index.html" className="site-brand">
                      <img src="/image/logo.png" alt="logo here" />
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <div className="header-phone ">
                      <div className="icon">
                        <i className="fas fa-headphones-alt" />
                      </div>
                      <div className="text">
                        <p>Free Support 24/7</p>
                        <p className="font-weight-bold number">+01-202-555-0181</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="main-navigation flex-lg-right">
                      <ul className="main-menu menu-right ">
                        <li className="menu-item has-children">
                          <a href="javascript:void(0)">Home <i className="fas fa-chevron-down dropdown-arrow" /></a>
                          <ul className="sub-menu">
                            <li> <a href="index.html">Home One</a></li>
                            <li> <a href="index-2.html">Home Two</a></li>
                            <li> <a href="index-3.html">Home Three</a></li>
                            <li> <a href="index-4.html">Home Four</a></li>
                            <li> <a href="index-5.html">Home Five</a></li>
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
                              <h3 className="menu-title"> <a href="javascript:void(0)">Product Details
                                  1</a></h3>
                              <ul className="mega-single-block">
                                <li><a href="product-details.html">Product Details Page</a></li>
                                <li><a href="product-details-affiliate.html">Product Details
                                    Affiliate</a></li>
                                <li><a href="product-details-group.html">Product Details Group</a>
                                </li>
                                <li><a href="product-details-variable.html">Product Details
                                    Variables</a></li>
                              </ul>
                            </li>
                            <li className="cus-col-25">
                              <h3 className="menu-title"><a href="javascript:void(0)">Product Details
                                  2</a></h3>
                              <ul className="mega-single-block">
                                <li><a href="product-details-left-thumbnail.html">left Thumbnail</a>
                                </li>
                                <li><a href="product-details-right-thumbnail.html">Right
                                    Thumbnail</a></li>
                                <li><a href="product-details-left-gallery.html">Left Gallery</a>
                                </li>
                                <li><a href="product-details-right-gallery.html">Right Gallery</a>
                                </li>
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
                              <h3 className="menu-title"><a href="javascript:void(0)">Blog Details</a>
                              </h3>
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
            <div className="header-bottom pb--10">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <nav className="category-nav   ">
                      <div>
                        <a href="javascript:void(0)" className="category-trigger"><i className="fa fa-bars" />Browse
                          categories</a>
                        <ul className="category-menu">
                          <li className="cat-item has-children">
                            <a href="#">Arts &amp; Photography</a>
                            <ul className="sub-menu">
                              <li><a href="#">Bags &amp; Cases</a></li>
                              <li><a href="#">Binoculars &amp; Scopes</a></li>
                              <li><a href="#">Digital Cameras</a></li>
                              <li><a href="#">Film Photography</a></li>
                              <li><a href="#">Lighting &amp; Studio</a></li>
                            </ul>
                          </li>
                          <li className="cat-item has-children mega-menu"><a href="#">Biographies</a>
                            <ul className="sub-menu">
                              <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                  <li><a href="#">Bags &amp; Cases</a></li>
                                  <li><a href="#">Binoculars &amp; Scopes</a></li>
                                  <li><a href="#">Digital Cameras</a></li>
                                  <li><a href="#">Film Photography</a></li>
                                  <li><a href="#">Lighting &amp; Studio</a></li>
                                </ul>
                              </li>
                              <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                  <li><a href="#">Bags &amp; Cases</a></li>
                                  <li><a href="#">Binoculars &amp; Scopes</a></li>
                                  <li><a href="#">Digital Cameras</a></li>
                                  <li><a href="#">Film Photography</a></li>
                                  <li><a href="#">Lighting &amp; Studio</a></li>
                                </ul>
                              </li>
                              <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                  <li><a href="#">Bags &amp; Cases</a></li>
                                  <li><a href="#">Binoculars &amp; Scopes</a></li>
                                  <li><a href="#">Digital Cameras</a></li>
                                  <li><a href="#">Film Photography</a></li>
                                  <li><a href="#">Lighting &amp; Studio</a></li>
                                </ul>
                              </li>
                              <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                  <li><a href="#">Bags &amp; Cases</a></li>
                                  <li><a href="#">Binoculars &amp; Scopes</a></li>
                                  <li><a href="#">Digital Cameras</a></li>
                                  <li><a href="#">Film Photography</a></li>
                                  <li><a href="#">Lighting &amp; Studio</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="cat-item has-children"><a href="#">Business &amp; Money</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item has-children"><a href="#">Calendars</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item has-children"><a href="#">Children's Books</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item has-children"><a href="#">Comics</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item"><a href="#">Perfomance Filters</a></li>
                          <li className="cat-item has-children"><a href="#">Cookbooks</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item "><a href="#">Accessories</a></li>
                          <li className="cat-item "><a href="#">Education</a></li>
                          <li className="cat-item hidden-menu-item"><a href="#">Indoor Living</a></li>
                          <li className="cat-item"><a href="#" className="js-expand-hidden-menu">More
                              Categories</a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="col-lg-5">
                    <div className="header-search-block">
                      <input type="text" placeholder="Search entire store here" />
                      <button>Search</button>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="main-navigation flex-lg-right">
                      <div className="cart-widget">
                        <div className="login-block">
                          <a href="login-register.html" className="font-weight-bold">Login</a> <br />
                          <span>or</span><a href="login-register.html">Register</a>
                        </div>
                        <div className="cart-block">
                          <div className="cart-total">
                            <span className="text-number">
                              1
                            </span>
                            <span className="text-item">
                              Shopping Cart
                            </span>
                            <span className="price">
                              £0.00
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                          <div className="cart-dropdown-block">
                            <div className=" single-cart-block ">
                              <div className="cart-product">
                                <a href="product-details.html" className="image">
                                  <img src="../image/products/cart-product-1.jpg" alt="" />
                                </a>
                                <div className="content">
                                  <h3 className="title"><a href="product-details.html">Kodak PIXPRO
                                      Astro Zoom AZ421 16 MP</a>
                                  </h3>
                                  <p className="price"><span className="qty">1 ×</span> £87.34</p>
                                  <button className="cross-btn"><i className="fas fa-times" /></button>
                                </div>
                              </div>
                            </div>
                            <div className=" single-cart-block ">
                              <div className="btn-block">
                                <a href="cart.html" className="btn">View Cart <i className="fas fa-chevron-right" /></a>
                                <a href="checkout.html" className="btn btn--primary">Check Out <i className="fas fa-chevron-right" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-mobile-menu">
            <header className="mobile-header d-block d-lg-none pt--10 pb-md--10">
              <div className="container">
                <div className="row align-items-sm-end align-items-center">
                  <div className="col-md-4 col-7">
                    <a href="index.html" className="site-brand">
                      <img src="../image/logo.png" alt="" />
                    </a>
                  </div>
                  <div className="col-md-5 order-3 order-md-2">
                    <nav className="category-nav   ">
                      <div>
                        <a href="javascript:void(0)" className="category-trigger"><i className="fa fa-bars" />Browse
                          categories</a>
                        <ul className="category-menu">
                          <li className="cat-item has-children">
                            <a href="#">Arts &amp; Photography</a>
                            <ul className="sub-menu">
                              <li><a href="#">Bags &amp; Cases</a></li>
                              <li><a href="#">Binoculars &amp; Scopes</a></li>
                              <li><a href="#">Digital Cameras</a></li>
                              <li><a href="#">Film Photography</a></li>
                              <li><a href="#">Lighting &amp; Studio</a></li>
                            </ul>
                          </li>
                          <li className="cat-item has-children mega-menu"><a href="#">Biographies</a>
                            <ul className="sub-menu">
                              <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                  <li><a href="#">Bags &amp; Cases</a></li>
                                  <li><a href="#">Binoculars &amp; Scopes</a></li>
                                  <li><a href="#">Digital Cameras</a></li>
                                  <li><a href="#">Film Photography</a></li>
                                  <li><a href="#">Lighting &amp; Studio</a></li>
                                </ul>
                              </li>
                              <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                  <li><a href="#">Bags &amp; Cases</a></li>
                                  <li><a href="#">Binoculars &amp; Scopes</a></li>
                                  <li><a href="#">Digital Cameras</a></li>
                                  <li><a href="#">Film Photography</a></li>
                                  <li><a href="#">Lighting &amp; Studio</a></li>
                                </ul>
                              </li>
                              <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                  <li><a href="#">Bags &amp; Cases</a></li>
                                  <li><a href="#">Binoculars &amp; Scopes</a></li>
                                  <li><a href="#">Digital Cameras</a></li>
                                  <li><a href="#">Film Photography</a></li>
                                  <li><a href="#">Lighting &amp; Studio</a></li>
                                </ul>
                              </li>
                              <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                  <li><a href="#">Bags &amp; Cases</a></li>
                                  <li><a href="#">Binoculars &amp; Scopes</a></li>
                                  <li><a href="#">Digital Cameras</a></li>
                                  <li><a href="#">Film Photography</a></li>
                                  <li><a href="#">Lighting &amp; Studio</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="cat-item has-children"><a href="#">Business &amp; Money</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item has-children"><a href="#">Calendars</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item has-children"><a href="#">Children's Books</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item has-children"><a href="#">Comics</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item"><a href="#">Perfomance Filters</a></li>
                          <li className="cat-item has-children"><a href="#">Cookbooks</a>
                            <ul className="sub-menu">
                              <li><a href="#">Brake Tools</a></li>
                              <li><a href="#">Driveshafts</a></li>
                              <li><a href="#">Emergency Brake</a></li>
                              <li><a href="#">Spools</a></li>
                            </ul>
                          </li>
                          <li className="cat-item "><a href="#">Accessories</a></li>
                          <li className="cat-item "><a href="#">Education</a></li>
                          <li className="cat-item hidden-menu-item"><a href="#">Indoor Living</a></li>
                          <li className="cat-item"><a href="#" className="js-expand-hidden-menu">More
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
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li> <a href="index.html">Home One</a></li>
                          <li> <a href="index-2.html">Home Two</a></li>
                          <li> <a href="index-3.html">Home Three</a></li>
                          <li> <a href="index-4.html">Home Four</a></li>
                          <li> <a href="index-5.html">Home Five</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Blog Grid</a>
                            <ul className="sub-menu">
                              <li><a href="blog.html">Full Widh (Default)</a></li>
                              <li><a href="blog-left-sidebar.html">left Sidebar</a></li>
                              <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Blog List</a>
                            <ul className="sub-menu">
                              <li><a href="blog-list.html">Full Widh (Default)</a></li>
                              <li><a href="blog-list-left-sidebar.html">left Sidebar</a></li>
                              <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Blog Details</a>
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
                        <a href="#">Shop</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Shop Grid</a>
                            <ul className="sub-menu">
                              <li><a href="shop-grid.html">Fullwidth</a></li>
                              <li><a href="shop-grid-left-sidebar.html">left Sidebar</a></li>
                              <li><a href="shop-grid-right-sidebar.html">Right Sidebar</a></li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Shop List</a>
                            <ul className="sub-menu">
                              <li><a href="shop-list.html">Fullwidth</a></li>
                              <li><a href="shop-list-left-sidebar.html">left Sidebar</a></li>
                              <li><a href="shop-list-right-sidebar.html">Right Sidebar</a></li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Product Details 1</a>
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
                            <a href="#">Product Details 2</a>
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
                        <a href="#">Pages</a>
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
                      <a href="#">Currency - USD $ <i className="fas fa-angle-down" /></a>
                      <ul className="sub-menu">
                        <li> <a href="cart.html">USD $</a></li>
                        <li> <a href="checkout.html">EUR €</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Lang - Eng<i className="fas fa-angle-down" /></a>
                      <ul className="sub-menu">
                        <li>Eng</li>
                        <li>Ban</li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">My Account <i className="fas fa-angle-down" /></a>
                      <ul className="sub-menu">
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Transactions</a></li>
                        <li><a href="#">Downloads</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="off-canvas-bottom">
                  <div className="contact-list mb--10">
                    <a href="#" className="sin-contact"><i className="fas fa-mobile-alt" />(12345) 78790220</a>
                    <a href="#" className="sin-contact"><i className="fas fa-envelope" />examle@handart.com</a>
                  </div>
                  <div className="off-canvas-social">
                    <a href="#" className="single-icon"><i className="fab fa-facebook-f" /></a>
                    <a href="#" className="single-icon"><i className="fab fa-twitter" /></a>
                    <a href="#" className="single-icon"><i className="fas fa-rss" /></a>
                    <a href="#" className="single-icon"><i className="fab fa-youtube" /></a>
                    <a href="#" className="single-icon"><i className="fab fa-google-plus-g" /></a>
                    <a href="#" className="single-icon"><i className="fab fa-instagram" /></a>
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
                    <img src="../image/logo.png" alt="" />
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
                          <li> <a href="index-5.html">Home Five</a></li>
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
          {/*=================================
        Hero Area
        ===================================== */}
          <section className="hero-area hero-slider-1">
            <div className="sb-slick-slider" data-slick-setting="{
                            &quot;autoplay&quot;: true,
                            &quot;fade&quot;: true,
                            &quot;autoplaySpeed&quot;: 3000,
                            &quot;speed&quot;: 3000,
                            &quot;slidesToShow&quot;: 1,
                            &quot;dots&quot;:true
                            }">
              <div className="single-slide bg-shade-whisper  ">
                <div className="container">
                  <div className="home-content text-center text-sm-left position-relative">
                    <div className="hero-partial-image image-right">
                      <img src="../image/bg-images/home-slider-2-ai.png" alt="" />
                    </div>
                    <div className="row no-gutters ">
                      <div className="col-xl-6 col-md-6 col-sm-7">
                        <div className="home-content-inner content-left-side">
                          <h1>H.G. Wells<br />
                            De Vengeance</h1>
                          <h2>Cover Up Front Of Books and Leave Summary</h2>
                          <a href="shop-grid.html" className="btn btn-outlined--primary">
                            $78.09 - Order Now!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slide bg-ghost-white">
                <div className="container">
                  <div className="home-content text-center text-sm-left position-relative">
                    <div className="hero-partial-image image-left">
                      <img src="../image/bg-images/home-slider-1-ai.png" alt="" />
                    </div>
                    <div className="row align-items-center justify-content-start justify-content-md-end">
                      <div className="col-lg-6 col-xl-7 col-md-6 col-sm-7">
                        <div className="home-content-inner content-right-side">
                          <h1>J.D. Kurtness <br />
                            De Vengeance</h1>
                          <h2>Cover Up Front Of Books and Leave Summary</h2>
                          <a href="shop-grid.html" className="btn btn-outlined--primary">
                            $78.09 - Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*=================================
        Home Features Section
        ===================================== */}
          <section className="mb--30">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-md-6 mt--30">
                  <div className="feature-box h-100">
                    <div className="icon">
                      <i className="fas fa-shipping-fast" />
                    </div>
                    <div className="text">
                      <h5>Free Shipping Item</h5>
                      <p> Orders over $500</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mt--30">
                  <div className="feature-box h-100">
                    <div className="icon">
                      <i className="fas fa-redo-alt" />
                    </div>
                    <div className="text">
                      <h5>Money Back Guarantee</h5>
                      <p>100% money back</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mt--30">
                  <div className="feature-box h-100">
                    <div className="icon">
                      <i className="fas fa-piggy-bank" />
                    </div>
                    <div className="text">
                      <h5>Cash On Delivery</h5>
                      <p>Lorem ipsum dolor amet</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 mt--30">
                  <div className="feature-box h-100">
                    <div className="icon">
                      <i className="fas fa-life-ring" />
                    </div>
                    <div className="text">
                      <h5>Help &amp; Support</h5>
                      <p>Call us : + 0123.4567.89</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*=================================
        Promotion Section One
        ===================================== */}
          <section className="section-margin">
            <h2 className="sr-only">Promotion Section</h2>
            <div className="container">
              <div className="row space-db--30">
                <div className="col-lg-6 col-md-6 mb--30">
                  <a href="#" className="promo-image promo-overlay">
                    <img src="../image/bg-images/promo-banner-with-text.jpg" alt="" />
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 mb--30">
                  <a href="#" className="promo-image promo-overlay">
                    <img src="../image/bg-images/promo-banner-with-text-2.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/*=================================
        Home Slider Tab
        ===================================== */}
          <section className="section-padding">
            <h2 className="sr-only">Home Tab Slider Section</h2>
            <div className="container">
              <div className="sb-custom-tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="shop-tab" data-toggle="tab" href="#shop" role="tab" aria-controls="shop" aria-selected="true">
                      Featured Products
                    </a>
                    <span className="arrow-icon" />
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="men-tab" data-toggle="tab" href="#men" role="tab" aria-controls="men" aria-selected="true">
                      New Arrivals
                    </a>
                    <span className="arrow-icon" />
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="woman-tab" data-toggle="tab" href="#woman" role="tab" aria-controls="woman" aria-selected="false">
                      Most view products
                    </a>
                    <span className="arrow-icon" />
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane show active" id="shop" role="tabpanel" aria-labelledby="shop-tab">
                    <div className="product-slider multiple-row  slider-border-multiple-row  sb-slick-slider" data-slick-setting="{
                            &quot;autoplay&quot;: true,
                            &quot;autoplaySpeed&quot;: 8000,
                            &quot;slidesToShow&quot;: 5,
                            &quot;rows&quot;:2,
                            &quot;dots&quot;:true
                        }" data-slick-responsive="[
                            {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                            {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                            {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                            {&quot;breakpoint&quot;:320, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                        ]">
                      <div className="single-slide">
                        <div className="product-card">
                          <div className="product-header">
                            <a href="#" className="author">
                              jpple
                            </a>
                            <h3><a href="product-details.html">Rpple iPad with Retina Display
                                MD510LL/A</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-1.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-1.jpg" alt="" />
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
                            <h3><a href="product-details.html">Koss KPH7 Lightweight Portable
                                Headphone</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-2.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-3.jpg" alt="" />
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
                              Cpple
                            </a>
                            <h3><a href="product-details.html">Beats EP Wired On-Ear Headphone-Black</a>
                            </h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-3.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-2.jpg" alt="" />
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
                              Dpple
                            </a>
                            <h3><a href="product-details.html">Beats Solo2 Solo 2 Wired On-Ear
                                Headphone</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-4.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-5.jpg" alt="" />
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
                              Lpple
                            </a>
                            <h3><a href="product-details.html">Beats Solo3 Wireless On-Ear Headphones
                                2</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-5.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-4.jpg" alt="" />
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
                              Fpple
                            </a>
                            <h3><a href="product-details.html">3 Ways To Have (A) More Appealing
                                BOOK</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-6.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-7.jpg" alt="" />
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
                            <h3><a href="product-details.html">In 10 Minutes, I'll Give You The Truth
                                About</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-7.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-6.jpg" alt="" />
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
                              Fpple
                            </a>
                            <h3><a href="product-details.html">5 Ways To Get Through To Your BOOK</a>
                            </h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-8.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-9.jpg" alt="" />
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
                              Gpple
                            </a>
                            <h3><a href="product-details.html">What Can You Do To Save Your BOOK</a>
                            </h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-9.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-8.jpg" alt="" />
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
                            <h3><a href="product-details.html">From Destruction By Social Media?</a>
                            </h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-10.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-11.jpg" alt="" />
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
                              Gpple
                            </a>
                            <h3><a href="product-details.html">Find Out More About BOOK By Social
                                Media?</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-11.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-10.jpg" alt="" />
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
                              Vpple
                            </a>
                            <h3><a href="product-details.html">Read This Controversial BOOK By
                                Social Media?</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-12.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-11.jpg" alt="" />
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
                  <div className="tab-pane" id="men" role="tabpanel" aria-labelledby="men-tab">
                    <div className="product-slider multiple-row  slider-border-multiple-row  sb-slick-slider" data-slick-setting="{
                                        &quot;autoplay&quot;: true,
                                        &quot;autoplaySpeed&quot;: 8000,
                                        &quot;slidesToShow&quot;: 5,
                                        &quot;rows&quot;:2,
                                        &quot;dots&quot;:true
                                    }" data-slick-responsive="[
                                        {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                                        {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                                        {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                        {&quot;breakpoint&quot;:320, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                    ]">
                      <div className="single-slide">
                        <div className="product-card">
                          <div className="product-header">
                            <a href="#" className="author">
                              jpple
                            </a>
                            <h3><a href="product-details.html">Bpple iPad with Retina Display
                                MD510LL/A</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-3.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-1.jpg" alt="" />
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
                            <h3><a href="product-details.html">Koss KPH7 Lightweight Portable
                                Headphone</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-2.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-3.jpg" alt="" />
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
                              Cpple
                            </a>
                            <h3><a href="product-details.html">Beats EP Wired On-Ear
                                Headphone-Black</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-1.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-2.jpg" alt="" />
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
                              Dpple
                            </a>
                            <h3><a href="product-details.html">Beats Solo2 Solo 2 Wired On-Ear
                                Headphone</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-4.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-5.jpg" alt="" />
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
                              Lpple
                            </a>
                            <h3><a href="product-details.html">Beats Solo3 Wireless On-Ear
                                Headphones 2</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-7.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-4.jpg" alt="" />
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
                              Fpple
                            </a>
                            <h3><a href="product-details.html">3 Ways To Have (A) More Appealing
                                BOOK</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-6.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-7.jpg" alt="" />
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
                            <h3><a href="product-details.html">In 10 Minutes, I'll Give You The
                                Truth About</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-5.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-6.jpg" alt="" />
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
                              Fpple
                            </a>
                            <h3><a href="product-details.html">5 Ways To Get Through To Your
                                BOOK</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-8.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-9.jpg" alt="" />
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
                              Gpple
                            </a>
                            <h3><a href="product-details.html">What Can You Do To Save Your BOOK</a>
                            </h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-3.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-8.jpg" alt="" />
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
                            <h3><a href="product-details.html">From Destruction By Social Media?</a>
                            </h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-9.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-11.jpg" alt="" />
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
                              Gpple
                            </a>
                            <h3><a href="product-details.html">Find Out More About BOOK By Social
                                Media?</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-10.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-10.jpg" alt="" />
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
                              Apple
                            </a>
                            <h3><a href="product-details.html">Read This Controversial BOOK By
                                Social Media?</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-9.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-11.jpg" alt="" />
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
                  <div className="tab-pane" id="woman" role="tabpanel" aria-labelledby="woman-tab">
                    <div className="product-slider multiple-row  slider-border-multiple-row  sb-slick-slider" data-slick-setting="{
                                        &quot;autoplay&quot;: true,
                                        &quot;autoplaySpeed&quot;: 8000,
                                        &quot;slidesToShow&quot;: 5,
                                        &quot;rows&quot;:2,
                                        &quot;dots&quot;:true
                                    }" data-slick-responsive="[
                                        {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                                        {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                                        {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                        {&quot;breakpoint&quot;:320, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                    ]">
                      <div className="single-slide">
                        <div className="product-card">
                          <div className="product-header">
                            <a href="#" className="author">
                              jpple
                            </a>
                            <h3><a href="product-details.html">Zpple fPad with Retina Display
                                MD510LL/A</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-1.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-1.jpg" alt="" />
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
                            <h3><a href="product-details.html">Koss KPH7 Lightweight Portable
                                Headphone</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-4.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-3.jpg" alt="" />
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
                              Cpple
                            </a>
                            <h3><a href="product-details.html">Beats EP Wired On-Ear
                                Headphone-Black</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-3.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-2.jpg" alt="" />
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
                              Dpple
                            </a>
                            <h3><a href="product-details.html">Beats Solo2 Solo 2 Wired On-Ear
                                Headphone</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-1.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-5.jpg" alt="" />
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
                              Lpple
                            </a>
                            <h3><a href="product-details.html">Beats Solo3 Wireless On-Ear
                                Headphones 2</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-11.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-4.jpg" alt="" />
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
                              Fpple
                            </a>
                            <h3><a href="product-details.html">3 Ways To Have (A) More Appealing
                                BOOK</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-10.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-7.jpg" alt="" />
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
                            <h3><a href="product-details.html">In 10 Minutes, I'll Give You The
                                Truth About</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-9.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-6.jpg" alt="" />
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
                              Fpple
                            </a>
                            <h3><a href="product-details.html">5 Ways To Get Through To Your
                                BOOK</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-8.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-9.jpg" alt="" />
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
                              Gpple
                            </a>
                            <h3><a href="product-details.html">What Can You Do To Save Your BOOK</a>
                            </h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-5.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-8.jpg" alt="" />
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
                            <h3><a href="product-details.html">From Destruction By Social Media?</a>
                            </h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-3.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-11.jpg" alt="" />
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
                              Gpple
                            </a>
                            <h3><a href="product-details.html">Find Out More About BOOK By Social
                                Media?</a></h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-11.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-10.jpg" alt="" />
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
                              Apple
                            </a>
                            <h3><a href="product-details.html">Read This Controversial BOOK By
                                Social Media? Out More</a>
                            </h3>
                          </div>
                          <div className="product-card--body">
                            <div className="card-image">
                              <img src="../image/products/product-12.jpg" alt="" />
                              <div className="hover-contents">
                                <a href="product-details.html" className="hover-image">
                                  <img src="../image/products/product-11.jpg" alt="" />
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
                </div>
              </div>
            </div>
          </section>
          {/*=================================
        Deal of the day 
        ===================================== */}
          <section className="section-margin">
            <div className="container-fluid">
              <div className="promo-section-heading">
                <h2>Deal of the day up to 20% off Special offer</h2>
              </div>
              <div className="product-slider with-countdown  slider-border-single-row sb-slick-slider" data-slick-setting="{
                &quot;autoplay&quot;: true,
                &quot;autoplaySpeed&quot;: 8000,
                &quot;slidesToShow&quot;: 6,
                &quot;dots&quot;:true
            }" data-slick-responsive="[
                {&quot;breakpoint&quot;:1400, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4} },
                {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                {&quot;breakpoint&quot;:490, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
            ]">
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Ypple
                      </a>
                      <h3><a href="product-details.html">Do You Really Need It? This Will Help You
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-2.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-1.jpg" alt="" />
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
                      <div className="count-down-block">
                        <div className="product-countdown" data-countdown="01/05/2020" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Upple
                      </a>
                      <h3><a href="product-details.html">Here Is A Quick Cure For Book</a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-1.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-1.jpg" alt="" />
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
                      <div className="count-down-block">
                        <div className="product-countdown" data-countdown="01/05/2020" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Ypple
                      </a>
                      <h3><a href="product-details.html">a Half Very Simple Things You To Save</a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-3.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-2.jpg" alt="" />
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
                      <div className="count-down-block">
                        <div className="product-countdown" data-countdown="01/05/2020" />
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
                        <img src="../image/products/product-5.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-4.jpg" alt="" />
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
                      <div className="count-down-block">
                        <div className="product-countdown" data-countdown="01/05/2020" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Rpple
                      </a>
                      <h3><a href="product-details.html">Create Better BOOK With The Help Of Your</a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-6.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-4.jpg" alt="" />
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
                      <div className="count-down-block">
                        <div className="product-countdown" data-countdown="01/05/2020" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Tpple
                      </a>
                      <h3><a href="product-details.html">Turn Your BOOK Into High Machine</a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-8.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-7.jpg" alt="" />
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
                      <div className="count-down-block">
                        <div className="product-countdown" data-countdown="01/05/2020" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="product-card">
                    <div className="product-header">
                      <a href="#" className="author">
                        Mpple
                      </a>
                      <h3><a href="product-details.html">Revolutionize Your BOOK With These Easy
                        </a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-13.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-11.jpg" alt="" />
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
                      <div className="count-down-block">
                        <div className="product-countdown" data-countdown="01/05/2020" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*=================================
        Best Seller Product
        ===================================== */}
          <section className="section-margin bg-image section-padding-top section-padding" data-bg="../image/bg-images/best-seller-bg.jpg">
            <div className="container">
              <div className="section-title section-title--bordered mb-0">
                <h2>Best BEST SELLER BOOKS</h2>
              </div>
              <div className="best-seller-block">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-6">
                    <div className="author-image">
                      <img src="../image/others/best-seller-author.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="sb-slick-slider product-slider product-list-slider multiple-row slider-border-multiple-row" data-slick-setting="{
                                    &quot;autoplay&quot;: false,
                                    &quot;autoplaySpeed&quot;: 8000,
                                    &quot;slidesToShow&quot;:2,
                                    &quot;rows&quot;:2,
                                    &quot;dots&quot;:true
                                }" data-slick-responsive="[
                                    {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                    {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                    {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                    {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                    {&quot;breakpoint&quot;:490, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                ]">
                      <div className="single-slide">
                        <div className="product-card card-style-list">
                          <div className="card-image">
                            <img src="../image/products/product-6.jpg" alt="" />
                          </div>
                          <div className="product-card--body">
                            <div className="product-header">
                              <a href="#" className="author">
                                Rpple
                              </a>
                              <h3><a href="product-details.html">Do You Really Need It? This
                                  Will Help You
                                </a></h3>
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
                            <img src="../image/products/product-1.jpg" alt="" />
                          </div>
                          <div className="product-card--body">
                            <div className="product-header">
                              <a href="#" className="author">
                                Epple
                              </a>
                              <h3><a href="product-details.html">Here Is Quick Cure BOOK This
                                  Will Help
                                </a></h3>
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
                            <img src="../image/products/product-2.jpg" alt="" />
                          </div>
                          <div className="product-card--body">
                            <div className="product-header">
                              <a href="#" className="author">
                                Wpple
                              </a>
                              <h3><a href="product-details.html">Do You Really Need It? This
                                  Will Help You
                                </a></h3>
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
                            <img src="../image/products/product-3.jpg" alt="" />
                          </div>
                          <div className="product-card--body">
                            <div className="product-header">
                              <a href="#" className="author">
                                Ypple
                              </a>
                              <h3><a href="product-details.html">Very Simple Things You
                                  Can Save BOOK
                                </a>
                              </h3>
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
                            <img src="../image/products/product-5.jpg" alt="" />
                          </div>
                          <div className="product-card--body">
                            <div className="product-header">
                              <a href="#" className="author">
                                Mople
                              </a>
                              <h3><a href="product-details.html">What You Can Learn From Bill Gates
                                </a></h3>
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
                            <img src="../image/products/product-4.jpg" alt="" />
                          </div>
                          <div className="product-card--body">
                            <div className="product-header">
                              <a href="#" className="author">
                                Cpple
                              </a>
                              <h3><a href="product-details.html">3 Ways Create Better BOOK With
                                  Help
                                </a></h3>
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
          {/*=================================
        CHILDREN’S BOOKS 
        ===================================== */}
          <section className="section-margin">
            <div className="container">
              <div className="section-title section-title--bordered">
                <h2>CHILDREN’S BOOKS</h2>
              </div>
              <div className="product-list-slider slider-two-column product-slider multiple-row sb-slick-slider slider-border-multiple-row" data-slick-setting="{
                                            &quot;autoplay&quot;: true,
                                            &quot;autoplaySpeed&quot;: 8000,
                                            &quot;slidesToShow&quot;:3,
                                            &quot;rows&quot;:2,
                                            &quot;dots&quot;:true
                                        }" data-slick-responsive="[
                                            {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                                            {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                                            {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                            {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                                            {&quot;breakpoint&quot;:490, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                        ]">
                <div className="single-slide">
                  <div className="product-card card-style-list">
                    <div className="card-image">
                      <img src="../image/products/product-2.jpg" alt="" />
                    </div>
                    <div className="product-card--body">
                      <div className="product-header">
                        <a href="#" className="author">
                          Rpple
                        </a>
                        <h3><a href="product-details.html">Revolutionize Your BOOK With</a></h3>
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
                      <img src="../image/products/product-1.jpg" alt="" />
                    </div>
                    <div className="product-card--body">
                      <div className="product-header">
                        <a href="#" className="author">
                          Dpple
                        </a>
                        <h3><a href="product-details.html">Turn Your BOOK Into High Machine</a>
                        </h3>
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
                      <img src="../image/products/product-3.jpg" alt="" />
                    </div>
                    <div className="product-card--body">
                      <div className="product-header">
                        <a href="#" className="author">
                          Epple
                        </a>
                        <h3><a href="product-details.html">BOOK: Do You Really Need It? This </a></h3>
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
                      <img src="../image/products/product-4.jpg" alt="" />
                    </div>
                    <div className="product-card--body">
                      <div className="product-header">
                        <a href="#" className="author">
                          Ppple
                        </a>
                        <h3><a href="product-details.html">Here Is A Quick Cure For Book</a>
                        </h3>
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
                      <img src="../image/products/product-5.jpg" alt="" />
                    </div>
                    <div className="product-card--body">
                      <div className="product-header">
                        <a href="#" className="author">
                          Ypple
                        </a>
                        <h3><a href="product-details.html">What You Can Learn From Bill Gates</a>
                        </h3>
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
                      <img src="../image/products/product-6.jpg" alt="" />
                    </div>
                    <div className="product-card--body">
                      <div className="product-header">
                        <a href="#" className="author">
                          Wpple
                        </a>
                        <h3><a href="product-details.html">3 Ways Create Better BOOK With</a></h3>
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
          {/*=================================
        Promotion Section Two
        ===================================== */}
          <div className="section-margin">
            <div className="container">
              <div className="row space-db--30">
                <div className="col-lg-8 mb--30">
                  <div className="promo-wrapper promo-type-one">
                    <a href="#" className="promo-image  promo-overlay bg-image" data-bg="../image/bg-images/promo-banner-mid.jpg">
                      {/* <img src="../image/bg-images/promo-banner-mid.jpg" alt=""> */}
                    </a>
                    <div className="promo-text">
                      <div className="promo-text-inner">
                        <h2>Buy 3. Get Free 1.</h2>
                        <h3>50% off for selected products in Pustok.</h3>
                        <a href="#" className="btn btn-outlined--red-faded">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb--30">
                  <div className="promo-wrapper promo-type-two ">
                    <a href="#" className="promo-image promo-overlay bg-image" data-bg="../image/bg-images/promo-banner-small.jpg">
                      {/* <img src="../image/bg-images/promo-banner-small.jpg" alt=""> */}
                    </a>
                    <div className="promo-text">
                      <div className="promo-text-inner">
                        <span className="d-block price">$26.00</span>
                        <h2>Praise for <br />
                          The Night Child</h2>
                        <a href="#" className="btn btn-outlined--primary">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=================================
        ARTS & PHOTOGRAPHY BOOKS
        ===================================== */}
          <section className="section-margin">
            <div className="container">
              <div className="section-title section-title--bordered">
                <h2>ARTS &amp; PHOTOGRAPHY BOOKS</h2>
              </div>
              <div className="product-slider sb-slick-slider slider-border-single-row" data-slick-setting="{
                &quot;autoplay&quot;: true,
                &quot;autoplaySpeed&quot;: 8000,
                &quot;slidesToShow&quot;: 5,
                &quot;dots&quot;:true
            }" data-slick-responsive="[
                {&quot;breakpoint&quot;:1500, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4} },
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
                      <h3><a href="product-details.html">Revolutionize Your BOOK With These Easy
                        </a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-2.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-1.jpg" alt="" />
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
                        <img src="../image/products/product-2.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-1.jpg" alt="" />
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
                      <h3><a href="product-details.html">Create Better BOOK With The Help Of Your</a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-3.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-2.jpg" alt="" />
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
                        <img src="../image/products/product-5.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-4.jpg" alt="" />
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
                      <h3><a href="product-details.html">a Half Very Simple Things You To Save</a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-6.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-4.jpg" alt="" />
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
                      <h3><a href="product-details.html">Here Is A Quick Cure For Book</a></h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-8.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-7.jpg" alt="" />
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
                      <h3><a href="product-details.html">Do You Really Need It? This Will Help You
                        </a>
                      </h3>
                    </div>
                    <div className="product-card--body">
                      <div className="card-image">
                        <img src="../image/products/product-13.jpg" alt="" />
                        <div className="hover-contents">
                          <a href="product-details.html" className="hover-image">
                            <img src="../image/products/product-11.jpg" alt="" />
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
          {/*=================================
            Promotion Section Three
        ===================================== */}
          <section className="section-margin">
            <div className="promo-wrapper promo-type-three">
              <a href="#" className="promo-image promo-overlay bg-image" data-bg="../image/bg-images/promo-banner-full.jpg">
              </a>
              <div className="promo-text w-100 ml-0">
                <div className="container">
                  <div className="row w-100">
                    <div className="col-lg-7">
                      <h2>I Love This Idea!</h2>
                      <h3>Cover up front of book and
                        leave summary</h3>
                      <a href="#" className="btn btn--yellow">$78.09 - Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*=================================
        Home Blog Slider
        ===================================== */}
          {/*=================================
        Home Blog
        ===================================== */}
          <section className="section-margin">
            <div className="container">
              <div className="section-title">
                <h2>LATEST BLOGS</h2>
              </div>
              <div className="blog-slider sb-slick-slider" data-slick-setting="{
                &quot;autoplay&quot;: true,
                &quot;autoplaySpeed&quot;: 8000,
                &quot;slidesToShow&quot;: 2,
                &quot;dots&quot;: true
            }" data-slick-responsive="[
                {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
            ]">
                <div className="single-slide">
                  <div className="blog-card">
                    <div className="image">
                      <img src="../image/others/blog-grid-1.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="content-header">
                        <div className="date-badge">
                          <span className="date">
                            13
                          </span>
                          <span className="month">
                            Aug
                          </span>
                        </div>
                        <h3 className="title"><a href="blog-details.html">How to Water and Care for Mounted</a>
                        </h3>
                      </div>
                      <p className="meta-para"><i className="fas fa-user-edit" />Post by <a href="#">Hastech</a></p>
                      <article className="blog-paragraph">
                        <h2 className="sr-only">blog-paragraph</h2>
                        <p>Virtual reality and 3-D technology are already well-established in the
                          entertainment...</p>
                      </article>
                      <a href="blog-details.html" className="card-link">Read More <i className="fas fa-chevron-circle-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="blog-card">
                    <div className="image">
                      <img src="../image/others/blog-grid-2.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="content-header">
                        <div className="date-badge">
                          <span className="date">
                            19
                          </span>
                          <span className="month">
                            Jan
                          </span>
                        </div>
                        <h3 className="title"><a href="blog-details.html">Why You Never See BLOG TITLE That </a>
                        </h3>
                      </div>
                      <p className="meta-para"><i className="fas fa-user-edit" />Post by <a href="#">Hastech</a></p>
                      <article className="blog-paragraph">
                        <h2 className="sr-only">blog-paragraph</h2>
                        <p>Virtual reality and 3-D technology are already well-established in the
                          entertainment...</p>
                      </article>
                      <a href="blog-details.html" className="card-link">Read More <i className="fas fa-chevron-circle-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="single-slide">
                  <div className="blog-card">
                    <div className="image">
                      <img src="../image/others/blog-grid-3.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="content-header">
                        <div className="date-badge">
                          <span className="date">
                            31
                          </span>
                          <span className="month">
                            Aug
                          </span>
                        </div>
                        <h3 className="title"><a href="blog-details.html">What Everyone Must Know About </a>
                        </h3>
                      </div>
                      <p className="meta-para"><i className="fas fa-user-edit" />Post by <a href="#">Hastech</a></p>
                      <article className="blog-paragraph">
                        <h2 className="sr-only">blog-paragraph</h2>
                        <p>Virtual reality and 3-D technology are already well-established in the
                          entertainment...</p>
                      </article>
                      <a href="blog-details.html" className="card-link">Read More <i className="fas fa-chevron-circle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*=================================
        Footer
        ===================================== */}
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
                          <img src="../image/products/product-details-1.jpg" alt="" />
                        </div>
                        <div className="single-slide">
                          <img src="../image/products/product-details-2.jpg" alt="" />
                        </div>
                        <div className="single-slide">
                          <img src="../image/products/product-details-3.jpg" alt="" />
                        </div>
                        <div className="single-slide">
                          <img src="../image/products/product-details-4.jpg" alt="" />
                        </div>
                        <div className="single-slide">
                          <img src="../image/products/product-details-5.jpg" alt="" />
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
                          <img src="../image/products/product-details-1.jpg" alt="" />
                        </div>
                        <div className="single-slide">
                          <img src="../image/products/product-details-2.jpg" alt="" />
                        </div>
                        <div className="single-slide">
                          <img src="../image/products/product-details-3.jpg" alt="" />
                        </div>
                        <div className="single-slide">
                          <img src="../image/products/product-details-4.jpg" alt="" />
                        </div>
                        <div className="single-slide">
                          <img src="../image/products/product-details-5.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 mt--30 mt-lg--30">
                      <div className="product-details-info pl-lg--30 ">
                        <p className="tag-block">Tags: <a href="#">Movado</a>, <a href="#">Omega</a></p>
                        <h3 className="product-title">Beats EP Wired On-Ear Headphone-Black</h3>
                        <ul className="list-unstyled">
                          <li>Ex Tax: <span className="list-value"> £60.24</span></li>
                          <li>Brands: <a href="#" className="list-value font-weight-bold"> Canon</a></li>
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
                          <p>Long printed dress with thin adjustable straps. V-neckline and wiring under
                            the Dust with ruffles
                            at the bottom
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
                          <a href="#" className="add-link"><i className="fas fa-heart" />Add to Wish List</a>
                          <a href="#" className="add-link"><i className="fas fa-random" />Add to Compare</a>
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
                <img src="../image/others/brand-1.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="../image/others/brand-2.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="../image/others/brand-3.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="../image/others/brand-4.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="../image/others/brand-5.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="../image/others/brand-6.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="../image/others/brand-1.jpg" alt="" />
              </div>
              <div className="single-slide">
                <img src="../image/others/brand-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/*=================================
    Footer Area
    ===================================== */}
        <footer className="site-footer">
          <div className="container">
            <div className="row justify-content-between  section-padding">
              <div className=" col-xl-3 col-lg-4 col-sm-6">
                <div className="single-footer pb--40">
                  <div className="brand-footer footer-title">
                    <img src="../image/logo--footer.png" alt="" />
                  </div>
                  <div className="footer-contact">
                    <p><span className="label">Address:</span><span className="text">Example Street 98, HH2 BacHa, New
                        York,
                        USA</span></p>
                    <p><span className="label">Phone:</span><span className="text">+18088 234 5678</span></p>
                    <p><span className="label">Email:</span><span className="text">suport@hastech.com</span></p>
                  </div>
                </div>
              </div>
              <div className=" col-xl-3 col-lg-2 col-sm-6">
                <div className="single-footer pb--40">
                  <div className="footer-title">
                    <h3>Information</h3>
                  </div>
                  <ul className="footer-list normal-list">
                    <li><a href="#">Prices drop</a></li>
                    <li><a href="#">New products</a></li>
                    <li><a href="#">Best sales</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className=" col-xl-3 col-lg-2 col-sm-6">
                <div className="single-footer pb--40">
                  <div className="footer-title">
                    <h3>Extras</h3>
                  </div>
                  <ul className="footer-list normal-list">
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Stores</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className=" col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-title">
                  <h3>Newsletter Subscribe</h3>
                </div>
                <div className="newsletter-form mb--30">
                  <form action="https://demo.hasthemes.com/pustok-preview/pustok/php/mail.php">
                    <input type="email" className="form-control" placeholder="Enter Your Email Address Here..." />
                    <button className="btn btn--primary w-100">Subscribe</button>
                  </form>
                </div>
                <div className="social-block">
                  <h3 className="title">STAY CONNECTED</h3>
                  <ul className="social-list list-inline">
                    <li className="single-social facebook"><a href="#"><i className="ion ion-social-facebook" /></a>
                    </li>
                    <li className="single-social twitter"><a href="#"><i className="ion ion-social-twitter" /></a></li>
                    <li className="single-social google"><a href="#"><i className="ion ion-social-googleplus-outline" /></a></li>
                    <li className="single-social youtube"><a href="#"><i className="ion ion-social-youtube" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <p className="copyright-heading">Suspendisse in auctor augue. Cras fermentum est ac fermentum tempor. Etiam
                vel
                magna volutpat, posuere eros</p>
              <a href="#" className="payment-block">
                <img src="../image/icon/payment.png" alt="" />
              </a>
              <p className="copyright-text">Copyright © 2019 <a href="#" className="author">Pustok</a>. All Right Reserved.
                <br />
                Design By Pustok</p>
            </div>
          </div>
        </footer>
     
   
    </div>
  );
}

export default App;
