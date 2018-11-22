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
        const styleP ={
            float: 'right'
        }
    return (
        <div className="container" style={style}>
        <div className="container">


        <form name="pageThree" onSubmit={(event) => this.externalSubmit(event)}>
        <span style={styleP}> STEP 1/6 </span>
        <div>What is your name:</div>
        <input type="text" name="username"/>
        <br/>
        <div>What are you trying to create:</div>
        <input type="text" name="title"/>
        <br/>
        <input type="submit" value="Submit" />
        </form>
        </div>
        </div>
        )
    }
}

export default Radium(UserAndTitle);