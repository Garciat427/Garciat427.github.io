import React from "react";


function ProjectSpotlight() {
   return (
      <div>

         {/* Project Spotlight 1 */}
         <div className="row" data-aos="fade-up" data-aos-duration="800" data-aos-offset="400">
            <div className="col s12 m8">
               {/* Project Card */}
               <div className="card hoverable">
                  <div className="card-image waves-effect waves-block waves-light">
                     <img className="activator" src="assets/images/DipmatMed-Front-Page.png" alt="Med 2.0 Front Page"></img>
                  </div>

                  <div className="card-contentchevron-icon center">
                     <span className="card-title activator grey-text text-darken-4 chevron-icon "><i className="fas fa-chevron-up"></i></span>
                  </div>

                  <div className="card-reveal">
                     <span className="card-title grey-text text-darken-4 chevron-icon center">
                        <i className="fas fa-chevron-down"></i>
                        <span className="card-title">Med 2.0 Symptom and Medical Trend Tracker</span>
                     </span>


                     Med 2.0 is a medical-based application that is being developed with 2 goals in mind. <br></br>
                     <div className="tab">
                        1. Provide a diagnosis to the end-user based on symptoms provided.<br></br>
                        2. Collect croud-sourced empirical data on diagnosises to allow for foresight of current conditions within an area.<br></br>
                     </div>
                     This data can be proven benifical, and can also assist with the allocation of resources.<br>
                     </br> This application was completed for Project 2 and continued as Project 3 of my Bootcamp.
                     <blockquote className="min-Margin">
                        <p className="min-Margin">
                           Current Status: In Development (Not Deployed)<br></br>
                           Proposed Project Completion: December 2019<br></br>
                           Technologies used: ReactJS, NodeJS, ExpressJS, MySQL, SequelizeORM, MateralizeCSS
                        </p>
                     </blockquote>
                     <h5 className="right">
                        <a href="https://github.com/Garciat427/Med-2.0" className="projectLink black-text"><i className="text-black fab fa-github projectLink"></i></a>
                        {/* Blocked due to not deployed <a href="https://github.com/Garciat427/Med-2.0" className="projectLink black-text"><i className="fas fa-external-link-alt projectLink"></i></a> */}

                     </h5>
                  </div>
               </div>
            </div>

            {/* Description Card */}
            <div className="col s12 m4">
               <div className="card">
                  <div className="card-content Black-text">

                     <div className="row">
                        <div className="col s12 m12">
                           <span className="card-title">Med 2.0 <br></br>
                              <span className="subtitle-Project">
                                 Symptom and Medical Trend Tracker
                              </span>
                           </span>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col s12 m12 center">
                           <span className="">
                              <i className="fas fa-database techIcon"></i>
                              <i className="fas fa-server techIcon"></i>
                              <i className="fab fa-react techIcon"></i>
                              <i className="fab fa-node techIcon"></i>
                           </span>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
         
         {/* Project Spotlight 2 */}
         <div className="row" data-aos="fade-up" data-aos-duration="800" data-aos-offset="400">
            {/* Description Card */}
            <div className="col s12 m4">
               <div className="card">
                  <div className="card-content Black-text">

                     <div className="row">
                        <div className="col s12 m12">
                           <span className="card-title">Travel-Ten <br></br>
                              <span className="subtitle-Project">
                                 A Travel Site for the top 10 eats, sleeps, and visits
                              </span>
                           </span>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col s12 m12 center">
                           <span className="">
                              <i className="fab fa-html5 techIcon"></i>
                              <i className="fab fa-css3-alt techIcon"></i>
                              <i className="fab fa-js techIcon"></i>
                           </span>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col s12 m12 center">
                           <p>
                              <span>HTML5</span>
                              <span className="tab-small">CSS3</span>
                              <span className="tab-small">JS/JQuery</span>
                              <span className="tab-small">AJAX</span>


                           </p>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
            {/* Project Card 2 */}
            <div className="col s12 m8">
               <div className="card hoverable">
                  <div className="card-image waves-effect waves-block waves-light">
                     <img className="activator" src="assets/images/Travel10-FrontPage.jpg" alt="Med 2.0 Front Page"></img>
                  </div>

                  <div className="card-contentchevron-icon center">
                     <span className="card-title activator grey-text text-darken-4 chevron-icon "><i className="fas fa-chevron-up"></i></span>
                  </div>

                  <div className="card-reveal">
                     <span className="card-title grey-text text-darken-4 chevron-icon center">
                        <i className="fas fa-chevron-down"></i>
                        <span className="card-title">Travel-Ten</span>
                     </span>


                     Travel-Ten is a travel site created to find 10 places to eat, 10 places to sleep, and 10 places to visit within the city. <br></br>
                     <div className="tab">
                        <br></br>
                        <br></br>

                     </div>
                     This Project was created for Project 1 as part of my Bootcamp. It explores technologies such as HTML, CSS, JS/JQuery and basic front end AJAX api requests.
                     <blockquote className="min-Margin">
                        <p className="min-Margin">
                           Current Status: Deployed<br></br>
                           Project Completed: July 2019<br></br>
                           Technologies used: HTML5, CSS3, JS/JQuery, AJAX
                        </p>
                     </blockquote>
                     <h5 className="right">
                        <a href="https://github.com/Garciat427/Travel-Ten" className="projectLink black-text"><i className="text-black fab fa-github projectLink"></i></a>
                        <a href="https://garciat427.github.io/Travel-Ten/" className="projectLink black-text"><i className="fas fa-external-link-alt projectLink"></i></a>

                     </h5>
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
}

export default ProjectSpotlight;
