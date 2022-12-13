import 'bootstrap/dist/css/bootstrap.css'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <footer className="col-sm-12 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-2 col-4 text-center">
                <a className="link-footer" target="_blank" href="https://stackoverflow.com/users/15076357/fran-perej%c3%b3n"><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></a>
              </div>

              <div className="col-sm-2 col-4 text-center">
              <a className="link-footer" target="_blank" href="https://github.com/franpb14"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
              </div>              
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
