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
              <Project name="TimeOverflow" index="1"
                       description="I have continued contributing to this open source throughout these years. Lately, it has been a more modest contribution. I also leave the link to their page."
                       image="timeoverflow.png" urlRocket="https://www.timeoverflow.org/" urlCode="https://github.com/coopdevs/timeoverflow/pulls/franpb14"></Project>
              <Project name="AirGift" index="2"
                       description="Originally this page was a gift where you had to move on the map with the plane following a series of clues. This page has a lot of JS to move the airplane around the map and detect if it's passing over a certain area."
                       image="airgift.png" urlRocket="https://airgift.vercel.app/" urlCode="https://github.com/franpb14/airgift"></Project>
              <Project name="Telegram forex bot" index="3"
                       description="This bot is hosted on my Raspberry Pi, it uses the Yahoo Finance API and a set of indicators (such as RSI, Bollinger...) to make a selection based on specific criteria. Afterwards, it sends me the best ones via Telegram. I have a cron job set up to analyze every 3 hours on 1-hour candles and another one for daily candles."
                       image="telegrambot.webp" urlRocket="false" urlCode="false"></Project>
              <Project name="Telegram offers bot" index="4"
                       description="This bot is also on my Raspberry Pi. It performs web scraping on the Melia using Puppeteer. It looks at all the locations for the upcoming 4 weekends, updates a JavaScript file with all the sites, commits the updated sites, and then publishes a static page on Vercel with the sites sorted from cheapest to most expensive. It also includes some tools for filtering."
                       image="beachrobot.jpg" urlRocket="https://meliaoffers.vercel.app" urlCode="false"></Project>
              <Project name="This page" index="5"
                       description="Obviously I’ve also developed this page. This page was started some time ago, so you may notice some things are not quite right, such as programming in Spanish, using let instead of const..."
                       image="thispage.png" urlRocket="https://franperejon.vercel.app/" urlCode="https://github.com/franpb14/portfolio"></Project>
              <div className="col-md-12 my-2">
                <h3 className="text-center text-light mb-0">Done before graduating</h3>
                <p className='text-center text-light small'>Don't be too harsh on the code.</p>
              </div>
              <Project name="AgrupaForm" index="6"
                       description="The mission of this web application is offering the user the ability of grouping answers
                                     from a Google Forms questionnaire taking into account different variables.
                                      For example, the user would be able to segregate answers depending on age and favourite season of the year."
                       image="agrupaform.png" urlRocket="https://agrupa-form.vercel.app/" urlCode="https://github.com/franpb14/AgrupaForm"></Project>
              <Project name="Eatsy landing page" index="7"
                       description="I was in charge of developing the entire landing of a web application for a degree subject.
                                     The tools I used were NextJS, Bootstrap and Firebase. "
                       image="eatsylp2.png" urlRocket="https://eatsylp.vercel.app/" urlCode="https://github.com/franpb14/eatsyLP"></Project>

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <a target="_blank" className="btn btn-outline-light mb-3" href="https://github.com/franpb14?tab=repositories">
                    More on GitHub
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
