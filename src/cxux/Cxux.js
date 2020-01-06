import React from 'react';
import icon from './research-icon.png';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './cxux1.jpg';
import image2 from './cxux2.jpg';
import image3 from './cxux3.jpg';
import image4 from './cxux4.jpg';

class Cxux extends React.Component{

    render(){
        return (  
            <div className="homepage-wrapper mb-5 mt-5">  
            <div className="homepage-card-container"> 
            <div className='homepage-container'>
                <h2 className="animated slideInUp">CX/UX Working Groups</h2>
                <div class="homepage-card-grid">
          <div class="homepage-card homepage-card-1 hero-card-grid-2">
            <div class="homepage-card-copy">Research</div>
            <div class="homepage-card-icon">
              <img src={icon} alt=""/>
            </div>
          </div>
            
            <div class="homepage-card homepage-card-2 hero-card-grid-2">
              <div class="homepage-card-copy">Development</div>
              <div class="homepage-card-icon">
                <img src="https://www2.arccorp.com/globalassets/fds/fds-developer-icon.png" alt=""/>
                </div>
                </div>
            </div>
                <div className="homepage-card-grid">
                    <div className="homepage-card homepage-card-1">                       
                        <p>Discovery meetings with Forest Giant <br />
                            Future Portal</p>                       
                    </div>
                    <div className="homepage-card homepage-card-2">    
                    <p>Flight Design System<br />   
                    Bootstrap Implementation<br /></p>         
                    </div>
                </div>
         </div>                
        </div>
        <Carousel className="carousel-fade" data-interval="false">
                <Carousel.Item>
                <div className="carousel-copy p-5"><h3>ARC Flight Design System</h3>
                </div>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="ARC Flight Design System"
                    />                   
                </Carousel.Item>    
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>ARC Flight Design System</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="ARC Flight Design System"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>Flight Design System - Bootstrap Implementation</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="ARC Flight Design System"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>Flight Design System - Bootstrap Implementation</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image4}
                    alt="ARC Flight Design System"
                    />
                </Carousel.Item>
        </Carousel>
        </div>
        )
    }
}

export default Cxux;