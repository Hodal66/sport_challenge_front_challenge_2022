import React from "react";
import BackgroungImage from "../images/header_bg_1.jpg";
import Header from "../../components/Header";
import setionImage from "../../images/about2.jpg";
import VisionImage from "../../images/about3.jpg";
import MissionImage from "../../images/about2.jpg";
import "./about.css";

function About() {
  return (
    <div>
      <h1>About us</h1>
      <Header title="About Us" image={BackgroungImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt
        a est eligendi, delectus nesciunt!
      </Header>
      <section className="about__vision about__story-container">
        <div className="container ">
          <div className="about__section-image">
            <img src={setionImage} alt="Our vision Imag" />
          </div>
        </div>
        <div className="about__section-content">
          <h1>Our vision</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            illum corporis laborum quam minus veritatis architecto harum? Quia
            tenetur deleniti itaque debitis ipsa, rerum nam delectus eaque
            mollitia eos eligendi nihil aliquid. Officia veritatis at nulla
            incidunt atque, odio laborum?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            consequatur laboriosam, doloribus eveniet quisquam deserunt harum
            sapiente suscipit vitae at eius molestiae autem mollitia tempora?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            adipisci architecto dolores eos perspiciatis unde.
          </p>
        </div>
      </section>

      <section className="about__vision about__vision-container">
        <div className="about__vision-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            illum corporis laborum quam minus veritatis architecto harum? Quia
            tenetur deleniti itaque debitis ipsa, rerum nam delectus eaque
            mollitia eos eligendi nihil aliquid. Officia veritatis at nulla
            incidunt atque, odio laborum?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            consequatur laboriosam, doloribus eveniet quisquam deserunt harum
            sapiente suscipit vitae at eius molestiae autem mollitia tempora?
          </p>
        </div>
        <div className="about__section-image second__image">
          <img src={VisionImage} alt="Our Vision Imag" />
        </div>
      </section>

      <section className="about__visionx">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission Imag" />
          </div>

          <div className="about__section-content">
            <h1>Our mission</h1>
            <p>
              mission dolor sit amet consectetur adipisicing elit. Itaque illum
              corporis laborum quam minus veritatis architecto harum? Quia
              tenetur deleniti itaque debitis ipsa, rerum nam delectus eaque
              mollitia eos eligendi nihil aliquid. Officia veritatis at nulla
              incidunt atque, odio laborum?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi consequatur laboriosam, doloribus eveniet quisquam
              deserunt harum sapiente suscipit vitae at eius molestiae autem
              mollitia tempora?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              adipisci architecto dolores eos perspiciatis unde.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
