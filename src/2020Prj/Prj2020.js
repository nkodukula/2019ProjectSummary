import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './omni1.jpg';
import image2 from './omni2.jpg';
import image3 from './mediakit.jpg';

class Prj2020 extends React.Component{

    render(){
        return (
            <div className="homepage-wrapper mb-5 mt-5">                     
            <div className="homepage-content techJumbo tc">
                <div className="techOpacity"></div>
                <h2 className="animated fadeInDown">WebDev 2020 Projects</h2>                            
            </div>
            
            <Carousel className="carousel-fade" data-interval="false">
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>ARC Omnichannel Retailing</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="ARC Omnichannel Retailing"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>ARC Omnichannel Retailing</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="ARC Omnichannel Retailing"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>ARC Media Kit</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="ARC Media Kit"
                    />                    
                </Carousel.Item>
            </Carousel>
 
        </div>
        )
    }
}

export default Prj2020;