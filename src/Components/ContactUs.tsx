import  { useState } from 'react'
import MainPageComponent from './MainPageComponent'
import Header from './Header'
import HomeBanner from './HomeBanner';
import Footer from './Footer';

const ContactUs = () => {
    const [showSideMenu, setSidemenustate] = useState("");
  return (
    <div id="page">
    <Header setSidemenustate={() => setSidemenustate("show")}></Header>
    <MainPageComponent>
    <HomeBanner configId={17} banner={{}} />

    <Footer />
    </MainPageComponent>
    </div>
  )
}

export default ContactUs