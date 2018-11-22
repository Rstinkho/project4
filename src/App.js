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
import UserAndTitle from './pages/UserAndTitle.js'

class App extends Component {

  render() {

    const businessPlan = {
        usertitle: [],
        external: [],
        internal: [],
        stp: [],
        marketing: [],
        hr: []
    }


    return (

      <div className="App">
      <UserAndTitle
      bp = {businessPlan}/>
      <PageOne
      bp = {businessPlan} />
      <PageTwo
      bp = {businessPlan} />
      <PageThree
      bp = {businessPlan} />
      <PageFour
      bp = {businessPlan} />
      <PageFive
      bp = {businessPlan}  />
      <MainPage />
      </div>

    );
  }
}

export default Radium(App);
