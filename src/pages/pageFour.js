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
                backgroundColor: 'lightgray',
                color: 'black'
            }
        };

        const styleP ={
            float: 'right'
        }
    return (
        <div className="container" style={style}>
        <form name="pageFour" onSubmit={(event) => this.externalSubmit(event)}>
        <i style={styleP}>STEP 5/6</i>
        <h1>What strategy are you going to use?</h1>
        <h2>Marketing strategies</h2>
        <select id="mstrg" form="mstrg">
          <option value="Market Penetration">Market Penetration</option>
          <option value="Skimming">Skimming</option>
          <option value="Market development">Market Development</option>
          <option value="Market adoptation">Market adoptation</option>
        </select>

        <br/>
        <label htmlFor="textarea">Description</label>
        <br/>
        <textarea cols="70" rows="7" name="strategy" id="textarea" required></textarea>


        <h2>Integrated marketing communication strategies</h2>
        <select id="imcstrg" form="imcstrg">
          <option value="Traditional Media">Traditional media</option>
          <option value="Twitter">Twitter</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
        </select>

        <br/>
        <label htmlFor="textarea">Description</label>
        <br/>
        <textarea cols="70" rows="7" name="imcstrategy" id="textarea" required></textarea>

        <br />
        <input type="submit" value="Submit" />
        </form>
        </div>
        )
    }
}

export default Radium(PageFour);