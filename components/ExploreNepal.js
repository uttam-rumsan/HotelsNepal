import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Places from '../data/exploreNepal';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 2,
        },
        1400: {
            items: 3,
        }
    }
}


class ExploreNepal extends Component {

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
                <section className="services-area">
                    <div className="container-fluid">
                        <div className="row m-0">
                            <div className="col-lg-5 p-0">
                                <div className="services-inner">
                                    <div className="services-section-title">
                                        <h2>Discover the Beauty of Nepal</h2>
                                        <div className="bar"></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                        <img src="/images/boudhanath.png" alt="Women" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 p-0">
                                <div className="services-list">
                                    {this.state.display ? <OwlCarousel
                                        className="services-slides owl-carousel owl-theme"
                                        {...options}
                                    >
                                        {Places.map(d => (
                                            <div className="single-services">
                                                <img src={d.image ? d.image : ""} alt={d.title ? d.title : ""} />
                                                <div className="content">
                                                    <div className="icon">
                                                        <i className={d.icon ? d.icon : ""}></i>
                                                    </div>

                                                    <h3>{d.title ? d.title : ""}</h3>
                                                    <p>{d.sub_head ? d.sub_head : ""}</p>

                                                    <Link href="/service-details">
                                                        <a className="read-more-btn">Read More</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ExploreNepal;