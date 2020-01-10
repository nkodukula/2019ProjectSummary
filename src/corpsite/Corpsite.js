import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './corp1.jpg';
import image2 from './corp2.jpg';
import image3 from './corp3.jpg';
import image4 from './corp4.jpg';
import image5 from './corp5.jpg';
import image6 from './corp6.jpg';
import image7 from './corp7.jpg';
import image8 from './corp8.jpg';
import image9 from './corp9.jpg';
import image10 from './corp10.jpg';
import image11 from './corp11.jpg';
import image12 from './corp12.jpg';
import image13 from './corp13.jpg';
import image16 from './corp16.jpg';
import image17 from './corp17.jpg';
class Corpsite extends React.Component{

    render(){
        return (                 
        <div className="homepage-wrapper mb-5 mt-5">
            <div className="homepage-content techJumbo">
                <div className="techOpacity"></div>
                <h2 className="animated fadeInDown">ARC Corporate Website (arccorp.com)</h2>
                <div className="techSub animated fadeInUp">This year we focused on redesigning some of our original pages from first launch and gave more thought into the design of each.  We updated the design, increased usability and worked with relevant stakeholders to create better experiences.</div>               
            </div>
        <div className="homepage-card-container"> 
        <div className='homepage-container'>
       
        <div class="homepage-card-grid">
          <div class="homepage-card homepage-card-1 hero-card-grid-2">
            <div class="homepage-card-copy">Redesigned Pages/Websites</div>
            <div class="homepage-card-icon">
              <img src="https://www2.arccorp.com/globalassets/fds/fds-design-icon.png" alt=""/>
            </div>
          </div>
            
            <div class="homepage-card homepage-card-2 hero-card-grid-2">
              <div class="homepage-card-copy">New Pages/ Websites</div>
              <div class="homepage-card-icon">
                <img src="https://www2.arccorp.com/globalassets/fds/fds-developer-icon.png" alt=""/>
                </div>
                </div>
            </div>
            <div class="homepage-card-grid">
            <div class="homepage-card homepage-card-1">
              <ul>
                  <li><a href="https://www2.arccorp.com/about-us/careers/">ARC&rsquo;s  Careers</a></li>
                  <li><a href="https://www2.arccorp.com/products-participation/customer-success-stories/">Customer  Success</a></li>
                 
                  <li><a href="https://www2.arccorp.com/about-us/distribution-evolved/">Distribution  Evolved</a></li>
                  <li><a href="https://www2.arccorp.com/articles-trends/blog">Blog</a></li>
                  <li><a href="https://www2.arccorp.com/products-participation/products/arc-pay/">ARC Pay</a></li>
                  <li>ARC Media Kit</li>
                  <li>ARC Credit Card Acceptance Chart - Payment Acceptance</li>
                  <li>Custom  Reports</li>
                  <li>ARC Events</li>  
                  <li>Integration of Adobe Sign Forms</li>
                  <li>ARC Internal and External Career Portal Customization - iCIMS</li>
                  </ul>
            </div>
            
            <div class="homepage-card homepage-card-2">
            <ul>
            <li><a href="https://www2.arccorp.com/about-us/our-data/">Our Data</a></li>
                <li><a href="https://www2.arccorp.com/about-us/careers/benefits/">Benefits & Perks</a></li>
                  <li><a href="https://www2.arccorp.com/about-us/careers/our-culture">Our  Culture</a></li>                          
                  <li><a href="https://www2.arccorp.com/imagemaker">Image Maker</a></li>
                  <li><a href="https://www2.arccorp.com/styleguide">ARC Style Guide</a></li>
                  <li>Product Sales Request Form Templates<br />
            <a href="https://www2.arccorp.com/products-participation/product-sales-request/airlinebi-a">Template 1</a><br />
            <a href="https://www2.arccorp.com/products-participation/product-sales-request/airlinebi-b">Template 2</a><br />
            <a href="https://www2.arccorp.com/products-participation/product-sales-request/airlinebi-c">Template 3</a><br /> 
            <a href="https://www2.arccorp.com/products-participation/product-sales-request/airlinebi-d">Template 4</a></li> 
                </ul>
                <li><a href="https://apps.arccorp.com/payment/">ARC Online Payments</a></li>

                </div>
            </div>
                     
        </div>
        </div>

        <Carousel className="carousel-fade" data-interval="false">
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>ARC's Career Pages</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>ARC's Career Pages</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>ARC's Career Pages</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>Customer Success Pages</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image4}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>Customer Success Pages</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image5}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>Distribution Evolved</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image6}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>Distribution Evolved</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image7}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>ARC Pay</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image8}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>Our Data Pages</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image9}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>Our Data Pages</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image10}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>Image Maker</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image11}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>Credt Card Acceptance Chart</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image12}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>Credt Card Acceptance Chart</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image13}
                    alt="ARC's Career Pages"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>ARC News Room</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image16}
                    alt="ARC News Room"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>ARC Media Kit</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image17}
                    alt="ARC Media Kit"
                    />                    
                </Carousel.Item>

                
          </Carousel>
        </div>
        )
    }
}

export default Corpsite;