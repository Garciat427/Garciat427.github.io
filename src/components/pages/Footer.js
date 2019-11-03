import React from "react";

function Footer() {
   return (
      <div>
         <footer className="page-footer min-Padding blue-grey darken-4">
            
            <div className="footer-copyright">
               <div className="container">
                  <p>
                     © 2019 Troy Garcia FrontEndOnFront
                     <a className="grey-text text-lighten-4 right link-Footer" href="#!"><i class="fab fa-twitter-square"></i></a>
                     <a className="grey-text text-lighten-4 right link-Footer" href="#!"><i class="fas fa-envelope"></i></a>
                     <a className="grey-text text-lighten-4 right link-Footer" href="#!"><i class="fab fa-linkedin"></i></a>
                     <a className="grey-text text-lighten-4 right link-Footer" href="#!"><i class="fab fa-github"></i></a>
                  </p>
                  
               </div>
            </div>
         </footer>       
      </div>
   );
}

export default Footer;