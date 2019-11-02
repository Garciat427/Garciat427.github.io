import React from "react";

function Header() {
  return (
    <div id="index-banner" className="parallax-container parallax-container-main">

      <div className="section no-pad">
        <div className="container upperHeader">

          <div className="row reset-marg-pad site ">
            <div className="col s12 m12">
              <h1 className="reset-marg-pad header grey-text text-darken-4" data-aos="fade-right"
                data-aos-duration="1000" data-aos-delay="200" id="logo">Troy Garcia</h1>
            </div>
          </div>

          <div className="row reset-marg-pad positionTitle">
            <div className="col s12 m12">
              <h4 className="reset-marg-pad header grey-text text-darken-4" data-aos="fade-up" data-aos-duration="2500"
                data-aos-delay="1000" id="slogan1">Full Stack Developer</h4>
            </div>
          </div>

          <div className="row reset-marg-pad welcomeText">
            <div className="col s12">
              <h5 className="reset-marg-pad header grey-text center text-darken-4" data-aos="fade-up" data-aos-duration="2500"
                data-aos-delay="2000" id="slogan2">Welcome to my Portfolio</h5>
            </div>
          </div>
        </div>
        <div className="container bottomHeader">

          <div className="row reset-marg-pad">
            <div className="col s12 m12">
              <h2 className="arrowIcon center black-text" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="3000" data-aos-offset="0"><i
                className="fas fa-chevron-down"></i></h2>
            </div>
          </div>

        </div>
      </div>

      <div className="parallax">
        <img src="assets/images/White-PC-Fade.jpg" alt="Unsplashed background img 1"></img>
      </div>
    </div>
  );
}

export default Header;
