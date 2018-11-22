import React, { Component } from 'react';
import Radium from 'radium';
import axios from './../axios-orders';

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

    addInfoHandler = () => {
    console.log(this.props.bp)
    const plan = {
        data: this.props.bp
    }



    axios.post('/businessplans.json', plan)
    .then(response => console.log(response))
    .catch(error => console.log(error))

    }


render() {
    const style = {
        backgroundColor: 'lightblue',
        border: '2px solid black',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }

    const inputStyle = {
        width: '90%',
        height: '150px'
    }

    return (

        <div className="container" style={style}>
        <form name="pageTwo" onSubmit={(event) => this.externalSubmit(event)}>
        <p>PAGE 2/6</p>
        <h2>Internal analysis</h2>
        <p>use Porter's 5 forces to identify market opportunities</p>
        Supplier's power
        <br/>
        Tips Examples
        <input style={inputStyle} type="text" name="supply"/>
        <br/>
        Competition
        <br/>
        Tips Examples
        <input style={inputStyle} type="text" name="competition"/>
        <br/>
        Buyers power
        <br/>
        Tips Examples
        <input style={inputStyle} type="text" name="buyers"/>
        <br/>
        Threat of Substitution
        <br/>
        Tips Examples
        <input style={inputStyle} type="text" name="threat"/>
        <br/>
        Difficulties for New Entries
        <br/>
        Tips Examples
        <input style={inputStyle} type="text" name="entries"/>
        <br/>
        <input type="submit" value="Submit" />
        </form>
        <button
        onClick={() => this.addInfoHandler()}>
        ONE
        </button>
        </div>
        )
}
}

export default Radium(PageTwo);