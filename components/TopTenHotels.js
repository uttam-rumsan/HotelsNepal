import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Hotels from '../data/topTenHotels'

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 20,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        },
        1800: {
            items: 5
        }
    }
}

class OurWorks extends Component {

    _isMounted = false;
    state = {
        display: false
    }
    componentDidMount() {
        this._isMounted = true;
        this.setState({ display: true })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
                <section id="hotels" className="case-studies-area ptb-100">
                    <div className="container-fluid">
                        <div className="section-title">
                            <h2>Top Hotels in Nepal</h2>
                            <p>We have listed the top ten hotels available in Nepal. You can have a<br />  quick overview and choose your next destination. </p>
                        </div>

                        {this.state.display ? <OwlCarousel
                            className="work-slides owl-carousel owl-theme"
                            {...options}
                        >
                            {Hotels.map(d => (
                                <div key={d.id} className="work-card">
                                    <img src={d.image ? d.image : ""} alt="image" />

                                    <div className="content text-center">
                                        <span>
                                            <Link href={d.link ? d.link : ""}>
                                                <a target="_blank">{d.location ? d.location : ""}</a>
                                            </Link>
                                        </span>

                                        <h3>
                                            <Link href={d.link ? d.link : ""}>
                                                <a target="_blank">{d.title ? d.title : ""}</a>
                                            </Link>
                                        </h3>

                                        <Link href={d.link ? d.link : ""}>
                                            <a className="custom-btn" target="_blank">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </>
        );
    }
}

export default OurWorks;