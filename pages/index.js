import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/MainBanner';
import Hotels from '../components/TopTenHotels';
import Footer from '../components/Layouts/Footer';

class ItAgency extends Component {
    render() {
        return (
            <>
                <Navbar />

                <MainBanner />

                <Hotels />

                <Footer />
            </>
        );
    }
}

export default ItAgency;