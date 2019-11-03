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
                     <img className="activator" src="assets/images/DipmatMed-Front-Page.jpg" alt="Med 2.0 Front Page"></img>
                  </div>

                  <div className="card-contentchevron-icon center">
                     <span className="card-title activator blue-grey-text text-darken-4 chevron-icon"><i className="fas fa-chevron-up"></i></span>
                  </div>

                  <div className="card-reveal">
                     <span className="card-title blue-grey-text text-darken-4 chevron-icon center">
                        <i className="fas fa-chevron-down"></i>
                        <span className="card-title">Med 2.0 Symptom and Medical Trend Tracker</span>
                     </span>
                     <span className="blue-grey-text text-darken-1 ">
                           <p className="mainContentHighlighted min-Padding min-Margin">
                              Med 2.0 is a medical-based application that is being developed with 2 goals in mind. 
                              <br></br>
                           </p>
                        <div className="tab blue-grey-text text-darken-4">
                           1. Provide a diagnosis to the end-user based on symptoms provided.<br></br>
                           2. Collect croud-sourced empirical data on diagnosises to allow for foresight of current conditions within an area.<br></br>
                        </div>
                        This data can be proven benifical, and can also assist with the allocation of resources.<br>
                        </br> This application was completed for Project 2 and continued as Project 3 of my Bootcamp.
                     </span>
                     <blockquote className="min-Margin">
                        <p className="min-Margin">
                           Current Status: In Development (Not Deployed)<br></br>
                           Proposed Project Completion: December 2019<br></br>
                           Technologies used: ReactJS, NodeJS, ExpressJS, MySQL, SequelizeORM, MateralizeCSS
                        </p>
                     </blockquote>
                     <h5 className="right">
                        <a href="https://github.com/Garciat427/Med-2.0" target="_tab" className="projectLink black-text"><i className="text-black fab fa-github projectLink"></i></a>
                        {/* Blocked due to not deployed <a href="https://github.com/Garciat427/Med-2.0" className="projectLink black-text"><i className="fas fa-external-link-alt projectLink"></i></a> */}

                     </h5>
                  </div>
               </div>
            </div>

            {/* Description Card */}
            <div className="col s12 m4">
               <div className="card hoverable">
                  <div className="card-content">

                     <div className="row">
                        <div className="col s12 m12">
                           <span className="card-title blue-grey-text text-darken-4">Med 2.0 
                              <span className="subtitle-Project blue-grey-text text-lighten-2 right">
                                 Featured Project
                              </span>
                              <br></br>
                              <span className="subtitle-Project blue-grey-text">
                                 Symptom and Medical Trend Tracker
                              </span>
                           </span>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col s12 m12 center">
                           <span className="blue-grey-text text-lighten-2">
                              <i className="fas fa-database techIcon tooltipped hover-Color" data-position="bottom"
                              data-tooltip="MySQL"></i>

                              <i className="fas fa-server techIcon tooltipped hover-Color" data-position="bottom"
                              data-tooltip="ExpressJS"></i>

                              <i className="fab fa-react techIcon tooltipped hover-Color" data-position="bottom"
                              data-tooltip="ReactJS"></i>

                              <i className="fab fa-node techIcon tooltipped hover-Color" data-position="bottom"
                              data-tooltip="NodeJS"></i>
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
               <div className="card hoverable">
                  <div className="card-content">

                     <div className="row">
                        <div className="col s12 m12">
                           <span className="card-title blue-grey-text text-darken-4">Travel-Ten 
                              <span className="subtitle-Project blue-grey-text text-lighten-2 right">
                                 Featured Project
                              </span>
                              <br></br>
                              <span className="subtitle-Project blue-grey-text">
                                 A Travel Site for the top 10 eats, sleeps, and visits
                              </span>
                           </span>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col s12 m12 center">
                           <span className="blue-grey-text text-lighten-2">
                              <i className="techIcon tooltipped hover-Color fab fa-html5" 
                              data-position="bottom" data-tooltip="HTML5"></i>
                              <i className="techIcon tooltipped hover-Color fab fa-css3-alt" 
                              data-position="bottom" data-tooltip="CSS3"></i>
                              <i className="techIcon tooltipped hover-Color fab fa-js"
                              data-position="bottom" data-tooltip="JS/JQuery"></i>
                              <i className="techIcon tooltipped hover-Color fas fa-exchange-alt" 
                              data-position="bottom" data-tooltip="AJAX"></i>
                           </span>
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
                     <span className="card-title activator blue-grey-text text-darken-4 chevron-icon "><i className="fas fa-chevron-up"></i></span>
                  </div>

                  <div className="card-reveal">
                     <span className="card-title blue-grey-text text-darken-4 chevron-icon center">
                        <i className="fas fa-chevron-down"></i>
                        <span className="card-title">Travel-Ten</span>
                     </span>


                     <p className="mainContentHighlighted min-Padding min-Margin blue-grey-text text-darken-1">Travel-Ten is a travel site created to find 10 places to eat, 10 places to sleep, and 10 places to visit within the city. </p>
                     <p className="blue-grey-text text-darken-1">This Project was created for Project 1 as part of my Bootcamp. It explores technologies such as HTML, CSS, JS/JQuery and basic front end AJAX api requests.</p>
                     
                     <blockquote className="min-Margin">
                        <p className="min-Margin">
                           Current Status: Deployed<br></br>
                           Project Completed: July 2019<br></br>
                           Technologies used: HTML5, CSS3, JS/JQuery, AJAX
                        </p>
                     </blockquote>
                     <h5 className="right">
                        <a href="https://github.com/Garciat427/Travel-Ten" target="_tab" className="projectLink black-text"><i className="text-black fab fa-github projectLink"></i></a>
                        <a href="https://garciat427.github.io/Travel-Ten/" target="_tab" className="projectLink black-text"><i className="fas fa-external-link-alt projectLink"></i></a>

                     </h5>
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
}

export default ProjectSpotlight;
