import React, { Component } from 'react';
import Radium from 'radium';
import axios from './../axios-orders';

class PageFive extends Component {

    externalSubmit = (event) => {

        event.preventDefault();
        const summary = {
            hrStrOne: document.getElementById("hrOne").value,
            hrStrOneDesc: event.target["one"].value,
            hrStrTwo: document.getElementById("hrTwo").value,
            hrStrTwoDesc: event.target["two"].value,
            hrStrThree: document.getElementById("hrThree").value,
            hrStrThreeDesc: event.target["three"].value,
            date: document.getElementById("clock").value
        }
        this.props.bp.hr.push(summary)
        console.log(summary)
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

            backgroundColor: 'lightyellow',
            border: '2px solid black',
            ':hover': {
                backgroundColor: 'lightgray',
                color: 'black'
            },
            marginTop: '5px',
            marginBottom: '100px'
        }

        const styleP ={
            float: 'right'
        }



    return (
        <div className="container" style={style}>
        <i style={styleP}>STEP 6/6</i>
        <h1>Human Resource management strategies</h1>
        <form name="pageFive" onSubmit={(event) => this.externalSubmit(event)}>
        <div className="col">

        <h4>1 &mdash; Choose the specific HR practices you are going to implement</h4>
          <div className="row">
            <select id="hrOne">
              <option value="Resourcing">Resourcing</option>
              <option value="Talent management">Talent management</option>
              <option value="Organization Development">Organization Development</option>
              <option value="High-Performance Management">High-Performance Management</option>
              <option value="Corporate Social Responsibility">Corporate Social Responsibility</option>
            </select>
            <textarea cols="70" rows="7" name="one" id="textarea" required></textarea>
          </div>

          <h4>2 &mdash; Choose the specific HR practices you are going to implement</h4>
          <div className="row">
            <select id="hrTwo">
              <option value="Resourcing">Resourcing</option>
              <option value="Talent management">Talent management</option>
              <option value="Organization Development">Organization Development</option>
              <option value="High-Performance Management">High-Performance Management</option>
              <option value="Corporate Social Responsibility">Corporate Social Responsibility</option>
            </select>
            <textarea cols="70" rows="7" name="two" id="textarea" required></textarea>
          </div>

            <h4>3 &mdash; Choose the specific HR practices you are going to implement</h4>
            <div className="row">
            <select id="hrThree">
                          <option value="Resourcing">Resourcing</option>
                          <option value="Talent management">Talent management</option>
                          <option value="Organization Development">Organization Development</option>
                          <option value="High-Performance Management">High-Performance Management</option>
                          <option value="Corporate Social Responsibility">Corporate Social Responsibility</option>
                        </select>
            <textarea cols="70" rows="7" name="three" id="textarea" required></textarea>
            </div>

          <div>
            <h4>4 &mdash; Choose the end date</h4>
            <fieldset><i className="fa fa-calendar-o"></i>
              <input id="clock" className="row" type="date" placeholder="Birthdate"/>
            </fieldset>
          </div>
          <button type="submit" className="btn btn-outline-secondary m-3" name="submit" value="Submit">submit</button>
        </div>
        </form>
        <button className="btn btn-danger m-2"
        onClick={() => this.addInfoHandler()}>
        Upload BP
        </button>
        </div>
        )
}
}

export default Radium(PageFive);

// <fieldset id="first">
//   <div className="row choice">
//     <label className="row-col-half"><i className="fa fa-rer"></i>
//       <input type="radio" name="strHr"/><span>Resourcing</span>
//     </label>
//     <label className="row-col-half"><i className="fa fa-tal"></i>
//       <input type="radio" name="strHr"/><span>Talent managemen</span>
//     </label>
//     <label className="row-col-half"><i className="fa fa-od"></i>
//       <input type="radio" name="strHr"/><span>Organization Development</span>
//     </label>
//     <label className="row-col-half"><i className="fa fa-hpm"></i>
//       <input type="radio" name="strHr"/><span>High-Performance Management</span>
//     </label>
//     <label className="row-col-half"><i className="fa fa-csr"></i>
//       <input type="radio" name="strHr"/><span>Corporate Social Responsibility</span>
//     </label>
//   </div>
// </fieldset>