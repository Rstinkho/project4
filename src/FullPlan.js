import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class FullPlan extends Component {
    state = {
        loadedPlan: null,
        loadedPlanId: null
    }

    componentDidUpdate () {
        if ( this.props.id ) {
            if (!this.state.loadedPlan || (this.state.loadedPlan && this.state.loadedPlanId !== this.props.id)) {
                axios.get( 'https://academicbusinessplanner.firebaseio.com/businessplans/' + this.props.id + '.json' )
                    .then( response => {

                        this.setState( { loadedPlan: response.data } );
                        this.setState( { loadedPlanId: this.props.id } )
                    } );
            }
            }


    }

    render () {
        let post = "";
        if ( this.props.id ) {
            post = <p>Loading...!</p>;
        }
        if ( this.state.loadedPlan ) {
            post = (
                <div className="container mt-5">
                <h1 className="main-heading">{this.state.loadedPlan.data.usertitle[0].title}</h1>
                <div className="FullPost">
                    <h2>External Analysis</h2>
                    <h3>Political:</h3>
                    <p>{this.state.loadedPlan.data.external[0].political}</p>
                    <h3>Economical:</h3>
                    <p>{this.state.loadedPlan.data.external[0].economical}</p>
                    <h3>Social:</h3>
                    <p>{this.state.loadedPlan.data.external[0].social}</p>
                    <h3>Technological:</h3>
                    <p>{this.state.loadedPlan.data.external[0].technological}</p>
                    <h3>Legal:</h3>
                    <p>{this.state.loadedPlan.data.external[0].legal}</p>

                    <h2>Internal Analysis</h2>
                    <h3>Buyer's power:</h3>
                    <p>{this.state.loadedPlan.data.internal[0].buyer_power}</p>
                    <h3>Competition:</h3>
                    <p>{this.state.loadedPlan.data.internal[0].competition}</p>
                    <h3>Threat of New Entries:</h3>
                    <p>{this.state.loadedPlan.data.internal[0].new_entries_threat}</p>
                    <h3>Substitution Threat:</h3>
                    <p>{this.state.loadedPlan.data.internal[0].substitution_threat}</p>
                    <h3>Power of Suppliers:</h3>
                    <p>{this.state.loadedPlan.data.internal[0].supplyer_power}</p>

                    <h2>Know Your Customers</h2>
                    <h3>Segmentation:</h3>
                    <p>{this.state.loadedPlan.data.stp[0].segmentation}</p>
                    <h3>Targeting:</h3>
                    <p>{this.state.loadedPlan.data.stp[0].targeting}</p>
                    <h3>Positioning:</h3>
                    <p>{this.state.loadedPlan.data.stp[0].positioning}</p>

                    <h2>Marketing and Integrated Marketing strategies</h2>
                    <h3>Marketing</h3>
                    <h3>{this.state.loadedPlan.data.marketing[0].marketing_strategy}:</h3>
                    <p>{this.state.loadedPlan.data.marketing[0].ms_description}</p>
                    <h3>IMC</h3>
                    <h3>{this.state.loadedPlan.data.marketing[0].imc_strategy}:</h3>
                    <p>{this.state.loadedPlan.data.marketing[0].imc_description}</p>

                    <h2>Human Resource Management</h2>
                    <h3>{this.state.loadedPlan.data.hr[0].hrStrOne}</h3>
                    <p>{this.state.loadedPlan.data.hr[0].hrStrOneDesc}:</p>
                    <h3>{this.state.loadedPlan.data.hr[0].hrStrTwo}</h3>
                    <p>{this.state.loadedPlan.data.hr[0].hrStrTwoDesc}:</p>
                    <h3>{this.state.loadedPlan.data.hr[0].hrStrThree}</h3>
                    <p>{this.state.loadedPlan.data.hr[0].hrStrThreeDesc}</p>
                </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPlan;