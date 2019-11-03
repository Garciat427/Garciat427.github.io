import React from "react";

function Footer() {
   return (
      <div>
         <footer className="page-footer min-Padding blue-grey darken-4">
            
            <div className="footer-copyright">
               <div className="container">
                  <p>
                     © 2019 Troy Garcia FrontEndOnFront
                     
                     <a className="blue-grey-text text-lighten-4 right" 
                     href="https://www.instagram.com/garciat427/">
                        <i className="link-Footer fab fa-instagram"></i>
                     </a>
                     <a className="blue-grey-text text-lighten-4 right" 
                     href="https://twitter.com/Garciat427">
                        <i className="link-Footer fab fa-twitter"></i>
                     </a>
                     <a className="blue-grey-text text-lighten-4 right" 
                     href="mailto:tg1212@outlook.com">
                        <i className="link-Footer fas fa-envelope"></i>
                     </a>
                     <a className="blue-grey-text text-lighten-4 right" 
                     href="https://www.linkedin.com/in/garciat427">
                        <i className="link-Footer fab fa-linkedin"></i>
                     </a>
                     <a className="blue-grey-text text-lighten-4 right" 
                     href="https://github.com/Garciat427">
                        <i className="link-Footer fab fa-github"></i>
                     </a>
                     
                  </p>
                  
               </div>
            </div>
         </footer>       
      </div>
   );
}

export default Footer;