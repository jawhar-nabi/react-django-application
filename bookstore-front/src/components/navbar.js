import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Search } from './search';

export class Navbar extends Component {

  state = {
    user: null,
  }

  render() {
    const {user} = this.state;
    return (


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
          <div className="site-header header-2 mb--20 d-none d-lg-block">
            <div className="header-middle pt--10 pb--10">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <Link to="/"><img src="image/logo.png" alt="" /></Link>
                  </div>
                  <div className="col-lg-8"> </div>
                  {this.state.user ? 
                  <div className="col-lg-2">
                  <h6> {user.name}</h6>
                  </div>
                  :
                    <div className="col-lg-2">
                      <Link to="/login"><img src="image/identifiez-vous.png" alt="" /></Link>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="header-bottom bg-primary">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <nav className="category-nav white-nav  ">
                      <div>
                        <a href="javascript:void(0)" className="category-trigger"><i className="fa fa-bars" /> Book
                          Categories </a>
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
                  <div className="col-lg-3">
                    <nav className="category-nav white-nav  ">
                      <Search />
                    </nav>
                  </div>


                  <div className="col-lg-6">
                    <div className="main-navigation flex-lg-right">
                      <ul className="main-menu menu-right main-menu--white li-last-0">
                        {/* <li className="menu-item ">
                        <Link to="/"><Search/></Link>

                        </li> */}

                        <li className="menu-item">
                          <Link to="/">Accueil</Link>
                        </li>

                        {/* Shop */}
                        <li className="menu-item has-children mega-menu">
                          <Link to="/profil">Profil</Link>
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
                          <Link to="/myBooks">Livres</Link>
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
                          <Link to="/forum">Forum</Link>
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
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
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
                {/* mobile menu start */}
                <div className="mobile-navigation">
                  {/* mobile menu navigation start */}
                  <nav className="off-canvas-nav">
                    <ul className="mobile-menu main-mobile-menu">
                      <li className="menu-item-has-children">
                        <Link to="/">Accueil</Link>

                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/profil">Profil</Link>
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
                        <Link to="/myBooks"> Livres</Link>
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
                        <Link to="/forum">Forum</Link>
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
                      <Link to="/contact">Contact</Link>
                    </ul>
                  </nav>
                  {/* mobile menu navigation end */}
                </div>
                {/* mobile menu end */}
              </div>
            </aside>
          </div>





          {/*partie nav mobile*/}
          <div className="sticky-init fixed-header common-sticky">
            <div className="container d-none d-lg-block">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  <Link to="/" className="site-brand" > <img src="image/logo.png" alt="" /></Link>
                </div>
                <div className="col-lg-8">
                  <div className="main-navigation flex-lg-right">
                    <ul className="main-menu menu-right ">
                      <li className="menu-item has-children">
                        <Link to="/">Accueil</Link>

                      </li>
                      {/* Shop */}
                      <li className="menu-item has-children mega-menu">
                        <Link to="/profil"  >Profil</Link>

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
                        <Link to="/myBooks"  > Livres</Link>
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
                        <Link to="/forum"  >Forum</Link>
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
                        <Link to="/contact"  >Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Use Minified Plugins Version For Fast Page Load */}
          {/* Mirrored from demo.hasthemes.com/pustok-preview/pustok/shop-grid.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 08 Mar 2020 14:27:41 GMT */}
        </div></div>

    );
  }
}





export default Navbar;
