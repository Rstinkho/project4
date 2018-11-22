import React, { Component } from 'react';
import Radium from 'radium';

class PageFive extends Component {
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
        <p>PAGE 5/6</p>
        <h1>Human Resource management strategies</h1>
        <form>
          <div className="block" id="intro">
          </div>
          <div className="block" id="sexe">
            <h4>1 &mdash; Choose the specific HR practices you are going to implement</h4>
            <fieldset>
              <div className="row choice">
                <label className="row-col-half"><i className="fa fa-rer"></i>
                  <input type="radio" name="strHr"/><span>Resourcing</span>
                </label>
                <label className="row-col-half"><i className="fa fa-tal"></i>
                  <input type="radio" name="strHr"/><span>Talent managemen</span>
                </label>
                <label className="row-col-half"><i className="fa fa-od"></i>
                  <input type="radio" name="strHr"/><span>Organization Development</span>
                </label>
                <label className="row-col-half"><i className="fa fa-hpm"></i>
                  <input type="radio" name="strHr"/><span>High-Performance Management</span>
                </label>
                <label className="row-col-half"><i className="fa fa-csr"></i>
                  <input type="radio" name="strHr"/><span>Corporate Social Responsibility</span>
                </label>
              </div>
            </fieldset>
            <input style={inputStyle} type="text" />
          </div>

          <div className="block" id="sexe">
            <h4>2 &mdash; Choose the specific HR practices you are going to implement</h4>
            <fieldset>
              <div className="row choice">
                <label className="row-col-half"><i className="fa fa-rer"></i>
                  <input type="radio" name="strHr"/><span>Resourcing</span>
                </label>
                <label className="row-col-half"><i className="fa fa-tal"></i>
                  <input type="radio" name="strHr"/><span>Talent managemen</span>
                </label>
                <label className="row-col-half"><i className="fa fa-od"></i>
                  <input type="radio" name="strHr"/><span>Organization Development</span>
                </label>
                <label className="row-col-half"><i className="fa fa-hpm"></i>
                  <input type="radio" name="strHr"/><span>High-Performance Management</span>
                </label>
                <label className="row-col-half"><i className="fa fa-csr"></i>
                  <input type="radio" name="strHr"/><span>Corporate Social Responsibility</span>
                </label>
              </div>
            </fieldset>
            <input style={inputStyle} type="text" />
          </div>

          <div className="block" id="sexe">
            <h4>3 &mdash; Choose the specific HR practices you are going to implement</h4>
            <fieldset>
              <div className="row choice">
                <label className="row-col-half"><i className="fa fa-rer"></i>
                  <input type="radio" name="strHr"/><span>Resourcing</span>
                </label>
                <label className="row-col-half"><i className="fa fa-tal"></i>
                  <input type="radio" name="strHr"/><span>Talent managemen</span>
                </label>
                <label className="row-col-half"><i className="fa fa-od"></i>
                  <input type="radio" name="strHr"/><span>Organization Development</span>
                </label>
                <label className="row-col-half"><i className="fa fa-hpm"></i>
                  <input type="radio" name="strHr"/><span>High-Performance Management</span>
                </label>
                <label className="row-col-half"><i className="fa fa-csr"></i>
                  <input type="radio" name="strHr"/><span>Corporate Social Responsibility</span>
                </label>
              </div>
            </fieldset>
            <input style={inputStyle} type="text" />
          </div>

          <div className="block" id="date">
            <h4>4 &mdash; Choose the end date</h4>
            <fieldset><i className="fa fa-calendar-o"></i>
              <input className="row" type="date" placeholder="Birthdate"/>
            </fieldset>
          </div>

        </form>
        </div>
        )
}
}

export default Radium(PageFive);