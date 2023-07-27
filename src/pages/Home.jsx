import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Blog from "../components/Blog";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";

const Home = () => {
    return (
        <div >
            <Header />
            <HeroPage/>
            <AboutUs/>
            <Blog/>
            <ContactUs/>
            <Footer />
        </div>
    )
}

export default Home;