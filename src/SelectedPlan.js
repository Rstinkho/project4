import React from 'react';


const plan = (props) => (
  <article className="Plan" onClick={props.clicked}>
  <h1>Legal:{props.legal}</h1>
  <div className="Info">
    <div className="Something">Economcal:{props.economical}</div>
  </div>
  </article>
);


export default plan;