import React, { Component } from 'react';
export class Cover extends Component{
    render(){
        return(
 

      <section className="hero-area hero-slider-3">
        <div className="sb-slick-slider" data-slick-setting="{
                                                        &quot;autoplay&quot;: true,
                                                        &quot;autoplaySpeed&quot;: 8000,
                                                        &quot;slidesToShow&quot;: 1,
                                                        &quot;dots&quot;:true
                                                        }">
          <div className="single-slide bg-image " data-bg="image/bg-images/b.jpg">
            <div className="container">
              <div className="home-content text-center">
                
              </div>
            </div>
          </div>
          <div className="single-slide bg-image" data-bg="image/bg-images/a.jpg">
            <div className="container">
              <div className="home-content pl--30">
              
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
            
           

export default Cover;