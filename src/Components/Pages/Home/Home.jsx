import React from 'react';
import Banner from './Banner';
import OurFeature from './OurFeature';
import TopDeliveryMan from './TopDeliveryMan';
import Faq from './Faq';
import CustomerReview from './CustomerReview';
import AboutUs from './AboutUs';
import OurPartner from './OurPartner';
import ContactUs from './ContactUs';
import FaqText from './faqText';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurFeature></OurFeature>
            <TopDeliveryMan></TopDeliveryMan>
            <CustomerReview></CustomerReview>
            
            <OurPartner></OurPartner>
            <FaqText></FaqText>
            <Faq></Faq>
            <ContactUs></ContactUs>
            <AboutUs></AboutUs>
           
        </div>
    );
};

export default Home;