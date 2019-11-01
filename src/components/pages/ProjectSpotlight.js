import React from "react";


function ProjectSpotlight() {
   return (
      <div className="row">
         <div className="col s12 m6">
            <div className="card">
               <div className="card-image">
               <img src="assets/images/DipmatMed-Front-Page.png" alt="Unsplashed background img 1"></img>
                  <span className="card-title">Med 2.0 Symptom and Medical Trend Tracker</span>
                  <a href="https://github.com/Garciat427/Med-2.0" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
               </div>
               <div className="card-content">
                  <p>
                     Current Status: In Development (Not Deployed)<br></br>
                     Med 2.0 is an application that checks users symptoms, provides a diagnosis, and analyzes common illness trends within the area. <br></br>
                     Technologies used: ReactJS, NodeJS, ExpressJS, MySQL, SequelizeORM, MateralizeCSS
                  </p>
                  <p><i class="fab fa-react techIcon"></i> <i class="fab fa-node techIcon"></i> <i class="fas fa-server techIcon"></i> <i class="fas fa-database techIcon"></i></p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProjectSpotlight;
