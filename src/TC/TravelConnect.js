import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card, { CardBody } from 'react-bootstrap/Card';
import image1 from './tc-web.jpg';
import image2 from './tc-app.jpg'
import image3 from './tc-cvent.jpg'
import image4 from './tc-post.jpg'
import image5 from './tc-web1.jpg';
import image6 from './tc-web2.jpg';


class TravelConnect extends React.Component{

    render(){
        return (
            <div className="homepage-wrapper mb-5 mt-5">                     
            <div className="homepage-content techJumbo">
                <div className="techOpacity"></div>
                <h2 className="animated fadeInDown">ARC TravelConnect 2019</h2>
                <div className="techSub animated fadeInUp">We built upon our previous updates for the TravelConnect site and integrated Amy’s new design for this years design.  We increased our usage for the TravelConnect mobile app this year with less effort as we had experience from last year.</div>               
            </div>
            
            <Carousel className="carousel-fade" data-interval="false">
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>TravelConnect 2019 Website</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="TravelConnect 2019 Website"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>TravelConnect 2019 Website</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image5}
                    alt="TravelConnect 2019 Website"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                <h3>TravelConnect 2019 Website</h3>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image6}
                    alt="TravelConnect 2019 Website"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-copy p-5">
                    <h3>TravelConnect 2019 App</h3>
                    <p>
                    <strong>Users&nbsp;</strong>- Total number of unique uses across devices&nbsp;<strong>410 users</strong>&nbsp;<br />
                    <strong>Adoption rate&nbsp;</strong>– [Confirmed attendees/invited attendees * 100]=&nbsp;<strong>84%       adoption</strong><br />
                    <strong>All Engagement</strong>- Total number of actions across all users taken with the app (i.e., - sessions, speakers, exhibitors… etc.)&nbsp;<strong>16.9 K</strong><br />
                    <strong>User Contributors</strong>- Total number of attendee messages and social shares&nbsp;<strong>2.02 K</strong><br />
                    <strong>Minutes Open</strong>- Total time spent in minutes, users used the app&nbsp;<strong>15 K</strong><br />
                    <strong>Navigation Icon Taps –&nbsp;</strong>Total number of taps for all navigation icons&nbsp;<strong>2.67       K</strong><br />
                    <strong>Banner taps –</strong>&nbsp;Total taps on sponsor banners&nbsp;<strong>65</strong></p>
                    </div>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="TravelConnect 2019 App"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-copy p-5">
                    <h3>CVENT Registration Site</h3>
                    <p><strong>429</strong> Active Registrations</p>                 
                    </div>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="CVENT FLEX Registration"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-copy p-5">
                    <h3>Post Conference Website</h3>
                    </div>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="Post Conference Website"
                    />                   
                </Carousel.Item>
            </Carousel>
 
        </div>
        )
    }
}

export default TravelConnect;