import React from "react";
import Header from "../../components/Header";
import Card from "../UI/Card";
import HeaderImage from "../images/header_bg_4.jpg";
import { plans } from "../../data";
import "./plans.css";
function Plans() {
  return (
    <div>
      <Header title="MemberShip Plans" image={HeaderImage}>
        This is the assumable membership plan wee have chooseen which
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h2>{`$${price}`}</h2>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Plans;
