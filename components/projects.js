import 'bootstrap/dist/css/bootstrap.css'
import Project from './project.js'

export default function Projects() {
  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-11">
          <div className="card card-bod bg-dark">
            <div className="row justify-content-center">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Projects</h1>
              </div>
              <Project  name="AgrupaForm" description="lorem ipsum" 
                        image="agrupaform.png" urlMore="asd"></Project>
              <Project  name="Eatsy landing page" description="lorem ipsum" 
                        image="eatsylp2.png" urlMore="asd"></Project>
                        
              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <a target="_blank" href="https://github.com/franpb14">
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