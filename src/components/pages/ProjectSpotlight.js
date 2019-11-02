import React from "react";


function ProjectSpotlight() {
   return (
      <div>

         <div className="row">
            <div className="col s12 m8">
               {/* Project Card */}

               <div class="card">
                  <div class="card-image waves-effect waves-block waves-light">
                     <img class="activator" src="assets/images/DipmatMed-Front-Page.png"></img>
                     <span className="card-title"></span>
                  </div>

                  <div class="card-contentchevron-icon">
                     <span class="card-title activator grey-text text-darken-4 chevron-icon"><i className="fas fa-chevron-up"></i></span>
                  </div>

                  <div class="card-reveal">
                     <span class="card-title grey-text text-darken-4 chevron-icon"><i className="fas fa-chevron-down"></i></span>
                     <p>
                        Med 2.0 is an application that checks users symptoms, provides a diagnosis, and analyzes common illness trends within the area. <br></br>
                     </p>
                     <p>
                        Current Status: In Development (Not Deployed)<br></br>
                        Technologies used: ReactJS, NodeJS, ExpressJS, MySQL, SequelizeORM, MateralizeCSS
                     </p>

                  </div>
               </div>

               <div className="card">
                  <div className="card-image">
                     <img src="assets/images/DipmatMed-Front-Page.png" alt="Unsplashed background img 1"></img>
                     <span className="card-title"></span>
                     <a href="https://github.com/Garciat427/Med-2.0" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                  </div>
                  <div className="card-content">
                     <p>
                        Current Status: In Development (Not Deployed)<br></br>
                        Med 2.0 is an application that checks users symptoms, provides a diagnosis, and analyzes common illness trends within the area. <br></br>

                     </p>

                  </div>
               </div>
            </div>

            {/* Description Card */}
            <div className="col s12 m4"> 
               <div className="card">
                  <div className="card-content Black-text">
                     <span className="card-title">Featured Project</span>
                     <p>Med 2.0 Symptom and Medical Trend Tracker
                        <p><i clas="fab fa-react techIcon"></i> <i className="fab fa-node techIcon"></i> <i className="fas fa-server techIcon"></i> <i className="fas fa-database techIcon"></i></p></p>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
}

export default ProjectSpotlight;
