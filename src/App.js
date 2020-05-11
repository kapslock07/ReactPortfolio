import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Container>
      <Row>
        <Col size="md-12">
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
      <Row>
        <Col size="md-12">
            Hello
        </Col>
      </Row>
    </Container >

  );
}

export default App;
