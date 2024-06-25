import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          ‍<title>Abdul Mueed </title>‍
          <meta
            name="description"
            content="Abdul Mueed (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Abdul is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST"
          />
          <meta name="twitter:site" content="@AlMoeedShz" />{" "}
          <meta name="twitter:creator" content="@AlMoeedShz" />{" "}
          <meta name="twitter:title" content="Resume " />{" "}
          <meta property="twitter:url" content="https://abdulmueed.dev/home" />
          <meta
            name="twitter:description"
            content="Abdul Mueed (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Abdul is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST"
          />
          <meta property="og:title" content="Abdul Mueed " />{" "}
          <meta
            property="og:description"
            content="Abdul Mueed (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Abdul is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST"
          />
          <meta property="og:url" content="https://abdulmueed.dev/" />
          <meta property="og:site_name" content="Abdul Mueed " />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
