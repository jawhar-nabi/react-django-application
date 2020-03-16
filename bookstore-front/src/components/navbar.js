import React from 'react';
export class Navbar extends React.Component{
    render(){
        return(
            <div className="site-header d-none d-lg-block">
            <div className="header-middle pt--10 pb--10">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 ">
                    <a href="/" className="site-brand">
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
                            <li><a href="/login">Login Register</a></li>
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
                          <a href="/login" className="font-weight-bold">Login</a> <br />
                          <span>or</span><a href="/login">Register</a>
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
        )
    }
}