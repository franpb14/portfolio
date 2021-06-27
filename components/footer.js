import 'bootstrap/dist/css/bootstrap.css'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <header className="col-sm-12">
          <div className="container">
            {//<a href="" className="logo">Thanks</a>
            }
            <input id="nav" type="checkbox"/>
            <label htmlFor="nav"></label>
            
            <nav>
              <ul>
                <li><a target="_blank" href="https://stackoverflow.com/users/15076357/fran-perej%c3%b3n"><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></a></li>
                <li><a target="_blank" href="https://github.com/franpb14"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
              </ul>
            </nav> 
          </div>
        </header>
      </div>
    </div>
  )
}
