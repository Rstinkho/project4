import React from 'react';

    const style = {
        'Width': '550px'
    }

const plan = (props) => (
    <div className="col col-md-6">
        <div className="card m-2" style={style} onClick={props.clicked}>
          <div className="card-header bg-info">
            <strong>IDEA:</strong> {props.title}
          </div>
          <div className="card-body bg-light">
            <h5 className="card-title">Created by: {props.name}</h5>
            <p class="card-text">When: {props.created}</p>
            <a href="#" class="btn btn-outline-danger">about author</a>
          </div>
        </div>
    </div>


);


export default plan;