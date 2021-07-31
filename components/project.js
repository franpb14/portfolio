import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faRocket } from '@fortawesome/free-solid-svg-icons';

function Project(props) {

  return (
    <div className="col-lg-4 p-4" key={props.index}>
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
          <a className="rocket" target="_blank" href={props.urlRocket}><FontAwesomeIcon icon={faRocket}></FontAwesomeIcon></a>
          <a className="code" target="_blank" href={props.urlCode}><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></a>
        </div>
      </div>
    </div>
  )
}
export default Project;