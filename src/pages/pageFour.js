import React, { Component } from 'react';
import Radium from 'radium';

class PageFour extends Component {

    externalSubmit = (event) => {
        event.preventDefault();
        const summary = {
            marketing_strategy: document.getElementById("mstrg").value,
            ms_description: event.target["strategy"].value,
            imc_strategy: document.getElementById("imcstrg").value,
            imc_description: event.target["imcstrategy"].value,
        }
        this.props.bp.marketing.push(summary)
        console.log(this.props.bp)
    };
    render() {
        const style = {
            backgroundColor: 'lightblue',
            border: '2px solid black',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
    return (
        <div className="container" style={style}>
        <form name="pageFour" onSubmit={(event) => this.externalSubmit(event)}>
        <p>PAGE 4/6</p>
        <h1>What strategy are you going to use?</h1>
        <h2>Marketing strategies</h2>
        <select id="mstrg" form="mstrg">
          <option value="penetration">Market Penetration</option>
          <option value="skimming">Skimming</option>
          <option value="development">Market Development</option>
          <option value="adoptation">Market adoptation</option>
        </select>
        <br/>
        Description
        <input type="text" name="strategy"/>

        <h2>Integrated marketing communication strategies</h2>
        <select id="imcstrg" form="imcstrg">
          <option value="traditional">Traditional media</option>
          <option value="twitter">Twitter</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
        </select>
        <br />
        Description
        <input type="text" name="imcstrategy"/>
        <br />
        <input type="submit" value="Submit" />
        </form>
        </div>
        )
    }
}

export default Radium(PageFour);