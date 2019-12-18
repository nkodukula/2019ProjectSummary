import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './tj1.jpg';
import image2 from './tj2.jpg'
import image3 from './tj3.jpg'


class TravelJourney extends React.Component{

    render(){
        return (
            <div className="homepage-wrapper mb-5 mt-5">
            <Carousel className="carousel-fade" data-interval="false">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="ARC TravelJourney"
                    />
                    <Carousel.Caption>
                    <h3>ARC TravelJourney</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="ARC TravelJourney"
                    />
                    <Carousel.Caption>
                    <h3>ARC TravelJourney</h3>                    
                                      
               </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="ARC TravelJourney"
                    />
                    <Carousel.Caption>
                    <h3>ARC TravelJourney</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
 
        </div>
        )
    }
}

export default TravelJourney;