import React, { Component } from "react";
// import RelatedLinks from "./RelatedLinks";
import "./blogSection.css";
const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";
export default class BlogSection extends Component {
  state = {
    blogs: [],
    duplicate_blogs: [],
  };
  componentDidMount() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API error " + response.status);
        }
        console.log("Every thing ok in fetch side");
        return response.json();
      })
      .then((data) => {
        this.setState({ blogs: [...data] });
        this.setState({
          duplicate_blogs: this.state.blogs[
            Math.floor(Math.random() * this.state.blogs.length)
          ],
        });
      });
  }

  //fetch the blog whose id === the title of which user cliked on related links section
  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    this.setState(
      {
        duplicate_blogs: [
          this.state.blogs.filter((blog) => blog.id === e.target.id),
        ][0][0],
      },
      () => console.log(this.state.duplicate_blogs) //Just for the sake of resolving.. since setState is asynchronous hence the callback.
    );
  };
  render() {
    const { title, imageUrl, content } = this.state.duplicate_blogs;
    if (!this.state.duplicate_blogs.links && this.state.duplicate_blogs) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="blog__main">
          <div className="blog__section">
            <h1>{title}</h1>
            <img className="blog__image" src={imageUrl} alt="BlogImage"></img>
            <p>{content}</p>
          </div>
          <div className="blog__rel-links">
            <div className="aside__section">
              <h1>Related Links</h1>
              {this.state.duplicate_blogs.links.map((link) => {
                return (
                  <div>
                    <p id={link.id} onClick={this.handleClick}>
                      => {link.title}
                    </p>
                    <img
                      className="related-links__image"
                      id={link.id}
                      src={
                        this.state.blogs.filter(
                          (blog) => blog.id === link.id
                        )[0].imageUrl
                      }
                      onClick={this.handleClick
                      }
                      alt="Img"
                    />
                  </div>
                );
              })}
            </div>
            {/* <RelatedLinks blog={this.state.duplicate_blogs} /> */}
          </div>
        </div>
      );
    }
  }
}
