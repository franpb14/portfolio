import 'bootstrap/dist/css/bootstrap.css'
import Project from './project.js'

export default function Projects() {
  return (

    <div id="projects" className="container">
      <div className="row justify-content-center">
        <div className="col-md-11">
          <div className="card card-bod bg-dark">
            <div className="row justify-content-center">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">My Projects</h1>
              </div>
              <Project  name="AgrupaForm" description="With this project you can group the answers that users give to a google form, for example, by age." 
                        image="agrupaform.png" urlRocket="https://agrupaform.tk/" urlCode="https://github.com/franpb14/AgrupaForm"></Project>
              <Project  name="Eatsy landing page" description="I did the entire landing for a degree subject, using NextJS, Bootstrap and Firebase." 
                        image="eatsylp2.png" urlRocket="https://eatsylp.tk/" urlCode="https://github.com/franpb14/eatsyLP"></Project>
              <Project  name="This page" description="Obviously I also made this page complete." 
                        image="thispage.png" urlRocket="https://franperejon.vercel.app/" urlCode="https://github.com/franpb14/portfolio"></Project>
                        
              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <a target="_blank" href="https://github.com/franpb14?tab=repositories">
                    <a className="btn btn-outline-light mb-3">More on GitHub</a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}