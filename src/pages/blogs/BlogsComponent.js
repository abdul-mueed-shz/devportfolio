import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Blog.css";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import { Zoom } from "react-reveal";
import { blogs } from "../../portfolio";
// import BlogCard from "../../components/blogCard/BlogCard";

class BlogsComponent extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="blogs-main">
        <Helmet>
          ‍<title>Blogs </title>‍
          <meta
            name="description"
            content="Wanna know more about what I write? Here's everything you would be needing to know more about me"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@AlMoeedShz" />{" "}
          <meta name="twitter:creator" content="@AlMoeedShz" />{" "}
          <meta name="twitter:title" content="Blogs - TheRealMVP" />
          <meta property="twitter:url" content="https://abdulmueed.dev/blogs" />
          <meta
            name="twitter:description"
            content="Wanna know more about what I write? Here's everything you would be needing to know more about me"
          />{" "}
          <meta name="twitter:image" content="url_to_image" />{" "}
          <meta property="og:title" content="Blogs - TheRealMVP" />{" "}
          <meta
            property="og:description"
            content="Wanna know more about what I write? Here's everything you would be needing to know more about me"
          />
          <meta property="og:image" content="url_to_image" />
          <meta property="og:url" content="https://abdulmueed.dev/blogs" />
          <meta property="og:site_name" content="Blogs - TheRealMVP" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet>
        <Header theme={this.props.theme} />

        {/* <div className="blog-header">
          <h1 className="blog-header-text">{blogs.title}</h1>
          <p className="subTitle blog-subtitle">{blogs.subtitle}</p>
        </div> */}
        <div className="blog-main-div">
          <div className="blog-text-div">
            <Zoom duration={1000}>
              <div className="blog-heading-div">
                <div className="blog-heading-text-div">
                  <h1
                    className="blog-heading-text"
                    style={{ color: theme.text }}
                  >
                    {blogs["title"]}
                  </h1>
                  <p
                    className="blog-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {blogs["subtitle"]}
                  </p>
                  <div className="blogsite-btn-div">
                    <Link to={blogs.link} style={{ textDecoration: "none" }}>
                      <Button text="Visit back home" theme={theme} />
                    </Link>
                  </div>
                </div>
                <div className="blog-heading-img-div">
                  {/* <img
											src={require(`../../assests/images/${blogs["avatar_image_path"]}`)}
											alt=""
										/> */}
                  <BlogsImg theme={theme} />
                </div>
              </div>
            </Zoom>
            {/* Blogs card */}
            {/* <Fade bottom duration={1000} distance="40px">
                                <div className="blogs-card-div">
                                    {blogs.section.map((blog) => {
                                        return <BlogCard blog={blog} theme={theme} />
                                    })}
                                </div>
                            </Fade> */}
          </div>
        </div>

        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default BlogsComponent;
