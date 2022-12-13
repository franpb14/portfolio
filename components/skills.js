import 'bootstrap/dist/css/bootstrap.css'
import Skill from './skill.js'

export default function Skills() {
  return (
    <div id="containerSkills" className="container mt-3 col-10">
      <div className="row justify-content-center">
        <h1 className="text-center">Skills</h1>
      </div>
      <div className="row justify-content-center  mb-4">
        <Skill nameS="Ruby on Rails" color="#9B111E" transition="1s"></Skill>
        <Skill nameS="Django" color="#4B8BBE" transition="1s 0.25s"></Skill>
        <Skill nameS="Javascript" color="#F0DB4F" transition="1s 0.5s"></Skill>
        <Skill nameS="Spring" color="#63b175" transition="1s 0.75s"></Skill>
        <Skill nameS="ReactJS y NextJS" color="white" transition="1s 1s"></Skill>
        <Skill nameS="Android applications (Java)"  color="#3DDC84" transition="1s 1.25s"></Skill>
      </div>
    </div>
  )
}