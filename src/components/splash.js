import React, { Component } from "react";
import "./splash.css";

class Splash extends Component {
  render(){
    return(
      <div id="splash">
        <header>
          <h1>Clark Walker</h1>
          <div className="nav">
            <a href="/about">about me</a>
            <a href="/fun">fun stuff</a>
            <a href="/contact">contact me</a>
            <a href="/portfolio">portfolio</a>
          </div>
        </header>
      </div>
    );
  }
}

export default Splash;