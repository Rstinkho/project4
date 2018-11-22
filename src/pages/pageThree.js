import React, { Component } from 'react';
import Radium from 'radium';

class PageThree extends Component {


    externalSubmit = (event) => {
        event.preventDefault()
        const summary = {
            segmentation: event.target["segmentation"].value,
            targeting: event.target["targeting"].value,
            positioning: event.target["positioning"].value
        }
        this.props.bp.stp.push(summary)
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
        <form name="pageThree" onSubmit={(event) => this.externalSubmit(event)}>
        <p>PAGE 3/6</p>
        <h2>STP</h2>
        <p>Know your customers</p>
        Segmentation
        <input type="text" name="segmentation"/>
        <br/>
        Targeting
        <input type="text" name="targeting"/>
        <br/>
        Positioning
        <input type="text" name="positioning"/>
        <br/>
        <input type="submit" value="Submit" />
        </form>
        </div>
        )
    }
}

export default Radium(PageThree);