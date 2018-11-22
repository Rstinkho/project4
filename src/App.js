import React, { Component } from 'react';
import './App.css';
//import axios from './axios-orders';
import Radium from 'radium';
import PageOne from './pages/pageOne.js'
import PageTwo from './pages/pageTwo.js'
import PageThree from './pages/pageThree.js'
import PageFour from './pages/pageFour.js'
import PageFive from './pages/pageFive.js'
import MainPage from './MainPage.js'

class App extends Component {

  render() {

    const businessPlan = {
        external: [],
        internal: [],
        stp: [],
        marketing: [],
    }


    return (
      <div className="App">
      <PageOne
      bp = {businessPlan} />
      <PageTwo
      bp = {businessPlan} />
      <PageThree
      bp = {businessPlan} />
      <PageFour
      bp = {businessPlan} />
      <PageFive />
      <MainPage />
      </div>

    );
  }
}

export default Radium(App);
