import React from 'react';
import HomeHero from '../components/HomeHero';
import Inventory from '../components/InventoryContent';
import ThreeEasySteps from '../components/ThreeEasySteps';
import WhatCustomerSay from '../components/WhatCustomerSay';
import SocialContact from '../components/SocialContact';
import Footer from '../components/Footer';
import MessageIcon from '../components/MessageIcon';
import NavBar from '../components/NavBar';
import Test from '../components/Test';
const Home = () => {
  return (
  <>
   <div>
     <MessageIcon />
    <HomeHero />
       {/* <Inventory /> */}
       <ThreeEasySteps />
        <WhatCustomerSay />
      <SocialContact />
      </div>
  </>
  );
};

export default Home;
