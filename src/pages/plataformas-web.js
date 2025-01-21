import Layout from "@/components/Layout/Layout";
import Style from "@/components/Reuseable/Style";
const preloader = "/images/update-01-10-2021/preloader-7.png";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderTwo from "@/components/Header/HeaderTwo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import { plataformaweb } from "@/data/sidebarPageContainer";
import MainFooter from "@/components/MainFooter/MainFooter";
import React from "react";

const plataformasweb = () => {
  return (
    <Layout
      pageTitle="Soluciones en Software, Animación y Marketing Digital"
      preloader={preloader}
    >
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
      <SidebarPageContainer service={plataformaweb} />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default plataformasweb;
