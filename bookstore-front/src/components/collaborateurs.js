import React, { Component } from 'react';
import Amazon from '../images/collaborateurs/amazon.jpg';
import PlayStore from '../images/collaborateurs/playStore.png';
import BarnesNoble from '../images/collaborateurs/barnesandnoble.png';
import Kobo from '../images/collaborateurs/kobo.PNG';
import Abebooks from '../images/collaborateurs/abebooks.png';
import BookDepository from '../images/collaborateurs/bookDepository.png';
import Alibris from '../images/collaborateurs/alibris.png';
export class Collaborateurs extends Component{
    render(){
        return(

      <div>
{/*=================================
  Brands Slider/ nos collaborateurs
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
              <a href="https://www.amazon.com"> <img src={Amazon} alt="" /></a>
              </div>

              <div className="single-slide">
              <a href="https://play.google.com"> <img src={PlayStore} alt="" /></a>
              </div>


              <div className="single-slide">
              <a href="https://www.abebooks.com"> <img src={Abebooks} alt="" /></a>
              </div>

              <div className="single-slide">
              <a href="https://www.barnesandnoble.com"> <img src={BarnesNoble} alt="" /></a>
              </div>


              <div className="single-slide">
              <a href="https://www.kobo.com"> <img src={Kobo} alt="" /></a>
              </div>


              <div className="single-slide">
              <a href="https://www.alibris.com"> <img src={Alibris} alt="" /></a>
              </div>

              <div className="single-slide">
              <a href="https://www.amazon.com"> <img src={Amazon} alt="" /></a>
              </div>

              <div className="single-slide">
              <a href="https://play.google.com"> <img src={PlayStore} alt="" /></a>
              </div>






              <div className="single-slide">
              <a href="https://www.bookdepository.com"> <img src={BookDepository} alt="" /></a>
              </div>



            
                                        



            
            </div>
          </div>
        </section>
      </div>
    );
  }
};


export default Collaborateurs;




        