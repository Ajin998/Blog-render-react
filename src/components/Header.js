import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header__nav">
      {/* logo */}
      <img
        className="header__logo"
        src="https://t3.ftcdn.net/jpg/03/69/72/20/360_F_369722024_ddxHImowV6qAvFUdhari9ucvncbstW9N.jpg"
        alt="blog-logo"
      />
      {/* search */}
      <div className="header__content">
        <input type="text" className="header__search" />
        <Button color="primary">
          <SearchIcon style={{ fill: "#CAAB6F" }} />
        </Button>
        {/* navlinks */}
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="/">Blogs</a>
      </div>
    </nav>
  );
}

export default Header;
