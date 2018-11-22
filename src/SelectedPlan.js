import React from 'react';


const plan = (props) => (
    <article className="Plan" onClick={props.clicked}>
    <h3>Legal:{props.legal}</h3>
    <h3>Economcal:{props.economical}</h3>
    <h3>Buyers power:{props.buyerspower}</h3>

  </article>
);


export default plan;