import React, { Component } from 'react';
export class News extends Component{
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
        <div style={{backgroundImage: 'url("image/news.jpg")'}}>
          {/* ***********************************************************************/}
          <section className="hero-area hero-slider-2">
            <div className="container">
              <div className="row align-items-lg-center">
                <div className="col-12">
                  <div className="sb-slick-slider" data-slick-setting="{
                                                                &quot;autoplay&quot;: true,
                                                                &quot;autoplaySpeed&quot;: 8000,
                                                                &quot;slidesToShow&quot;: 1,
                                                                &quot;dots&quot;:true
                                                                }">
                    <div className="single-slide bg-image" data-bg="image/bg-images/home-2-slider-2.jpg">
                      <div className="home-content pl--30">
                        <div className="container">
                          <div className="col-lg-7">
                            <span className="title-mid">category livre</span>
                            <h2 className="h2-v2">Book name</h2>
                            <p>Descreption********************************************
                              <br /></p>
                            <a href="shop-grid.html" className="btn btn-outlined--primary">
                              Consulter
                            </a>
                          </div>
                          <div className="col-lg-7">
                            <img src="image/a.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-slide bg-image" data-bg="image/bg-images/home-2-slider-1.jpg">
                      <div className="home-content pl--30">
                        <div className="row">
                          <div className="col-lg-7">
                            <span className="title-mid">category livre</span>
                            <h2 className="h2-v2">Book name</h2>
                            <p>Descreption********************************************
                              <br /></p>
                            <a href="shop-grid.html" className="btn btn-outlined--primary">
                              Consulter
                            </a>
                          </div>
                          <div className="col-lg-7">
                            <img src="image/a.png" alt="" />
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
        
      </div>
    );
  }
}


export default News;


