import Layout from "@/components/Layout/Layout";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SliderPrincipal from "@/components/SliderSection/SliderPrincipal";
import AboutSoftware from "@/components/AboutSection/AboutSoftware";
import AboutMarketingdigital from "@/components/AboutSection/AboutMarketingdigital";
import AboutAnimaciodigita from "@/components/AboutSection/AboutAnimaciodigital";
import Porqueelegiranimatiomx from "@/components/ServicesSection/Porqueelegiranimatiomx";
import Nuestrosproyectos from "@/components/ProjectSection/Nuestrosproyectos";
import DatosRelevantes from "@/components/FunFacts/DatosRelevantes";
import UltimosBlogs from "@/components/NewsSection/UltimosBlogs";
import MainFooter from "@/components/MainFooter/MainFooter";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Style from "@/components/Reuseable/Style";
const preloader = "/images/update-01-10-2021/preloader-7.png";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";
import React from "react";

const Home = () => {
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
      <SliderPrincipal />
      <AboutSoftware />
      <AboutMarketingdigital />
      <AboutAnimaciodigita />
      <Porqueelegiranimatiomx />
      <Nuestrosproyectos />
      <DatosRelevantes />   
      <SponsorsSectionTwo />
      <UltimosBlogs />
      <MainFooter />
    </Layout>
  );
};

export default Home;
