import React from 'react';


const plan = (props) => (

    <div className="card" onClick={props.clicked}>
      <div className="card-header">
        IDEA: {props.title}
      </div>
      <div className="card-body">
        <h5 className="card-title">Created by: {props.name}</h5>
        <p class="card-text">When: {props.created}</p>
        <a href="#" class="btn btn-primary">about author</a>
      </div>
    </div>


);


export default plan;