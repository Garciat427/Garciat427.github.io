import React from "react";

function Footer() {
   return (
      <div>
         <section className="scrollspy" id="Contact">
            <div className="container">
               <div className="section">
                  <div className="row">
                     <div className="col s12 center">

                        <h4 data-aos="fade-right" data-aos-duration="800" data-aos-offset="100"><i className="mdi-content-send brown-text">Lets Get Started!</i></h4>
                        <section data-aos="fade-up" data-aos-duration="800">
                           <p className="light">Ready to start? Have an Idea? Shoot me a message here</p>
                        </section>

                     </div>
                  </div>
               </div>
            </div>
         </section >

         <footer className="page-footer">
            <div className="container">
               <div className="row">
                  <div className="col l6 s12">
                     <h5 className="white-text">For any buisness inquires:</h5>
                     <p className="grey-text text-lighten-4">frontendonfront@outlook.com</p>
                  </div>

                  <div className="col l4 offset-l2 s12">
                     <h5 className="white-text">Links</h5>
                     <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="footer-copyright">
               <div className="container">
                  © 2019 FrontEndOnFront
               <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
               </div>
            </div>
         </footer>       
      </div>
   );
}

export default Footer;