import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import { Container, Row, Col } from 'react-bootstrap';
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";


import "./App.css";



function App() {
  return (
    <Container fluid className="mainContainer">
      <Row>
        <Col md={12} className="px-0">
          <Router>
            <div>
              <NavTabs />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                <Route path='/github' component={() => {
                  window.location.href = 'https://github.com/kapslock07';
                  return null;
                }} />
                <Route path='/linkedin' component={() => {
                  window.location.href = 'https://www.linkedin.com/in/ryankaplan7/';
                  return null;
                }} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </Col>
      </Row>
    </Container >

  );
}

export default App;
