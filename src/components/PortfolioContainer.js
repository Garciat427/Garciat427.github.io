import React, { Component } from "react";
import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import Paralax2 from "./pages/Paralax2";

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
      </div>
    );
  }
}

export default PortfolioContainer;
