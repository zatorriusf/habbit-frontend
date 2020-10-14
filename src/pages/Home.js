import React from "react";
import { Jumbotron } from "react-bootstrap";

const Home = () => {
  return (
    <Jumbotron>
      <h2>habbitual</h2>
      <h3 className="font-weight-light">a habit tracker for coding practice</h3>
      <p>
        This habit tracker was created to pracitce working in in a MERN Stack.
        The front end stying is done with react-bootstrap components.
      </p>
    </Jumbotron>
  );
};

export default Home;
