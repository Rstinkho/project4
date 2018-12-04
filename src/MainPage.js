import React, { Component } from 'react';
import axios from 'axios';
import SelectedPlan from './SelectedPlan.js'
import FullPlan from './FullPlan.js'
import './App.css'
import { Route } from  'react-router-dom'



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
            key={plan.id}
            name={plan.data.usertitle[0].userName}
            created={plan.data.hr[0].date}
            title={plan.data.usertitle[0].title}
            clicked={() => this.planSelectorHandler(plan.id)} />
        });

        return (
            <div className="container">

            <Route path="/bplans" exact render={() =>

                <section className="Plans">
                <div className="row justify-content-center">
                {plans}
                </div>
                <div className="row mt-3 justify-content-center">
                <h3>Choosen Business Plan will appear below</h3>
                </div>
                <div className="row mt-2 justify-content-center">
                <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i>
                <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i>
                <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i>
                <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i>
                <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i>
                <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i>
                <i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i><i class="fas fa-arrow-down"></i>
                </div>
                </section>
                }/>

            <section>
                <FullPlan id={this.state.SelectedPlanID} />
            </section>
            </div>
        )
    }
}

export default MainPage;