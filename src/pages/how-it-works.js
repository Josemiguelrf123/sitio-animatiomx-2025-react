import CallToSection from "@/components/CallToSection/CallToSection";
import FeatureEight from "@/components/FeaturesSection/FeatureEight";
import HeaderTwo from "@/components/Header/HeaderTwo";
const preloader = "/images/update-01-10-2021/preloader-7.png";
import MobileMenu from "@/components/Header/MobileMenu";
import HowItWorksPage from "@/components/HowItWorks/HowItWorksPage";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import React from "react";

const HowItWorks = () => {
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
      <HowItWorksPage />
      <SponsorsSection />
      <ParallaxSection />
      <FeatureEight />
      <CallToSection />
      <MainFooter normalPadding={false} />
    </Layout>
  );
};

export default HowItWorks;
