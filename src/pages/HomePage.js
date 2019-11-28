import React from "react";
import "./HomePageModule.scss";
import HeaderComponent from "../components/Header";
import ContentComponent from "../components/Content";
import FooterComponent from "../components/Footer";
import CustomerCare from "../components/CustomerCare";

function HomePage(props) {
  return (
    <div className={"HomePageContainer"}>
      <HeaderComponent />
      <ContentComponent />
      <CustomerCare />
      <FooterComponent />
    </div>
  );
}

export default HomePage;
