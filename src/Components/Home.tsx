import React, { useEffect, useState } from "react";
import StickyHeader from "./StickyHeader";
import SideContent from "./SideContent";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";
import {Modal, Button} from 'react-bootstrap';  
import axios from "axios";

const Home = () => {
  const [showSideMenu,setSidemenustate] = useState('');
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const fileUrl = process.env.REACT_APP_FILE_BASEURL;

  const [banner,setBanner] = useState([]);
useEffect(() => {
  
  axios.get(apiUrl+'/banner').then(res=>{
    setBanner(res.data[0]);
  })
},[])

  const [show, setShow] = useState(false);  
  
  const modalClose = () => setShow(false);  
  const modalShow = () => setShow(true);  

  return (
    <>
      <div id="page">
        <Header setSidemenustate={()=>setSidemenustate('show')}></Header>
      
        <StickyHeader />
      
        <SideContent banner={banner} />
        <Button variant="success" onClick={modalShow}>  
        Launch demo modal  
      </Button> 
        <Footer ></Footer>
      </div>
      <SideMenu setSidemenustate={()=>setSidemenustate('')} showSideMenu={showSideMenu} />

      <Modal show={show} onHide={modalClose}>  
  <Modal.Header closeButton>  
    <Modal.Title>Title for Modal</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body>  
    <p>Body Content.</p>  
  </Modal.Body>  
  
  <Modal.Footer>  
    <Button variant="secondary" onClick={modalClose}>Close Modal</Button>  
    <Button variant="primary">Save changes</Button>  
  </Modal.Footer>  
</Modal>  


    </>
  );
};

export default Home;
