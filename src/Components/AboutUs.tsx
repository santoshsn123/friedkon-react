import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import MainPageComponent from "./MainPageComponent";
import HomeBanner from "./HomeBanner";
import QualityText from "./QualityText";
import OurTeam from "./OurTeam";
import WelcomeTextComponent from "./WelcomeTextComponent";
import { callApis } from "./CommonFunctions";

const AboutUs = () => {
  const [showSideMenu, setSidemenustate] = useState("");
  const [websiteData, setWebsiteData] = useState<any>({});

  useEffect(() => {

    const apiEndpoints = [
      "about-us-banner",
      "about-us-text",
      "welcometext",
      "reachout",
      "aboutus-bg-image",
      "team",
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
          {
            data: [reachOut],
          },
          {
            data: [aboutUsBGImage],
          },
          { data: teams },
        ]: any) => {
          setWebsiteData({
            banner,
            qualityText,
            welcometext,
            reachOut,
            aboutUsBGImage,
            teams,
          });
        }
      )
      .catch((error) => console.log(error));
  }, []);

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

export default AboutUs;
