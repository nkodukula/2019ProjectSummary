import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './ARC-logo-teal.png';
import {Nav, Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default class Topnav extends React.Component {
  render() {    
    return (
      <Container>
      <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/"><img src={logo} alt="ARC" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/overview">Overview</Nav.Link>
          <Nav.Link href="/corpsite">Corpsite</Nav.Link>
          <Nav.Link href="/TC">TravelConnect</Nav.Link>  
          <Nav.Link href="/TravelJourney">TravelJourney</Nav.Link> 
          <Nav.Link href="/campaigns">Campaigns</Nav.Link> 
          <Nav.Link href="/myarc">MyARC</Nav.Link>  
          <Nav.Link href="/cxux">CX/UX</Nav.Link> 
          <Nav.Link href="/cvent">CVENT</Nav.Link> 
          <Nav.Link href="/sharepoint">ARC Central</Nav.Link> 
          <Nav.Link href="/2020">2020 Roadmap</Nav.Link> 
     
        </Nav>       
      </Navbar.Collapse>
    </Navbar>
    </Container>
      
    );
  }
}