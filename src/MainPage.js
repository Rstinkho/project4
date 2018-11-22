import React, { Component } from 'react';
import axios from 'axios';
import SelectedPlan from './SelectedPlan.js'
import FullPlan from './FullPlan.js'



class MainPage extends Component {

    state = {
        data: [],
        SelectedPlanID: null
    }

    componentDidMount () {

        axios.get('https://academicbusinessplanner.firebaseio.com/businessplans.json')
            .then(response => {
                const fetchedData = [];
                for (let key in response.data) {
                    fetchedData.push({...response.data[key], id: key });
                }

                this.setState({data: fetchedData})
                console.log(this.state.data)
            });
    }

    planSelectorHandler = (id) => {
        this.setState({SelectedPlanID: id})
        console.log(this.state.SelectedPlanID)
    }

    render() {

        const plans = this.state.data.map(plan => {

            return <SelectedPlan
            legal={plan.data.external[0].legal}
            economical={plan.data.external[0].economical}
            political={plan.data.external[0].political}
            buyerspower = {plan.data.internal[0].buyer_power}
            clicked={() => this.planSelectorHandler(plan.id)} />
        });

        return (
            <div>
            <section className="Plans">
            {plans}
            </section>
            <section>
                <FullPlan id={this.state.SelectedPlanID} />
            </section>
            </div>
        )
    }
}

export default MainPage;