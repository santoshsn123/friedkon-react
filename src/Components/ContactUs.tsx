import { useEffect, useState } from "react";
import MainPageComponent from "./MainPageComponent";
import Header from "./Header";
import HomeBanner from "./HomeBanner";
import Footer from "./Footer";
import Forms from "./Forms";
import SideMenu from "./SideMenu";
import { callApis } from "./CommonFunctions";
import BelowBanner from "./BelowBanner";
import appData from "../Admin/JSON/appData";

const ContactUs = () => {
  const [showSideMenu, setSidemenustate] = useState("");
  const [websiteData, setWebsiteData] = useState<any>({});

  useEffect(() => {
    const apiEndpoints = ["contact-banner", "contact-us-form-title"];

    callApis(apiEndpoints)
      .then(
        ([
          {
            data: [banner],
          },
          {
            data: [contactFormTitle],
          },
        ]: any) => {
          setWebsiteData({
            banner,
            contactFormTitle,
          });
        }
      )
      .catch((error) => console.log(error));
  }, []);
  return (
    <div id="page">
      <Header setSidemenustate={() => setSidemenustate("show")}></Header>
      <MainPageComponent>
        <HomeBanner configId={24} banner={websiteData.banner} />
        <BelowBanner
          belowBannerText={websiteData.contactFormTitle}
          configId={23}
        />
        <div className="row">
          <div className="col-md-4" style={{ margin: "50px 0" }}>
            <Forms
              formArray={appData[24]}
              buttonName="Submit" 
              successMessage={'form submitted, we will get back to you'}
            />
          </div>
          <div className="col-md-8" style={{ margin: "50px 0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.650438857104!2d-73.9578451!3d40.70369569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25be7bc32b6e9%3A0xe3e20f0fa838df7f!2s130%20Lee%20Ave%20%23638%2C%20Brooklyn%2C%20NY%2011211%2C%20USA!5e0!3m2!1sen!2sin!4v1707980745725!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <Footer />
        <SideMenu
          setSidemenustate={() => setSidemenustate("")}
          showSideMenu={showSideMenu}
          websiteData={websiteData}
        />
      </MainPageComponent>
    </div>
  );
};

export default ContactUs;
