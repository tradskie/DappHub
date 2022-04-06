/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import bank from "../bank.png";
import { NavLink } from 'react-router-dom'
import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar narbar-dark fixed-top shadow p-0"
        style={{ backgroundColor: "black", height: "70px" }}
      >
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          style={{ color: "white", fontSize: "2.25rem" }} href="./">
          &nbsp;&nbsp; The DappHub
        </a>
        <div class="dropdown">
  <button class="dropbtn">Roi Dapps</button>
    <div class="dropdown-content">
    <NavLink to="/miners">Miners</NavLink>
    <NavLink to="/farms">Farms</NavLink>
    <NavLink to="/nodes">Nodes</NavLink>
    <NavLink to="/dao">Dao</NavLink>
  </div>
  </div>
  <NavLink to="/memecoins">MemeCoins</NavLink>
  <NavLink to="/nft">NFT's</NavLink>
<div class="dropdown">
  <button class="dropbtn">Chain</button>
  <div class="dropdown-content">
    <a href="#">BSC</a>
    <a href="#">Polygon</a>
    <a href="#">Fantom</a>
  </div>
</div>
        <ul className="navbar-nav px-3">
          <li className="text-nowrap d-none nav-item d-sm-none d-sm-block">
            <small style={{ color: "white" }}>
              ACCOUNT NUMBER:
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
