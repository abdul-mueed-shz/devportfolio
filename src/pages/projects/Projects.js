import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Zoom } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Helmet>
          ‍<title>Projects</title>‍
          <meta
            name="description"
            content="What's better when Abdul's project speak for itself and explains his tech skills in a better way"
          />
          <meta name="twitter:site" content="@AlMoeedShz" />{" "}
          <meta name="twitter:creator" content="@AlMoeedShz" />{" "}
          <meta name="twitter:title" content="Projects " />{" "}
          <meta
            property="twitter:url"
            content="https://github.com/abdul-mueed-shz"
          />
          <meta
            name="twitter:description"
            content="What's better when Abdul's project speak for itself and explains his tech skills in a better way"
          />{" "}
          <meta property="og:title" content="Projects " />{" "}
          <meta
            property="og:description"
            content="What's better when Abdul's project speak for itself and explains his tech skills in a better way"
          />
          <meta
            property="og:url"
            content="https://github.com/abdul-mueed-shz"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet>
        <Header theme={theme} />
        <div className="basic-projects">
          <Zoom duration={1000}>
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Zoom>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/abdul-mueed-shz"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
