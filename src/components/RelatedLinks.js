import React, { Component } from "react";
import "./Aside_section.css";
export class RelatedLinks extends Component {
  handleClick = () => {
    alert("Working Fine");
  };
  render() {
    if (!this.props.blog.links) {
      return (
        <div>
          <h1>Loading....</h1>
        </div>
      );
    } else {
      return (
        <div className="aside__section">
          <h1>Related Links</h1>
          {this.props.blog.links.map((link) => {
            return <p onClick={this.handleClick}>=> {link.title}</p>;
          })}
        </div>
      );
    }
  }
}

export default RelatedLinks;
