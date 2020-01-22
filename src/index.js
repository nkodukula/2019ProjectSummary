import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Topnav from './nav/Topnav'
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Overview from './overview/Overview';
import Campaigns from './campaigns/Campaigns';
import MyARC from './myarc/MyARC';
import Cxux from './cxux/Cxux';
import Corpsite from './corpsite/Corpsite';
import TravelConnect from './TC/TravelConnect';
import TravelJourney from './TravelJourney/TravelJourney';
import Cvent from './cvent/Cvent';
import Roadmap from './2020/Roadmap';
import Sharepoint from './sharepoint/Sharepoint';
import Prj2020 from './2020Prj/Prj2020';

const routing = (
  <Router>
    <div className="homepage-wrapper pt-5">      
      <Topnav />
      <Route exact path="/" component={App} />
      <Route path="/overview" component={Overview} />
      <Route path="/corpsite" component={Corpsite} />
      <Route path="/TC" component={TravelConnect} />
      <Route path="/TravelJourney" component={TravelJourney} />
      <Route path="/myarc" component={MyARC} />
      <Route path="/campaigns" component={Campaigns} />
      <Route path="/cxux" component={Cxux} />
      <Route path="/cvent" component={Cvent} />
      <Route path="/2020" component={Roadmap} />
      <Route path="/sharepoint" component={Sharepoint} />
      <Route path="/2020Prj" component={Prj2020} />
    
    </div>
  </Router>
)
  ReactDOM.render(routing, document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
