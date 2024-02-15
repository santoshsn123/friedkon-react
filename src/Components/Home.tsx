import { useEffect, useState } from "react";
import StickyHeader from "./StickyHeader";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";
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
import { callApis } from "./CommonFunctions";

const Home = () => {
  const [showSideMenu, setSidemenustate] = useState("");
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
      "aboutus-bg-image",
      "reachout",
    ];

    callApis(apiEndpoints)
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
            data: [aboutUsBGImage],
          },
          {
            data: [reachOut],
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
            aboutUsBGImage,
            reachOut
          });
        }
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div id="page">
        <Header setSidemenustate={() => setSidemenustate("show")}></Header>

        <StickyHeader />

        <MainPageComponent >
          <HomeBanner showForm={true} configId={3} banner={websiteData?.banner || {}} />
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

        <Footer />
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
