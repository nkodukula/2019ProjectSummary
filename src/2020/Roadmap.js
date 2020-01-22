import React from 'react';


class Roadmap extends React.Component{

    render(){
        return ( 
        <div className="homepage-card-container-overview">
                <div className='homepage-container'>
                <h2 className="animated rotateInDownLeft">2020 Roadmap</h2>
                <ul>
                  <li>Q1</li>
                  <ul>
                    <li>My ARC resources from Data.json</li>
                    <li>Sales Request Form – revamp</li>
                    <li>TravelConnect 2020</li>
                    <li>Research personalization within Epi</li>
                    <li>Research EpiServer content cloud</li>
                    <li>ARC Employee Directory – redesign –  seek space on server https://apps.arccorp.com/ for internal apps</li>
                    <li>Videos/Youtube Advertising</li>
                    <li>Chatbots – research and write up requirements</li>
                  </ul>
                  <li>Q2</li>
                  <ul>
                    <li>Attempt to implement personalization on Epi</li>
                    <li>Expansion of Brand and Our Story pages</li>
                    <li>Product sales request forms – all products</li>
                  </ul>
                  <li>Q3</li>
                  <ul>
                    <li>Update arccorp.com to Flight Design standards</li>
                    <li>Crowd Compass TravelConnect 2020 app</li>
                    <li>GBTA </li>
                  </ul>
                  <li>Q4</li>
                  <ul>
                    <li>TravelConnect post site</li>
                  </ul>
                </ul>
                <ul>
                  <li>QX – TBD </li>
                  <ul>
                    <li>Product page restructuring</li>
                    <li>Move product sales request forms to new platform</li>
                    <li>Portal</li>
                    <li>ARC Check, Agency Locator – do we want to create  a mobile app?</li>
                    <li>www2 domain - Make the corpsite URL www</li>
                    <li>Redesign product pages</li>
                    <ul>
                      <li>Similar to Our Data page design</li>
                    </ul>
                    <li>Transition to Epi cloud</li>
                  </ul>
                </ul>
                </div>
        </div>
        )
    }
}

export default Roadmap;