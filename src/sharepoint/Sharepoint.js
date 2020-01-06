import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './sharepoint1.jpg';
import image2 from './sharepoint2.jpg';
import image3 from './sharepoint3.jpg';
import image4 from './sharepoint4.jpg';
import image5 from './sharepoint5.jpg';
import image6 from './sharepoint6.jpg';


class Sharepoint extends React.Component{

    render(){
        return (
        <div className="homepage-wrapper mb-5 mt-5">
          <div className="homepage-card-container"> 
          <div className='homepage-container'>
          <div className="homepage-content">
          <h2>ARC Central</h2>
         
            <ul>
            <li>ARC Employee Education/ Training - #igotskills - Customized the portal</li>
            <li>Education Assistant Program - Created Electronic Version</li>
            <li>Vendor Management Program - Created Electronic Version</li>
            </ul>
          </div>             
          </div>

          <Carousel className="carousel-fade" data-interval="false">
                <Carousel.Item>
                <div className="carousel-copy p-5"><h3>ARC Employee Training - #igotskills</h3>                
                </div>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="ARC Employee Training - #igotskills"
                    />                   
                </Carousel.Item>  
                <Carousel.Item>
                <div className="carousel-copy p-5"><h3>ARC Employee Training - #igotskills</h3>
                </div>
                    <img
                    className="d-block w-100"
                    src={image4}
                    alt="ARC Employee Training - #igotskills"
                    />                   
                </Carousel.Item>  
                <Carousel.Item>
                <div className="carousel-copy p-5"><h3>ARC Employee Educational Assistance Program</h3>
                <ul>
                  <li>Cut processing time by more than 50%</li>
                  <li>Helps reduce risk to the EAP program. The Concur system has an audit flag to monitor annual spend</li>
                  <li>Alleviate the issues with submissions from remote/ other office locations</li>
                </ul>
                </div>
                    <img
                    className="d-block w-100"
                    src={image5}
                    alt="ARC Employee Educational Assistance Program"
                    />                   
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5"><h3>ARC Employee Educational Assistance Program</h3>
                </div>
                    <img
                    className="d-block w-100"
                    src={image6}
                    alt="ARC Employee Educational Assistance Program"
                    />                   
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5"><h3>Vendor Contract – Due Diligence Process</h3>
                <ul>
                  <li>Cut processing time by 90%</li>
                  <li>Real time visibility to the Finance team, so they can track expenses</li>
                  <li>Helped implement a budget approval process, and Finance team can approve in SharePoint</li>
                  <li>Easily run reports - # of contracts, $ amounts, Vendors etc.</li>
                  <li>Improved and Fast Communication between contract administration team and the requestor</li>
                </ul>
                </div>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="Vendor Contract – Due Diligence Process"
                    />                   
                </Carousel.Item> 
                <Carousel.Item>
                <div className="carousel-copy p-5"><h3>Vendor Contract – Due Diligence Process</h3>
                </div>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Vendor Contract – Due Diligence Process"
                    />                   
                </Carousel.Item>    
          </Carousel>
          </div>
        </div>
        )
    }
}

export default Sharepoint;