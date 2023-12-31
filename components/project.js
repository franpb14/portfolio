import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faRocket } from '@fortawesome/free-solid-svg-icons';

function Project(props) {
  useEffect(() => {
    let columnasRocket = document.querySelectorAll(".columnasRocket");
    columnasRocket.forEach(el => el.style.height = getComputedStyle(document.querySelectorAll(".rocket")[0]).height);
  });

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
          <h3 className="col-12 text-center">{props.name}</h3>
          <p>{props.description}</p>
          <div className="col-12 columnasRocket">
            <a className={`rocket ${props.urlRocket === 'false' ? 'disabled' : '' }`} target="_blank" disabled href={props.urlRocket}><FontAwesomeIcon icon={faRocket}></FontAwesomeIcon></a>
            <a className={`code ${props.urlCode == 'false' ? 'disabled' : '' }`} target="_blank" href={props.urlCode}><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project;