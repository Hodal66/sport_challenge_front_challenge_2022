import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import { IoMdUmbrella } from "react-icons/io";

import "./contact.css";
function Contact() {
  return (
    <div>
      <Header title="Get In Touch" image={HeaderImage}>
        I have passed this header into Header components now it works perfect
        and is re_usable components I have ever seen, take a cup of tea to
        whoever brings us the components are very very smart.
      </Header>
      <section className="contact">
        <div className="continer contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:mhthodol@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/muhetohodal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdDinnerDining />
            </a>
            <a
              href="http://wa.me/+250782439775"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdUmbrella />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
