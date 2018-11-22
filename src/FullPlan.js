import React, { Component } from 'react';
import axios from 'axios';


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
                <div className="FullPost">
                    <h1>ONE:{this.state.loadedPlan.data.external[0].economical}</h1>
                    <p>TWO:{this.state.loadedPlanId}</p>

                </div>

            );
        }
        return post;
    }
}

export default FullPlan;