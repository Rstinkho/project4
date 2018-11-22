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

            <form name="pageOne" onSubmit={(event) => this.externalSubmit(event)}>
            <p>PAGE 1/6</p>
            <h1>Start from your environmental researches</h1>
            <h2>External analysis</h2>
            <p>use PESTEL in order to cover the basic points</p>
            Political
            <br/>
            Tips Examples
            <input style={inputStyle} type="text" name="political"/>
            <br/>
            Economical
            <br/>
            Tips Examples
            <input style={inputStyle} type="text" name="economical" />
            <br/>
            Social
            <br/>
            Tips Examples
            <input style={inputStyle} type="text" name="social"/>
            <br/>
            Technological
            <br/>
            Tips Examples
            <input style={inputStyle} type="text" name="technological" />
            <br/>
            Environmental
            <br/>
            Tips Examples
            <input style={inputStyle} type="text" name="environmental" />
            <br/>
            Legal
            <br/>
            Tips Examples
            <input style={inputStyle} type="text" name="legal"/>
            <br/>
            <input type="submit" value="Submit" />

            </form>
            </div>
            );
    }
};

export default Radium(PageOne)