import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './mfc.jpg';
import image2 from './spwg.jpg';
import image3 from './dmwg.jpg';
import image4 from './airline-education1.jpg';
import image5 from './airline-education2.jpg';
import image6 from './atac.jpg';
import image7 from './csa.jpg';
import image8 from './online-payments.jpg';
import image9 from './login.jpg';
import image10 from './dashboard.jpg';

class MyARC extends React.Component{

    render(){
        return ( 
            <div className="homepage-wrapper mb-5 mt-5">
                <div className="homepage-content techJumbo">
                <div className="techOpacity"></div>
                <h2 className="animated fadeInDown">My ARC</h2>
                <div className="techSub animated fadeInUp">We moved documentation and working group pages to Episerver from Documentum.  By doing this, we increased the speed of updates to this pages as well as usability.  We anticipate created more informational pages within Episerver in the future as the environment is already set up to be accessed securely through MyARC login.</div>               
            </div>
                <div className="homepage-card-container">
            <div className="homepage-container">
            
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
              <li><a href="https://apps.arccorp.com/payment/">ARC Online Payments App</a></li>                 
              <li>Carrier Service Agreement</li>
              <li>TIP Portal Customization</li>
                </ul>
            </div>
            
            <div class="homepage-card homepage-card-2">
            <ul>
                <li>Debit Memo Working Group (DMWG)</li>
                <li>System Provider Working Group (SPWG)</li>
                <li>ARC Airline Education</li>
                <li>Manual for Carriers</li>              
                <li>ARC Transformation Advisory Council (ATAC)</li>                 
            </ul>
            </div>
            </div>
            </div>
            </div>
            <Carousel className="carousel-fade" data-interval="false">
                <Carousel.Item>
                <div className="carousel-copy p-5"><h3>Manual for Carriers</h3>
                </div>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="Manual for Carriers"
                    />
                   
                </Carousel.Item>    
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>System Provider Working Group</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="System Provider Working Group"
                    />                                     
        
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>Debit Memo Working Group</h3>
                    </div>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Debit Memo Working Group"
                    />
                  
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>ARC Airline Education</h3>
                    </div>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="ARC Airline Education"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>ARC Airline Education - Training Page</h3>
                    </div>
                <img
                    className="d-block w-100"
                    src={image5}
                    alt="ARC Airline Education"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>ARC Transformation Advisory Council (ATAC)</h3>
                    </div>
                <img
                    className="d-block w-100"
                    src={image6}
                    alt="ATAC"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>Carrier Service Agreement</h3>
                    </div>
                <img
                    className="d-block w-100"
                    src={image7}
                    alt="CSA"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>ARC Online Payments</h3>
                    </div>
                <img
                    className="d-block w-100"
                    src={image8}
                    alt="ARC Online Payments"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>My ARC Login</h3>
                    </div>
                <img
                    className="d-block w-100"
                    src={image9}
                    alt="ARC Online Payments"
                    />                   
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>My ARC Agency dashboard</h3>
                    </div>
                <img
                    className="d-block w-100"
                    src={image10}
                    alt="ARC Online Payments"
                    />
                   
                </Carousel.Item>
            </Carousel>
 
        </div>
        )
    }
}

export default MyARC;