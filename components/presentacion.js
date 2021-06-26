import 'bootstrap/dist/css/bootstrap.css'

export default function Presentacion() {
  return (
    <div className="container presentacion_principal">
      <div className="row justify-content-center">
        <div className="row justify-content-center b-nn mt-4 col-10">
          <div className="col-lg-4 col-md-6"><img className="mt-4 mb-4" src="/negraFran2.jpg"></img></div> 
          <div className="col-lg-8 col-md-6">
            <div className="row justify-content-center mt-4">
              <h2>Francisco José Perejón Barrios</h2>
              <h4>Software engineer</h4>
              <p>In November I will obtain my degree in software engineering. This career has taught me a lot and instructed me, 
                 among other things, in programming, which today is not only my job but also one of my hobbies.</p>
              <div className="row justify-content-center">
                <button className="btn col-lg-3 col-md-6 btn-outline-light mb-3">Contact me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
