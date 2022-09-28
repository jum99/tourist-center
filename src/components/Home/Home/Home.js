import React from "react";
import About from "../../About/About";
import Resorts from "../../Resorts/Resorts";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Management from "../Management/Management";
import Subscription from "../Subscription/Subscription";

const Home = () => {
    window.scroll(0, 0);
    return (
        <div>
            <Banner></Banner>
            <Resorts></Resorts>
            <About></About>
            <Management></Management>
            <Subscription></Subscription>
            <Footer></Footer>
        </div>
    );
};

export default Home;
