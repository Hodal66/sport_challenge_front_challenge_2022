import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiTwotoneTag } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
  return (
    <footer className="container footer__container">
      <article>
        <Link to="/" className="logo">
          <img src={Logo} alt="my image_logo" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita
          earum cumque animi quas libero?
        </p>
        <div className="footer__social">
          <a
            href="http://linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin />
          </a>

          <a
            href="http://facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebook />
          </a>

          <a
            href="http://tweeter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiTwotoneTag />
          </a>

          <a
            href="http://instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillInstagram />
          </a>
        </div>
      </article>
      <article>
        <h4>Permalinks</h4>
        <Link to="/about">About</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/trainers">Trainers</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </article>
      <article>
        <h4>Insights</h4>
        <Link to="/s">Blog</Link>
        <Link to="/s">Case Studies</Link>
        <Link to="/s">Events</Link>
        <Link to="/s">Communities</Link>
        <Link to="/s">FAQs</Link>
      </article>
      <article>
        <h4>Get In Touch</h4>
        <Link to="/contact">Contact Us</Link>
        <Link to="/s">Support</Link>
      </article>
      <div className="footer__copyright">
        <small>
          2022 MHT Hodol Application Design &copy; All Right Reserved 🥋
        </small>
      </div>
    </footer>
  );
}

export default Footer;
