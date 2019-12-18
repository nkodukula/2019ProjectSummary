import React from 'react';


class Campaigns extends React.Component{

    render(){
        return (
          <div className="homepage-card-container"> 
          <div className='homepage-container'>
          <h2>Campaigns</h2>
          <div className="homepage-card-grid">
            <div className="homepage-card homepage-card-1 hero-card-grid-2">
            <ul>
            <li>Digital Advertising</li>
            <li>Events</li>
            <li>Products</li>
            <li>ARC culture </li>
            </ul>
            </div>
            <div class="homepage-card homepage-card-2">
            <p>GBTA<br />
            TravelConnect<br />
            ARC Pay<br />
            ASTA<br />
            BI products<br />
            Custom Reports<br />
            ARC Pride, WeARC, Employee Volunteering Opportunities</p>
            </div>
          </div>
                
          </div>
          </div>
        )
    }
}

export default Campaigns;