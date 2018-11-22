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


    return (
    <BrowserRouter>
      <div className="App">
      <div>
          <header>
              <nav>
                  <ul>
                      <li><a href="/index">Home</a></li>
                  </ul>
              </nav>
          </header>



      </div>
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
