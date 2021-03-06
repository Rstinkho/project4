import React, { Component } from 'react';
import Radium from 'radium';

class PageOne extends Component {

    externalSubmit = (event) => {
        event.preventDefault()
        const summary = {
            political: event.target["political"].value,
            economical: event.target["economical"].value,
            social: event.target["social"].value,
            technological: event.target["technological"].value,
            environmental: event.target["environmental"].value,
            legal: event.target["legal"].value
        }
        this.props.bp.external.push(summary)
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

            <form name="pageOne" onSubmit={(event) => this.externalSubmit(event)}>
            <i style={styleP}>STEP 2/6</i>
            <h1>Start from your environmental researches</h1>
            <h2>External analysis</h2>
            <i>use PESTEL in order to cover the basic points</i>
            <label htmlFor="textarea">Political</label>
            <br/>
            <textarea cols="70" rows="7" name="political" id="textarea" required></textarea>

            <br/>
            <label htmlFor="textarea">Economical</label>
            <br/>
            <textarea cols="70" rows="7" name="economical" id="textarea" required></textarea>

            <br/>
            <label htmlFor="textarea">Social</label>
            <br/>
            <textarea cols="70" rows="7" name="social" id="textarea" required></textarea>

            <br/>
            <label htmlFor="textarea">Technological</label>
            <br/>
            <textarea cols="70" rows="7" name="technological" id="textarea" required></textarea>

            <br/>
            <label htmlFor="textarea">Environmental</label>
            <br/>
            <textarea cols="70" rows="7" name="environmental" id="textarea" required></textarea>

            <br/>
            <label htmlFor="textarea">Legal</label>
            <br/>
            <textarea cols="70" rows="7" name="legal" id="textarea" required></textarea>
            <br/>
            <button type="submit" className="btn btn-outline-secondary m-3" name="submit" value="Submit">submit</button>

            </form>
            </div>
            );
    }
};

export default Radium(PageOne)