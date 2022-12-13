import 'bootstrap/dist/css/bootstrap.css'

export default function Experience() {
  return (
    <div id="containerExperience" className="container mt-4">
      <div className="row justify-content-center">
        <div className=" bg-out col-10">
          <div className="row justify-content-center">
            <h1 className="text-center">Experience</h1>
          </div>

          <h3>Final thesis on open source</h3>
          <h5>September 2020 - June 2021</h5>
          <p>
            For my final degree project I collaborated with an open source repository (
            <a href="https://github.com/coopdevs/TimeOverflow">TimeOverflow</a>) and worked with Ruby on Rails and JavaScript. 
            I was lucky enough to have a code reviewer from whom I was able to obtain a lot of feedback. 
            This along with working with a well-formed code helped me to get a good idea of the framework.  
          </p>
          
          <hr></hr>
                            
          <h3>Intern at Konecta</h3>
          <h5>May 2021 - November 2021</h5>
          <p>
            I worked with Spring and I used Dbeaver to manage several databases. 
            I was more in the back end but I have also done something in the front end.
          </p>
          <hr></hr>

          <h3>Full stack at Crisalix</h3>
          <h5>December 2021 - current</h5>
          <p>
            I am developing using Ruby on Rails as full stack. The work methodology followed by 
            Crisalix is SCRUM. In the front end we also use a framework developed by them
            called Ralix, which is a simplification of JavaScript to write less code.
          </p>
          <hr></hr>
        </div>
      </div>      
    </div>
  )
}