import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header';
import MainPageComponent from './MainPageComponent';
import HomeBanner from './HomeBanner';
import QualityText from './QualityText';
import WelcomeTextComponent from './WelcomeTextComponent';
import OurTeam from './OurTeam';
import Footer from './Footer';
import SideMenu from './SideMenu';
import BelowBanner from './BelowBanner';
import ServicesDetails from './ServicesDetails';

const Services = () => {
    const [showSideMenu, setSidemenustate] = useState("");
    const [websiteData, setWebsiteData] = useState<any>({});
    const apiUrl = process.env.REACT_APP_API_BASE_URL;


  useEffect(() => {
    const apiEndpoints = [
      "services-banner",
      "about-us-text",
      "welcometext",
      'services-details',
      "reachout",
      "aboutus-bg-image",
      "social-media",
      "footer-about-us-text",
      "footer-background",
      "team",
      "services-below-banner-text"
    ];

    Promise.all(apiEndpoints.map(getAPIData))
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
          { data:services},
          {
            data: [reachOut],
          },
          {
            data: [aboutUsBGImage],
          },
          {
            data: [socialMedia],
          },
          {
            data: [footerAboutUsText],
          },
          {
            data: [footerBackground],
          },
          { data: teams },
          {
            data: [servicesBelowBannerText],
          },
        ]: any) => {
            console.log('checking services here :- ', services);
          setWebsiteData({
            aboutUsBGImage,
            banner,
            footerAboutUsText,
            footerBackground,
            qualityText,
            reachOut,
            services,
            servicesBelowBannerText,
            socialMedia,
            teams,
            welcometext
          });
        }
      )
      .catch((error) => console.log(error));
  }, []);
  const getAPIData = async (url: string) => await axios.get(`${apiUrl}/${url}`);
  return (
    <div id="page">
    <Header setSidemenustate={() => setSidemenustate("show")}></Header>
    <MainPageComponent>
      <HomeBanner configId={20} banner={websiteData?.banner || {}} />
      <BelowBanner belowBannerText={websiteData.servicesBelowBannerText} configId={21} />
      <ServicesDetails services={websiteData.services} configId={22} />
    </MainPageComponent>
    <Footer websiteData={websiteData} />
    <SideMenu
      setSidemenustate={() => setSidemenustate("")}
      showSideMenu={showSideMenu}
      websiteData={websiteData}
    />
  </div>
  )
}

export default Services