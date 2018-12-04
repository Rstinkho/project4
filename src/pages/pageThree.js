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
        <form name="pageThree" onSubmit={(event) => this.externalSubmit(event)}>
        <i style={styleP}>STEP 4/6</i>
        <h2>STP</h2>
        <i>Know your customers</i>

        <br/>
        <label htmlFor="textarea">Segmentation</label>
        <br/>
        <textarea cols="70" rows="7" name="segmentation" id="textarea" required></textarea>

        <br/>
        <label htmlFor="textarea">Targeting</label>
        <br/>
        <textarea cols="70" rows="7" name="targeting" id="textarea" required></textarea>

        <br/>
        <label htmlFor="textarea">Positioning</label>
        <br/>
        <textarea cols="70" rows="7" name="positioning" id="textarea" required></textarea>

        <br/>
        <button type="submit" className="btn btn-outline-secondary m-3" name="submit" value="Submit">submit</button>
        </form>
        </div>
        )
    }
}

export default Radium(PageThree);