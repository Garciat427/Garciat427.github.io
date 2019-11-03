import React from "react";

function ContactMe() {
   return (
      <div className="container scrollspy" id="AboutMe" throttle="500">
         <div className="section">
            <div className="row">
               <div className="col s12 center">

                  <h4 data-aos="fade-right" data-aos-duration="800" data-aos-offset="100"><i className=" blue-grey-text text-darken-4">Let's Talk</i></h4>
                  <section data-aos="fade-up" data-aos-duration="800" data-aos-offset="100">
                     <br></br>
                     <p className="mainContent blue-grey-text text-darken-4">Currently, I am tackling some commission based freelance work with my company FrontEndOnFront. With my various projects in progress, I'm currently not looking for any freelance opportunities. <br></br> However with that being said, if you want to talk, whether its for a project idea, job opportunities, or to just say hi, my inbox is open!</p>
                     <br></br><br></br>
                     
                     <a className="btn waves-effect waves-light blue-grey darken-4 hoverable link-Action-Btn" href ="mailto:tg1212@outlook.com" target="_tab">Say Hi!
                        <i className="far fa-envelope right"></i>
                     </a>
                  </section>

               </div>
            </div>
         </div>
      </div>
   );
}

export default ContactMe;

