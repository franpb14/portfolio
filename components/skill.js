import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react';

function Skill(props) {
  
  useEffect(() => {
    document.getElementById("barra"+props.nameS).style.backgroundColor = props.color;
    console.log(document.getElementById("barra"+props.nameS));
  });

  return (
    <div className="col-9 mt-3">
      <h5>{props.nameS}</h5>
      <div className="barraTotal col-12">
        <div id={"barra"+props.nameS} className="barra" style={{width: `${props.lvl}`}}></div>
      </div>
    </div>
  )
}
export default Skill;