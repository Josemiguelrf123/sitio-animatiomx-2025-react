import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FaqsSection from "@/components/FaqsSection/FaqsSection";
import GetQuoteThree from "@/components/GetQuote/GetQuoteThree";
import HeaderTwo from "@/components/Header/HeaderTwo";
const preloader = "/images/update-01-10-2021/preloader-7.png";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const faqs = () => {
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
      <FaqsSection />
      <GetQuoteThree />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default faqs;
