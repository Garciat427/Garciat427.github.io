import React from "react";

function FloatingActionBtn() {
   return (
      <div className="fixed-action-btn">
         <a className="btn-floating btn-large blue-grey darken-4">
            <i class="fas fa-link"></i>
         </a>
         <ul>
            <li><a href="https://github.com/Garciat427" className="btn-floating blue-grey darken-3 hoverable link-Action-Btn"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/garciat427" className="btn-floating blue-grey darken-3 hoverable link-Action-Btn"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="mailto:tg1212@outlook.com" className="btn-floating blue-grey darken-3 hoverable link-Action-Btn"><i class="fas fa-envelope"></i></a></li>
            <li><a href="https://twitter.com/Garciat427" className="btn-floating blue-grey darken-3 hoverable link-Action-Btn"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/garciat427/" className="btn-floating blue-grey darken-3 hoverable link-Action-Btn"><i class="fab fa-instagram"></i></a></li>
         </ul>
      </div>
   );
}

export default FloatingActionBtn;

