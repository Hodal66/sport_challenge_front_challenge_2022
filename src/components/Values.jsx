import React from "react";
import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../pages/UI/Card";
function Values() {
  return (
    <div>
      <div className="values">
        <div className="container values__container">
          <div className="values__left">
            <div className="values__image">
              <img src={Image} alt="Now this is values pic" />
            </div>
          </div>
          <div className="values__right">
            <SectionHead icon={<GiCutDiamond />} title="Values" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              at fugiat quidem magni molestiae cum!
            </p>
            <div className="values__wrapper">
              {values.map(({ id, icon, title, desc }) => {
                return (
                  <>
                    <Card className="values__value" key={id}>
                      <span>{icon}</span>
                      <h4>{title}</h4>
                      <small>{desc}</small>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
