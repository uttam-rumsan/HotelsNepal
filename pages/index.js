import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/MainBanner';
import OurServices from '../components/OurServices';
import ServiceStyleTwo from '../components/ServiceStyleTwo';
import WhyChooseUs from '../components/WhyChooseUs';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Feedback from '../components/Common/Feedback';
import PricingStyleThree from '../components/Pricing/PricingStyleThree';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import LatestNewsSliderTwo from '../components/Common/LatestNewsSliderTwo';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Partner from '../components/Common/Partner';

class ItAgency extends Component {
    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <OurServices />

                <ServiceStyleTwo />

                <WhyChooseUs />

                <FunFactsTwo />

                <Partner />

                <Feedback />

                <TeamStyleTwo />

                <PricingStyleThree />

                <LatestNewsSliderTwo />

                <div className="pb-100">
                    <Newsletter />
                </div>

                <Footer />
            </>
        );
    }
}

export default ItAgency;