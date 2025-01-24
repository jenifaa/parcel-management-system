import React from 'react';
import Banner from './Banner';
import OurFeature from './OurFeature';
import TopDeliveryMan from './TopDeliveryMan';
import Faq from './Faq';
import CustomerReview from './CustomerReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurFeature></OurFeature>
            <TopDeliveryMan></TopDeliveryMan>
            <CustomerReview></CustomerReview>
            <Faq></Faq>
        </div>
    );
};

export default Home;