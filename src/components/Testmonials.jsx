import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../pages/UI/Card";
import { testimonials } from "../data";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
function Testmonials() {
  const [index, setIndex] = useState(0);
  const { name, job, quote, avatar } = testimonials[index];

  const prevTestmonialHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= testimonials.length - 1) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestmonialHandler = () => {
    setIndex((next) => next + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="testmonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="TestiMonial"
          className="testmonial__head"
        />
        <Card className="testmonial">
          <div className="testmonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testmonial__quote"> {`${quote}`}</p>
          <h5>{name}</h5>
          <small className="testmonial__title">{job}</small>
        </Card>
        <div className="testmonial_btn_container">
          <button className="testmonial_btn">
            <IoIosArrowDropleftCircle onClick={prevTestmonialHandler} />
          </button>
          <button className="testmonial_btn">
            <IoIosArrowDroprightCircle onClick={nextTestmonialHandler} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testmonials;
