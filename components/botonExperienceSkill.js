import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react';
import Skills from './skills';
import Experience from './experience';

function BotonExperienceSkill(props) {

  const [mostrandoSkills, setMostrandoSkills] = useState(false);

  useEffect(() => {
    let rqExperience = document.getElementById("rqExperience");
    let rqSkills = document.getElementById("rqSkills");
    let square = document.getElementById("sqSkills");

    if(document.getElementById("containerExperience"))
      setTimeout(() => { document.getElementById("containerExperience").style.opacity = "1" }, 10);

    function cambiaColores(elskill, elSquare, elExperience) {
      if (mostrandoSkills && !elskill || elSquare && mostrandoSkills || elExperience){
        square.style.backgroundPosition = "center left";
        setTimeout(() => posicionaBarras(false), 10);
        setMostrandoSkills(false);
      } else {
        square.style.backgroundPosition = "center right";
        setTimeout(() => posicionaBarras(true), 10);
        setMostrandoSkills(true);
      }
    }
    function posicionaBarras(mostrarBarras) {
      let barras = document.querySelectorAll(".barra");
      let porcentajes = ["95%", "95%", "82%", "50%", "30%"]
      if(mostrarBarras) {
        document.getElementById("containerSkills").style.opacity = "1";
        barras.forEach((el, index) => el.style.width = porcentajes[index]);
      } else {
        let containerExperience = document.getElementById("containerExperience");
        setTimeout(() => {
          containerExperience.style.transition = "1s";
          containerExperience.style.opacity = "1";
        }, 100);
      }
    }
    rqExperience.onclick = () => cambiaColores(false, false, true);
    rqSkills.onclick = () => cambiaColores(true, false, false);
    square.onclick = () => cambiaColores(false, true, false);
  });

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-12 text-center">
          <div className="row justify-content-center">
            <div id="rqExperience">
              <div id="linkExperience">Experience</div>
            </div>
            <div id="sqSkills">
            </div>
            <div id="rqSkills">
              <div id="linkSkills">Skills</div>
            </div>
          </div>
        </div>
      </div>

      {mostrandoSkills ? <Skills></Skills> : <Experience></Experience>}
    </div>
  )
}
export default BotonExperienceSkill;