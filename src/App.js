import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import { Container, Row, Col } from 'react-bootstrap';
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

import "./App.css";



function App() {
  return (
    <Container fluid className="mainContainer">
      <Row>
        <Col md={12}>
          <Router>
            <div>
              <NavTabs />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </Router>
        </Col>
      </Row>
    </Container >

  );
}

export default App;
