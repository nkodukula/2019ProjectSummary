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

class MyARC extends React.Component{

    render(){
        return ( 
            <div className="homepage-wrapper mb-5 mt-5">
            <Carousel className="carousel-fade" data-interval="false">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="Manual for Carriers"
                    />
                    <Carousel.Caption>
                    <h3>Manual for Carriers (MFC)</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>    
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="System Provider Working Group"
                    />
                    <Carousel.Caption>
                    <h3>System Provider Working Group (SPWG)</h3>                    
                    <p></p>                    
               </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Debit Memo Working Group"
                    />
                    <Carousel.Caption>
                    <h3>Debit Memo Working Group (DMWG)</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="ARC Airline Education"
                    />
                    <Carousel.Caption>
                    <h3>ARC Airline Education</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image5}
                    alt="ARC Airline Education"
                    />
                    <Carousel.Caption>
                    <h3>ARC Airline Education - Training Page</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image6}
                    alt="ATAC"
                    />
                    <Carousel.Caption>
                    <h3>ARC Transformation Advisory Council (ATAC)</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image7}
                    alt="CSA"
                    />
                    <Carousel.Caption>
                    <h3>Carrier Service Agreement (CSA)</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image8}
                    alt="ARC Online Payments"
                    />
                    <Carousel.Caption>
                    <h3>ARC Online Payments</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
 
        </div>
        )
    }
}

export default MyARC;