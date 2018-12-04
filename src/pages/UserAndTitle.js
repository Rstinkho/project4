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
                backgroundColor: 'lightgray',
                color: 'black'
            },
            marginTop: '5px'
        }
        const styleP ={
            float: 'right'
        }
    return (
        <div className="container" style={style}>
        <div className="container">


        <form name="pageThree" onSubmit={(event) => this.externalSubmit(event)}>
        <i style={styleP}> STEP 1/6 </i>
        <div>What is your name:</div>
        <input type="text" name="username"/>
        <br/>
        <div>What are you trying to create:</div>
        <input type="text" name="title"/>
        <br/>

        <button type="submit" className="btn btn-outline-secondary m-3" name="submit" value="Submit">submit</button>
        </form>
        </div>
        </div>
        )
    }
}

export default Radium(UserAndTitle);