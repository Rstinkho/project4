import React, { Component } from 'react';
import Radium from 'radium';


class PageTwo extends Component {

    externalSubmit = (event) => {
        event.preventDefault()
        const summary = {
            supplyer_power: event.target["supply"].value,
            competition: event.target["competition"].value,
            buyer_power: event.target["buyers"].value,
            substitution_threat: event.target["threat"].value,
            new_entries_threat: event.target["entries"].value,

        }
        this.props.bp.internal.push(summary)
        console.log(this.props.bp)
    };




render() {
    const style = {
        backgroundColor: 'lightblue',
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
        <form name="pageTwo" onSubmit={(event) => this.externalSubmit(event)}>
        <i style={styleP}>PAGE 3/6</i>
        <h2>Internal analysis</h2>
        <i>use Porter's 5 forces to identify market opportunities</i>

        <br/>
        <label htmlFor="textarea">Supplyer's power</label>
        <br/>
        <textarea cols="70" rows="7" name="supply" id="textarea" required></textarea>

        <br/>
        <label htmlFor="textarea">Competition</label>
        <br/>
        <textarea cols="70" rows="7" name="competition" id="textarea" required></textarea>

        <br/>
        <label htmlFor="textarea">Buyer's power</label>
        <br/>
        <textarea cols="70" rows="7" name="buyers" id="textarea" required></textarea>

        <br/>
        <label htmlFor="textarea">Threat of Substitution</label>
        <br/>
        <textarea cols="70" rows="7" name="threat" id="textarea" required></textarea>

        <br/>
        <label htmlFor="textarea">New entrant's defficulties</label>
        <br/>
        <textarea cols="70" rows="7" name="entries" id="textarea" required></textarea>

        <br/>
        <button type="submit" className="btn btn-outline-secondary m-3" name="submit" value="Submit">submit</button>
        </form>
        </div>
        )
}
}

export default Radium(PageTwo);