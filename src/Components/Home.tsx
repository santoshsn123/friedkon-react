import { useEffect, useState } from "react";
import StickyHeader from "./StickyHeader";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";
import axios from "axios";
import MainPageComponent from "./MainPageComponent";
import HomeBanner from "./HomeBanner";
import BelowBanner from "./BelowBanner";
import PastWork from "./PastWork";
import BackgroundImageWithCircularBTN from "./BackgroundImageWithCircularBTN";
import QualityText from "./QualityText";
import PlanComponent from "./PlanComponent";
import WelcomeTextComponent from "./WelcomeTextComponent";
import FeaturesComponent from "./FeaturesComponent";
import Testimonials from "./Testimonials";

const Home = () => {
  const [showSideMenu, setSidemenustate] = useState("");
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const [websiteData, setWebsiteData] = useState<any>({});

  useEffect(() => {
    const apiEndpoints = [
      "banner",
      "below-banner-text",
      "quality-text",
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
        ]: any) => {
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
          });
        }
      )
      .catch((error) => console.log(error));
  }, []);

  const getAPIData = async (url: string) => await axios.get(`${apiUrl}/${url}`);

  return (
    <>
      <div id="page">
        <Header setSidemenustate={() => setSidemenustate("show")}></Header>

        <StickyHeader />

        <MainPageComponent >
          <HomeBanner configId={3} banner={websiteData?.banner || {}} />
          <BelowBanner belowBannerText={websiteData.belowBannerText} configId={4} />
          <PastWork pastWork={websiteData.pastWork} />
          <BackgroundImageWithCircularBTN
            aboutUsBGImage={websiteData.aboutUsBGImage}
          />
          <QualityText configId={5} qualityText={websiteData.qualityText} />
          <PlanComponent plans={websiteData.plans} />

          <WelcomeTextComponent welcometext={websiteData.welcometext} />
          <FeaturesComponent
            features={websiteData.features}
            featureHeading={websiteData.featureHeading}
          />
          <Testimonials
            testimonialHeading={websiteData.testimonialHeading}
            testimonial={websiteData.testimonial}
          />
        </MainPageComponent>

        <Footer websiteData={websiteData}></Footer>
      </div>
      <SideMenu
        setSidemenustate={() => setSidemenustate("")}
        showSideMenu={showSideMenu}
        websiteData={websiteData}
      />
    </>
  );
};

export default Home;
