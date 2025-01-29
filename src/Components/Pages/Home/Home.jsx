import React from 'react';
import Banner from './Banner';
import OurFeature from './OurFeature';
import TopDeliveryMan from './TopDeliveryMan';
import Faq from './Faq';
import CustomerReview from './CustomerReview';
import AboutUs from './AboutUs';
import OurPartner from './OurPartner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurFeature></OurFeature>
            <TopDeliveryMan></TopDeliveryMan>
            <CustomerReview></CustomerReview>
            <Faq></Faq>
            <AboutUs></AboutUs>
            <OurPartner></OurPartner>
        </div>
    );
};

export default Home;