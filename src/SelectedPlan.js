import React from 'react';


const plan = (props) => (
    <article className="Plan" onClick={props.clicked}>
    <h3>Created by: {props.name}</h3>
    <h3>Idea: {props.title}</h3>
    <h3>When? {props.created}</h3>

    </article>
);


export default plan;