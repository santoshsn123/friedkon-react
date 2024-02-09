import React, { useEffect, useState } from "react";
import Header from "./Header";
import StickyHeader from "./StickyHeader";
import SideContent from "./MainPageComponent";
import axios from "axios";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import MainPageComponent from "./MainPageComponent";
import HomeBanner from "./HomeBanner";
import QualityText from "./QualityText";
import OurTeam from "./OurTeam";
import WelcomeTextComponent from "./WelcomeTextComponent";

const AboutUs = () => {
  const [showSideMenu, setSidemenustate] = useState("");
  const [websiteData, setWebsiteData] = useState<any>({});
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;

  const [admin, setAdmin] = useState("");

  useEffect(() => {
    setAdmin(localStorage.getItem("loggedInUser") || "");
  }, []);
  useEffect(() => {
    const apiEndpoints = [
      "about-us-banner",
      "below-banner-text",
      "about-us-text",
      "plan",
      "past-work",
      "feature-heading",
      "features",
      "testimonial-heading",
      "testimonial",
      "welcometext",
      "reachout",
      "aboutus-bg-image",
      "social-media",
      "footer-about-us-text",
      "footer-background",
      'team'
    ];

    Promise.all(apiEndpoints.map(getAPIData))
      .then(
        ([
          {
            data: [banner],
          },
          {
            data: [belowBannerText],
          },
          {
            data: [qualityText],
          },
          { data: plans },
          { data: pastWork },
          {
            data: [featureHeading],
          },
          { data: features },
          {
            data: [testimonialHeading],
          },
          { data: testimonial },
          {
            data: [welcometext],
          },
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
          {
            data: teams,
          },
        ]: any) => {
          console.log("banner here :-", banner);
          setWebsiteData({
            banner,
            belowBannerText,
            qualityText,
            plans,
            pastWork,
            featureHeading,
            features,
            testimonialHeading,
            testimonial,
            welcometext,
            reachOut,
            aboutUsBGImage,
            socialMedia,
            footerAboutUsText,
            footerBackground,
            teams
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
        <HomeBanner configId={17} banner={websiteData?.banner || {}} />
        <QualityText
          reverse={true}
          configId={18}
          qualityText={websiteData.qualityText}
        />
  <WelcomeTextComponent welcometext={websiteData.welcometext} />
       <OurTeam teams={websiteData.teams} configId={19} />

     
        {/* <BelowBanner belowBannerText={websiteData.belowBannerText} />
          <PastWork pastWork={websiteData.pastWork} />
          <BackgroundImageWithCircularBTN
            aboutUsBGImage={websiteData.aboutUsBGImage}
          />
          
<PlanComponent plans={websiteData.plans} />
          <WelcomeTextComponent welcometext={websiteData.welcometext} />
          <FeaturesComponent
            features={websiteData.features}
            featureHeading={websiteData.featureHeading}
          />
          <Testimonials
            testimonialHeading={websiteData.testimonialHeading}
            testimonial={websiteData.testimonial}
          /> */}
      </MainPageComponent>
      <Footer websiteData={websiteData} admin={admin}></Footer>
      <SideMenu
        setSidemenustate={() => setSidemenustate("")}
        showSideMenu={showSideMenu}
        websiteData={websiteData}
        admin={admin}
      />
    </div>
  );
};

export default AboutUs;
