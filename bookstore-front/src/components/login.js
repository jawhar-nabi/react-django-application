import React from 'react'
import { Button, Form, Grid, Header,  Message, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'



export class LoginForm extends React.Component {
  state = { email:'', password: '',    redirect: false
 };

// setRedirect = () => {
//   this.setState({
//     redirect: true
//   })
// }
// renderRedirect = () => {
//   if (this.state.redirect) {
//     console.log('render redirect true...')
//     return <Redirect to='/' />
//   }
// }

//   handleChange = (e, { name, value }) => this.setState({ [name]: value })
handleChange =() =>{}
handleSubmit = ()=>{}
//   handleSubmit = () => {
//     let {email, password } = this.state;
//     let req={email,password};
//     //console.log({email, password });
//     //this.props.history.push('/');
//     axios.post('http://localhost:3000/api/users/signin',req)
//       .then(res =>{
//         if(res.data === "user not found"){
//         alert("user not found");
//         //this.props.history.push('/')
//       }
//         else if(res.data ==="Wrong password."){
//           alert("mdp incorect");
//         }else {

//         // save token in localstorage
//         localStorage.setItem('token', JSON.stringify(res.data));
//         // const user = localStorage.getItem('item');
//         // JSON.parse(user);
//         //this.props.history.push('/');

//         window.location = '/';
//       }
//       }
//       )
//       //.catch(err => console.log(err) )
      
//   } 
//   handleload = () =>{
//     alert('page loaded successfully...');
//     console.log('2500')
//   }
      //console.log(resp.data);
    // const response = axios.get('http://localhost:3000/api/users/');
    // console.log(response);
    //this.setState({ submittedlastname: lastname, submittedfirstname: firstname, submittedEmail: email , submittedphone: phone})
  
  render() {
    const { email, password} = this.state
    return(
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
                          <li className="breadcrumb-item active">Login</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </section>
                {/*=============================================
          =            Login Register page content         =
          =============================================*/}
                <main className="page-section inner-page-sec-padding-bottom">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
                        {/* Login Form s*/}
                        <form action="#">
                          <div className="login-form">
                            <h4 className="login-title">New Customer</h4>
                            <p><span className="font-weight-bold">I am a new customer</span></p>
                            <div className="row">
                              <div className="col-md-12 col-12 mb--15">
                                <label htmlFor="email">Full Name</label>
                                <input className="mb-0 form-control" type="text" id="name" placeholder="Enter your full name" />
                              </div>
                              <div className="col-12 mb--20">
                                <label htmlFor="email">Email</label>
                                <input className="mb-0 form-control" type="email" id="email" placeholder="Enter Your Email Address Here.." />
                              </div>
                              <div className="col-lg-6 mb--20">
                                <label htmlFor="password">Password</label>
                                <input className="mb-0 form-control" type="password" id="password" placeholder="Enter your password" />
                              </div>
                              <div className="col-lg-6 mb--20">
                                <label htmlFor="password">Repeat Password</label>
                                <input className="mb-0 form-control" type="password" id="repeat-password" placeholder="Repeat your password" />
                              </div>
                              <div className="col-md-12">
                                <a href="#" className="btn btn-outlined">Register</a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                        <form action="https://demo.hasthemes.com/pustok-preview/pustok/">
                          <div className="login-form">
                            <h4 className="login-title">Returning Customer</h4>
                            <p><span className="font-weight-bold">I am a returning customer</span></p>
                            <div className="row">
                              <div className="col-md-12 col-12 mb--15">
                                <label htmlFor="email">Enter your email address here...</label>
                                <input className="mb-0 form-control" type="email" id="email1" placeholder="Enter you email address here..." />
                              </div>
                              <div className="col-12 mb--20">
                                <label htmlFor="password">Password</label>
                                <input className="mb-0 form-control" type="password" id="login-password" placeholder="Enter your password" />
                              </div>
                              <div className="col-md-12">
                                <a href="#" className="btn btn-outlined">Login</a>
                              </div>
                            </div>
                          </div>
                        </form>
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
          
    
      
    )};
}
