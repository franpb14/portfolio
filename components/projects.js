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
              <Project  name="AgrupaForm" index="1"
                        description="The mission of this web application is offering the user the ability of grouping answers 
                                      from a Google Forms questionnaire taking into account different variables. 
                                      For example, the user would be able to segregate answers depending on age and favourite season of the year." 
                        image="agrupaform.png" urlRocket="https://agrupa-form.vercel.app/" urlCode="https://github.com/franpb14/AgrupaForm"></Project>
              <Project  name="Eatsy landing page" index="2"
                        description="I was in charge of developing the entire landing of a web application for a degree subject. 
                                      The tools I used were NextJS, Bootstrap and Firebase. " 
                        image="eatsylp2.png" urlRocket="https://eatsylp.vercel.app/" urlCode="https://github.com/franpb14/eatsyLP"></Project>
              <Project  name="This page" index="3"
                        description="Obviously I’ve also developed this page." 
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
