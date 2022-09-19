import React from "react";
import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testmonials from "../../components/Testmonials";
import Values from "../../components/Values";
import "./home.css";
function Home() {
  return (
    <div>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testmonials />
    </div>
  );
}

export default Home;
