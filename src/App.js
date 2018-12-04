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

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/index">Business Plan Creator</a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/index">Home <span className="sr-only">(current)</span></a>
      </li>
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

      <footer id="main-footer" className="text-center p-4 fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>Copyright &copy;
                <span id="year"></span> Business Plan Creator</p>
            </div>
          </div>
        </div>
      </footer>
</div>

</BrowserRouter>

    );
  }
}

export default Radium(App);
