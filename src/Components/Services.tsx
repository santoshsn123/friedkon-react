import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainPageComponent from "./MainPageComponent";
import HomeBanner from "./HomeBanner";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import BelowBanner from "./BelowBanner";
import ServicesDetails from "./ServicesDetails";
import { callApis } from "./CommonFunctions";

const Services = () => {
  const [showSideMenu, setSidemenustate] = useState("");
  const [websiteData, setWebsiteData] = useState<any>({});

  useEffect(() => {
    const apiEndpoints = [
      "services-banner",
      "about-us-text",
      "welcometext",
      "services-details",
      "reachout",
      "aboutus-bg-image",
      "services-below-banner-text",
    ];

    callApis(apiEndpoints)
      .then(
        ([
          {
            data: [banner],
          },
          {
            data: [qualityText],
          },
          {
            data: [welcometext],
          },
          { data: services },
          {
            data: [reachOut],
          },
          {
            data: [aboutUsBGImage],
          },

          {
            data: [servicesBelowBannerText],
          },
        ]: any) => {
          setWebsiteData({
            aboutUsBGImage,
            banner,
            qualityText,
            reachOut,
            services,
            servicesBelowBannerText,
            welcometext,
          });
        }
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="page">
      <Header setSidemenustate={() => setSidemenustate("show")}></Header>
      <MainPageComponent>
        <HomeBanner configId={20} banner={websiteData?.banner || {}} />
        <BelowBanner
          belowBannerText={websiteData.servicesBelowBannerText}
          configId={21}
        />
        <ServicesDetails services={websiteData.services} configId={22} />
      </MainPageComponent>
      <Footer />
      <SideMenu
        setSidemenustate={() => setSidemenustate("")}
        showSideMenu={showSideMenu}
        websiteData={websiteData}
      />
    </div>
  );
};

export default Services;
