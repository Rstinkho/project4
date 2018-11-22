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
import Land from './pages/landingPage.js'
import UserAndTitle from './pages/UserAndTitle.js'
import { BrowserRouter } from 'react-router-dom'
import { Route } from  'react-router-dom'
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

   // <a href="/index">Home</a>
    return (

    <BrowserRouter>
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Business Plan Creator</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/index">Home <span class="sr-only">(current)</span></a>
      </li>

        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>


    </ul>
  </div>
</nav>
      <Route path="/reg" exact render={() => <UserAndTitle
      bp = {businessPlan}/> } />
      <Route path="/reg" exact render={() => <PageOne
      bp = {businessPlan}/> } />
      <Route path="/reg" exact render={() => <PageTwo
      bp = {businessPlan}/> } />
      <Route path="/reg" exact render={() => <PageThree
      bp = {businessPlan}/> } />
      <Route path="/reg" exact render={() => <PageFour
      bp = {businessPlan}/> } />
      <Route path="/reg" exact render={() => <PageFive
      bp = {businessPlan}/> } />
      <Route path="/bplans" exact render={() => <MainPage /> } />
      <Route path="/index" exact render={() => <Land /> } />

      </div>
      </BrowserRouter>

    );
  }
}

export default Radium(App);
