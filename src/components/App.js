/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import Navbar from "./Navbar";
import Web3 from "web3";
import Miners from "./pages/Miners";
import Farms from "./pages/Farms";
import Nodes from "./pages/Nodes";
import Dao from "./pages/Dao";
import MemeCoins from "./pages/MemeCoins";
import Nft from "./pages/Nft";
import Home from "./pages/index";
import Footer from "./Footer";

class App extends Component {


  // Our React Code Goes In Here!
  render() {

    return (
      <div>
      <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/Miners' element={<Miners/>} />
        <Route path='/Farms' element={<Farms/>} />
        <Route path='/Nodes' element={<Nodes/>} />
        <Route path='/Dao' element={<Dao/>} />
        <Route path='/MemeCoins' element={<MemeCoins/>} />
        <Route path='/Nft' element={<Nft/>} />

    </Routes>
    </Router>
        <div className="container-fluid mt-5">
          <div className="row">
          </div>
        </div>
      <Footer />
      </div>

    );
  }
}

export default App;
