import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect } from 'react';

function Skill(props) {
  
  useEffect(() => {
    
    let barra = document.getElementById("barra"+props.nameS);
    barra.style.backgroundColor = props.color;
    barra.style.transition = props.transition;
    
  });

  return (
    <div className="col-12 mt-3">
      <h5>{props.nameS}</h5>
      <div className="barraTotal col-12">
        <div id={"barra"+props.nameS} className="barra" style={{width: '0px'}}></div>
      </div>
    </div>
  )
}
export default Skill;