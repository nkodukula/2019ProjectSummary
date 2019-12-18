import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './TC2019.jpg';
import image2 from './TC2019App.jpg'
import image3 from './TC2019CVENT.jpg'
import image4 from './TC2019PostSite.jpg'


class TravelConnect extends React.Component{

    render(){
        return (
            <div className="homepage-wrapper mb-5 mt-5">
            <Carousel className="carousel-fade" data-interval="false">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="TravelConnect 2019 Website"
                    />
                    <Carousel.Caption>
                    <h3>TravelConnect 2019 Website</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="TravelConnect 2019 App"
                    />
                    <Carousel.Caption>
                    <h3>TravelConnect 2019 App</h3>                    
                    <p>
                    <strong>Users&nbsp;</strong>- Total number of unique uses across devices&nbsp;<strong>410 users</strong>&nbsp;<br />
                    <strong>Adoption rate&nbsp;</strong>– [Confirmed attendees/invited attendees * 100]=&nbsp;<strong>84%       adoption</strong><br />
                    <strong>All Engagement</strong>- Total number of actions across all users taken with the app (i.e., - sessions, speakers, exhibitors… etc.)&nbsp;<strong>16.9 K</strong><br />
                    <strong>User Contributors</strong>- Total number of attendee messages and social shares&nbsp;<strong>2.02 K</strong><br />
                    <strong>Minutes Open</strong>- Total time spent in minutes, users used the app&nbsp;<strong>15 K</strong><br />
                    <strong>Navigation Icon Taps –&nbsp;</strong>Total number of taps for all navigation icons&nbsp;<strong>2.67       K</strong><br />
                    <strong>Banner taps –</strong>&nbsp;Total taps on sponsor banners&nbsp;<strong>65</strong></p>                    
               </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="CVENT FLEX Registration"
                    />
                    <Carousel.Caption>
                    <h3>CVENT Registration Site</h3>
                    <p><strong>429</strong> Active Registrations</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="Post Conference Website"
                    />
                    <Carousel.Caption>
                    <h3>Post Conference Website</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
 
        </div>
        )
    }
}

export default TravelConnect;