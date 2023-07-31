import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";

import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import DevOps from "../components/DevOps";

const Home = () => {
    return (
        <div className="">
            <Header />
            <HeroPage/>
            <DevOps/>
            <AboutUs/>
            <ContactUs/>
            <Footer />
        </div>
    )
}

export default Home;