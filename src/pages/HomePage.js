import React from 'react';
import './HomePageModule.scss';
import HeaderComponent from '../components/HeaderComponent';
import ContentComponent from '../components/ContentComponent';
import FooterComponent from '../components/FooterComponent';
import CustomerCare from  '../components/CustomerCare';

function HomePage(props) {

  return (
    <div className={"HomePageContainer"}>
      <HeaderComponent/>
      <ContentComponent/>
      <CustomerCare/>
      <FooterComponent/>
    </div>
  );
}


export default HomePage;