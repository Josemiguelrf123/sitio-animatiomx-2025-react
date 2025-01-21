import AgencySection from "@/components/AgencySection/AgencySection";
import Layout from "@/components/Layout/Layout";
import HeaderTwo from "@/components/Header/HeaderTwo";
const preloader = "/images/update-01-10-2021/preloader-7.png";
import MobileMenu from "@/components/Header/MobileMenu";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import DatosRelevantes from "@/components/FunFacts/DatosRelevantes";
import Porqueelegiranimatiomx from "@/components/ServicesSection/Porqueelegiranimatiomx";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";


import React from "react";

const About = () => {
  return (
    <Layout pageTitle="Soluciones en Software, Animación y Marketing Digital" preloader={preloader}>
    <Style
      font="Rubik, sans-serif"
      bFont="Rubik, sans-serif"
      black="#432c13"
      text="#74727a"
      base="#ffa700"
      baseRgb="255, 75, 130"
      scrollToTopColor="#fff"
      blackRgb="42, 40, 51"
    />
    <HeaderTwo headerStyle="mainmenu-seven" header={7} />
      <MobileMenu />
      <SearchPopup />        
      <AgencySection />     
      <DatosRelevantes />
      <Porqueelegiranimatiomx />
      <SponsorsSectionTwo />
      <ParallaxSection />
      <MainFooter />
    </Layout>
  );
};

export default About;
