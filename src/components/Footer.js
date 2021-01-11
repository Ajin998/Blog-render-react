import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Footer() {
  return (
    <div className="footer__section">
      <footer>
        @Ajin Varghese
        <br/><br/>
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <br/><br/>
        Copyright ©2020
      </footer>
    </div>
  );
}

export default Footer;
