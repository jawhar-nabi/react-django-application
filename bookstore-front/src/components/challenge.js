import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Challenge extends Component{
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
        {/* ***********************************************************************/}
        <div className="site-wrapper" id="top">
          <section className="bg-gray section-padding-top section-padding-bottom section-margin">
            <h1 className="sr-only">challenge </h1>
            
              
                  <div className="home-left-sidebar">
                    <div className="single-side  bg-white">
                      <h2 className="home-sidebar-title">
                        <u> Challenge</u>
                      </h2>
                      <div className="product-slider countdown-single with-countdown sb-slick-slider product-border-reset" data-slick-setting="{
                                        &quot;autoplay&quot;: true,
                                        &quot;autoplaySpeed&quot;: 8000,
                                        &quot;slidesToShow&quot;: 1,
                                        &quot;dots&quot;:true
                                    }" data-slick-responsive="[
                                        {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                                        {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                                        {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                                    ]">
                                      

                        <div className="single-slide " >
                          <div className="product-card">
                          <div className="product-card--body">
                              <div className="card-image">
                               <Link to="/challengePage"><img src="image/challenge/motiv1.jpg" alt="" /></Link> 
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="single-slide " >
                          <div className="product-card">
                          <div className="product-card--body">
                              <div className="card-image">
                               <Link to="/challengePage"><img src="image/challenge/motiv2.jpg" alt="" /></Link> 
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="single-slide " >
                          <div className="product-card">
                          <div className="product-card--body">
                              <div className="card-image">
                               <Link to="/challengePage"><img src="image/challenge/motiv3.jpg" alt="" /></Link> 
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="single-slide " >
                          <div className="product-card">
                          <div className="product-card--body">
                              <div className="card-image">
                               <Link to="/challengePage"><img src="image/challenge/motiv4.jpg" alt="" /></Link> 
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="single-slide " >
                          <div className="product-card">
                          <div className="product-card--body">
                              <div className="card-image">
                               <Link to="/challengePage"><img src="image/challenge/motiv5.jpg" alt="" /></Link> 
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>  {/*end slides*/}










                        <div > {/* apres info 10 livres et 40% BD*/}
                                <Link to="/challengePage" className="price"> READING CHALLENGE :  10 livres ! </Link>
                                <Link to="/challengePage" className="price-discount"><h2>Vous  Atteignez   40% </h2>  </Link>
                                
                          </div>



                        



                        
                       





{/*fin */}

                   
                    </div>
                  </div>
                
              </section>
        </div>		

      </div>
    );
  }
}



export default Challenge;