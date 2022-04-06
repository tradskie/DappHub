import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './style.css';

class Home extends Component {
  render() {
    return (

        <div id="home">
          <Container>
            <div className="header">
           <h1> Welcome to The DappHub</h1> 
          <h3> A place where you can find all gems and roi's!</h3>
            </div>
          </Container>
        </div>
    );
  }
}

export default Home;
