import React from "react";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import "./home.css";
function Home() {
  return (
    <div>
      <MainHeader />
      <Programs />
      <Values />
    </div>
  );
}

export default Home;
