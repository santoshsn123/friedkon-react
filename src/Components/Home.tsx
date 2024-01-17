import React, { useEffect, useState } from "react";
import StickyHeader from "./StickyHeader";
import SideContent from "./SideContent";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [showSideMenu, setSidemenustate] = useState("");
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;

  const [admin, setAdmin] = useState("");
  const [websiteData, setWebsiteData] = useState({});

  useEffect(() => {
    setAdmin(localStorage.getItem("loggedInUser") || "");
  }, []);

  useEffect(() => {
    const apiEndpoints = [
      'banner',
      "below-banner-text",
      "quality-text",
      "plan",
      "past-work",
      'feature-heading',
      'features',
      'testimonial-heading',
      'testimonial',
      'welcometext',
      'reachout'
    ];

    Promise.all(apiEndpoints.map(getAPIData))
      .then(
        ([
          { data: [banner], },
          { data: [belowBannerText], },
          { data: [qualityText],},
          { data: plans },
          { data: pastWork },
          { data: [featureHeading] },
          { data: features },
          { data: [testimonialHeading] },
          { data: testimonial },
          { data: [welcometext] },
          { data: [reachOut] },
        ]: any) => {
          // console.log({
          //   banner,
          //   belowBannerText,
          //   qualityText,
          //   plans,
          //   pastWork,
          //   featureHeading,
          //   features,
          //   testimonialHeading,
          //   testimonial,
          //   welcometext,
          //   reachOut
          // });
          setWebsiteData({
            banner,
            belowBannerText,
            qualityText,
            plans,
            pastWork,
            featureHeading,
            features, testimonialHeading,
            testimonial,
            welcometext,
            reachOut
          });
        }
      )
      .catch((error) => console.log(error));
  }, []);

  const getAPIData = async (url: string) => await axios.get(`${apiUrl}/${url}`);

  const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);

  return (
    <>
      <div id="page">
        <Header setSidemenustate={() => setSidemenustate("show")}></Header>

        <StickyHeader />

        <SideContent websiteData={websiteData} admin={admin} />
        {/* <Button variant="success" onClick={modalShow}>  
        Launch demo modal  
      </Button>  */}
        <Footer websiteData={websiteData} admin={admin} ></Footer>
      </div>
      <SideMenu
        setSidemenustate={() => setSidemenustate("")}
        showSideMenu={showSideMenu}
        websiteData={websiteData} admin={admin} 
      />

      <Modal show={show} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Title for Modal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Body Content.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close Modal
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
