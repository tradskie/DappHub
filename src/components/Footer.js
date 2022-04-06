/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

class Footer extends Component {
  render() {
    return (
        <>
          <div>
            {Array(200)
              .fill()
              .map((_, i) => (
                <p key={i}>{i}</p>
              ))}
          </div>
          <div
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              right: 0,
              height: "50px",
              backgroundColor: "black"
            }}
          >
            ADS
          </div>
        </>
      );
    }
}

export default Footer;
