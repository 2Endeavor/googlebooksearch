// Importing the React component. This is required for all pages
import React from "react";
// Importing the bootstrap component that will be used for setting up the columns, rows and Jumbotron
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// This function will run if there is not a match for the request made
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
