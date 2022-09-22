import React from "react";
import "./trainers.css";
import Header from "../../components/Header";
import HeaderImage from "../images/header_bg_5.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiTwotoneTag } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer";

function Trainers() {
  return (
    <div>
      <Header title="Our Trainers " image={HeaderImage}>
        THis page will help every One to schedule his / her time to meet with
        their teacher in the easy way Becouse we are going to put all
        information of our trainers in this platform yeah you are welcome🏹🚀
      </Header>
      <section className="trainers">
        <div className="container trainer__container">
          {trainers.map(({ id, name, image, job, socials }) => {
            return (
              <>
                <Trainer
                  key={id}
                  name={name}
                  image={image}
                  job={job}
                  socials={[
                    { icon: <FaLinkedin />, link: socials[0] },
                    { icon: <FaFacebook />, link: socials[1] },
                    { icon: <AiTwotoneTag />, link: socials[2] },
                    { icon: <AiFillInstagram />, link: socials[3] },
                  ]}
                />
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Trainers;
