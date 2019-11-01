import React, { Component } from "react";
import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import Paralax2 from "./pages/Paralax2";
import ProjectSpotlightSection from "./pages/ProjectSpotlightSection";
import OtherProjects from "./pages/OtherProjects";
import Footer from "./pages/Footer";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Paralax2 />
        <ProjectSpotlightSection />
        <OtherProjects />
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;
