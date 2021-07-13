import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react';

function Project(props) {

  return (
    <div className="col-md-4 p-2" key={props.index}>
      <div className="card h-100">
        <div className="overflow">
          <img
            src={`/${props.image}`}
            alt=""
            className="card-img-top"
          />
        </div>
        <div className="card-body bg-light">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <a href={props.urlMore}>Know More</a>
        </div>
      </div>
    </div>
  )
}
export default Project;