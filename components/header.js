import 'bootstrap/dist/css/bootstrap.css'

export default function Header() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <header className="col-sm-12">
      
          <a target="_blank" className="logo" href="https://github.com/franpb14">Fran Perejón</a>
          
          <input id="nav" type="checkbox"/>
          <label htmlFor="nav"></label>
          
          <nav>
            <ul>
              <li><a href="#aboutme">About me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav> 
          
        </header>
      </div>
    </div>
  )
}
