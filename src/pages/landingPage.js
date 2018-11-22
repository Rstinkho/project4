import React, { Component } from 'react';
import { Route } from  'react-router-dom'
import MainPage from './../MainPage.js'

class Land extends Component {
    render() {
        return (
            <div class="container">
            <div><a href="/bplans">I'm just curious what other people have written! </a></div>
            <div><a href="/reg">I want to create something by myself</a></div>
            <MainPage />
            </div>
            )
    }
}

export default Land;