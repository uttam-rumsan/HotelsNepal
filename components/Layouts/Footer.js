import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/hotelsnepalogo.png" style={{ height: '50px' }} alt="Hotels in Nepal logo" />
                                            </a>
                                        </Link>
                                    </div>

                                    <p>We aim to provide complete information about the best hotels available in Nepal, including luxury hotels, boutique hotels, and budget hotels.</p>

                                    <ul className="social-links">
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                                    <h3>Explore</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">
                                                <a>Portfolio</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Quick Links</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>Pricing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>Faq</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Get in Touch</h3>

                                    <ul className="get-in-touch">
                                        <li><i className="icofont-home"></i> PrayagMarga-32, Kathmandu, Nepal</li>
                                        <li>
                                            <i className="icofont-live-support"></i>
                                            <a href="tel:+324-9442-515">+977 9849214068</a>
                                        </li>
                                        <li>
                                            <i className="icofont-envelope"></i>
                                            <a href="mailto:hotelsinnepal123@gmail.com">hotelsinnepal123@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>Copyright &copy; {currentYear} Hotels In Nepal. All Rights Reserved By <a href="https://hotelsinnepal.vercel.app" target="_blank">Hotels In Nepal</a></p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;