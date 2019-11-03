import React from "react";

function FloatingActionBtn() {
   return (
      <div className="fixed-action-btn">
         <button className="btn-floating btn-large blue-grey darken-4 hoverable">
            <i className="fas fa-link link-Action-Btn"></i>
         </button>
         <ul>
            <li>
               <a href="https://github.com/Garciat427" 
               className="btn-floating blue-grey darken-3 hoverable">
                  <i className="fab fa-github link-Action-Btn"></i>
               </a>
            </li>
            <li>
               <a href="https://www.linkedin.com/in/garciat427" 
               className="btn-floating blue-grey darken-3 hoverable">
                  <i className="fab fa-linkedin-in link-Action-Btn"></i>
               </a>
            </li>
            <li>
               <a href="mailto:tg1212@outlook.com" 
               className="btn-floating blue-grey darken-3 hoverable">
                  <i className="fas fa-envelope link-Action-Btn"></i>
               </a>
            </li>
            <li>
               <a href="https://twitter.com/Garciat427" 
               className="btn-floating blue-grey darken-3 hoverable">
                  <i className="fab fa-twitter link-Action-Btn"></i>
               </a>
            </li>
            <li>
               <a href="https://www.instagram.com/garciat427/" 
               className="btn-floating blue-grey darken-3 hoverable">
                  <i className="fab fa-instagram link-Action-Btn"></i>
               </a>
            </li>
         </ul>
      </div>
   );
}

export default FloatingActionBtn;

