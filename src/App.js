import React from 'react';
import './App.css';
import './animate.css';

function App() {
  return (    
    <div className="homepage-wrapper">
      
      <div class="homepage-fb homepage-fb2">
        <div class="homepage-container">
          <div class="homepage-fb-content">
            <h2 className="animated zoomIn">Web Development Team</h2>
            <a href="/overview">
              <button class="fds-button fds-button--primary">2019 Tracked Project Overview</button>
              </a>
          </div>
        </div>
      </div>  
      <div className="homepage-card-container"> 
      <div class="homepage-container">
      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="https://www.arctravelconnect.com/globalassets/home2/2019/postsite/traveljourney.jpg" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">ARC TravelJourney</h5>
            <p class="card-text">It begins with a spark of inspiration, spans the entirety of trip planning and continues through the trip itself. </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://www.arctravelconnect.com/globalassets/products--participation/products/adxmi/containedpanel_floating_583x329_adxmi_2.jpg" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Our Data</h5>
            <p class="card-text">ARC has the world's most comprehensive air transaction data, which can be leveraged to identify travel trends and accelerate business growth. </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://www.arctravelconnect.com/globalassets/home2/2019/postsite/horizon_contained.jpg" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">ARC TravelConnect</h5>
            <p class="card-text">TravelConnect offers the rare and exciting convergence of the travel industry’s most important players — in one room, at one time. </p>
          </div>
        </div> 
        </div>
        </div>
    </div>    
    </div>
  );
}

export default App;
