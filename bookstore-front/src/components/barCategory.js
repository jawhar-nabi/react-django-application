import React, { Component } from 'react';
import { Book } from './book';
import A from '../images/products/a.jpg';
import P1 from '../images/products/p1.jpg';
import P2 from '../images/products/p2.jpg';
import P3 from '../images/products/p3.jpg';
import P4 from '../images/products/p4.jpg';
import P5 from '../images/products/p5.jpg';
export class BarCategory extends Component{
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
        <div className="site-wrapper" id="top">

          <section className="section-margin">
            <div className="container">
              <div className="section-title section-title--bordered">
                <br /> <h2>your recommended books</h2>
              </div>
              <div className="product-slider sb-slick-slider slider-border-single-row" data-slick-setting="{
                        &quot;autoplay&quot;: true,
                        &quot;autoplaySpeed&quot;: 8000,
                        &quot;slidesToShow&quot;: 5,
                        &quot;dots&quot;:true
                    }" data-slick-responsive="[
                        {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4} },
                        {&quot;breakpoint&quot;:992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                        {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                        {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} },
                        {&quot;breakpoint&quot;:320, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                    ]">

           

           {/*apres BD boucle.. et un seul apl*/}

              <div className="single-slide">           
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P1}/>}
              </div> 

              
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P2}/>}
              </div> 

              
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P3}/>}
              </div> 

              
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P4}/>}
              </div> 

              
            
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P1}/>}
              </div> 

              
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P2}/>}
              </div> 

              
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P3}/>}
              </div> 

              
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P4}/>}
              </div>    
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P1}/>}
              </div> 

              
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P2}/>}
              </div> 

              
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P3}/>}
              </div> 

              
              <div className="single-slide">
                {/*single slide*/}
                { <Book titre="titre livre" auteur="auteur livre" couverture={P4}/>}
              </div> 

              
           
              

      
              </div>
            </div>
          </section>
  
        </div></div>
    );
  }
}

export default BarCategory;