import React, { Component } from 'react';
import Radium from 'radium';

class UserAndTitle extends Component {


    externalSubmit = (event) => {
        event.preventDefault()
        const summary = {
            userName: event.target["username"].value,
            title: event.target["title"].value,
        }
        this.props.bp.usertitle.push(summary)
        console.log(this.props.bp)
    };
    render() {
        const style = {
            backgroundColor: 'lightyellow',
            border: '2px solid black',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }
    return (
        <div className="container" style={style}>
        <div class="container">

        </div>
        <form name="pageThree" onSubmit={(event) => this.externalSubmit(event)}>
        <p>PAGE 0/6</p>
        <h2>What is your name</h2>
        <input type="text" name="username"/>
        <br/>
        <h2>What are you trying to create?</h2>
        <input type="text" name="title"/>
        <br/>
        <input type="submit" value="Submit" />
        </form>
        </div>
        )
    }
}

export default Radium(UserAndTitle);