import React, { Component } from 'react';
// import { Route } from  'react-router-dom'
import MainPage from './../MainPage.js'

class Land extends Component {
    render() {
        const style = {
            'margin-top' : '250px'
            }
        return (
            <div className="container">
            <div style={style}>
            <div><a href="/bplans">I'm just curious what other people have written </a></div>
            <div><a href="/reg">I want to create something by myself</a></div>
            <MainPage />
            </div>
            </div>
            )
    }
}

export default Land;