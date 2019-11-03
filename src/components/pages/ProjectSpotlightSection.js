import React from "react";
import ProjectSpotlight from "./ProjectSpotlight";

function ProjectSpotlightSection() {
   return (
      <div className="container scrollspy" id="Past Projects" throttle="500">
         <div className="section">

            <div className="row">
               <div className="col s12 center">
                  <h4 data-aos="fade-right" data-aos-duration="800" data-aos-offset="100"><i className=" blue-grey-text text-lighten-1">Featured Projects</i></h4>
                  
               </div>
            </div>

            <div className="row">
               <div className="col s12">
                  <section>
                     <ProjectSpotlight />
                  </section>
               </div>
            </div>

         </div>
      </div>
   );
}

export default ProjectSpotlightSection;
