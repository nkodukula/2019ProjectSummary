import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './ARC-logo-teal.png';


export default class Nav extends React.Component {
  render() {    
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-5">
        <a className="navbar-brand" href="/"><img src={logo} alt="logo" />  </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <a className="nav-link" href="/overview">Overview<span className="sr-only">(current)</span></a>       
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/corpsite">Corpsite</a>
        </li> 
        <li className="nav-item">
        <a className="nav-link" href="/TC">TravelConnect</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/TravelJourney">TravelJourney</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/campaigns">Campaigns</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/myarc">My ARC</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/cxux">CX/UX</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/cvent">CVENT</a>
        </li>
        </ul>
       
        </div>
        </nav>
      
    );
  }
}