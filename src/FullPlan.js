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
        let post = <p>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p>Loading...!</p>;
        }
        if ( this.state.loadedPlan ) {
            post = (
                <div className="container">
                <div className="FullPost">
                    <h1>External Analysis</h1>
                    <h2>Political:</h2>
                    <p>{this.state.loadedPlan.data.external[0].political}</p>
                    <h2>Economical:</h2>
                    <p>{this.state.loadedPlan.data.external[0].economical}</p>
                    <h2>Social:</h2>
                    <p>{this.state.loadedPlan.data.external[0].social}</p>
                    <h2>Technological:</h2>
                    <p>{this.state.loadedPlan.data.external[0].technological}</p>
                    <h2>Legal:</h2>
                    <p>{this.state.loadedPlan.data.external[0].legal}</p>

                    <h1>Internal Analysis</h1>
                    <h2>Buyer's power:</h2>
                    <p>{this.state.loadedPlan.data.internal[0].buyer_power}</p>
                    <h2>Competition:</h2>
                    <p>{this.state.loadedPlan.data.internal[0].competition}</p>
                    <h2>Threat of New Entries:</h2>
                    <p>{this.state.loadedPlan.data.internal[0].new_entries_threat}</p>
                    <h2>Substitution Threat:</h2>
                    <p>{this.state.loadedPlan.data.internal[0].substitution_threat}</p>
                    <h2>Power of Suppliers:</h2>
                    <p>{this.state.loadedPlan.data.internal[0].supplyer_power}</p>

                    <h1>Know Your Customers</h1>
                    <h2>Segmentation:</h2>
                    <p>{this.state.loadedPlan.data.stp[0].segmentation}</p>
                    <h2>Targeting:</h2>
                    <p>{this.state.loadedPlan.data.stp[0].targeting}</p>
                    <h2>Positioning:</h2>
                    <p>{this.state.loadedPlan.data.stp[0].positioning}</p>

                    <h1>Marketing and Integrated Marketing strategies</h1>
                    <h2>Marketing</h2>
                    <h3>{this.state.loadedPlan.data.marketing[0].marketing_strategy}:</h3>
                    <p>{this.state.loadedPlan.data.marketing[0].ms_description}</p>
                    <h2>IMC</h2>
                    <h3>{this.state.loadedPlan.data.marketing[0].imc_strategy}:</h3>
                    <p>{this.state.loadedPlan.data.marketing[0].imc_description}</p>

                    <h1>Human Resource Management</h1>
                    <h2>{this.state.loadedPlan.data.hr[0].hrStrOne}</h2>
                    <p>{this.state.loadedPlan.data.hr[0].hrStrOneDesc}:</p>
                    <h2>{this.state.loadedPlan.data.hr[0].hrStrTwo}</h2>
                    <p>{this.state.loadedPlan.data.hr[0].hrStrTwoDesc}:</p>
                    <h2>{this.state.loadedPlan.data.hr[0].hrStrThree}</h2>
                    <p>{this.state.loadedPlan.data.hr[0].hrStrThreeDesc}</p>
                </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPlan;