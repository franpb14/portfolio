import 'bootstrap/dist/css/bootstrap.css'
import Skill from './skill.js'

export default function Skills() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center mt-3">Skills</h1>
      </div>
      <div className="row justify-content-center">
        <Skill nameS="Ruby on Rails" lvl="92%" color="#9B111E"></Skill>
        <Skill nameS="Django" lvl="88%" color="#4B8BBE"></Skill>
        <Skill nameS="Javascript" lvl="80%" color="#F0DB4F"></Skill>
        <Skill nameS="Spring" lvl="60%" color="#63b175"></Skill>
        <Skill nameS="ReactJS y NextJS" lvl="35%" color="white"></Skill>
        <Skill nameS="Android applications (Java)" lvl="20%" color="#3DDC84"></Skill>
      </div>
    </div>
  )
}