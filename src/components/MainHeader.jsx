import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
function MainHeader() {
  return (
    <div>
      <header className="main__header">
        <div className="main__header-container">
          <div className="main__header-left">
            <h4>#100DayOfWorkOut</h4>
            <h2>Join The Legends of the fotness of the world</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              nesciunt repellendus quos suscipit ex non?
            </p>
            <Link to="plans" className="btn lg">
              Get Started
            </Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
