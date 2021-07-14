import React, { Component } from 'react';
import Link from 'next/link';
// import ModalVideo from 'react-modal-video';

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>
                <div className="hero-banner it-banner overly hero-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <h1>Hi, I'm Uttam Raj Giri</h1>
                                            <p>You don't have to be great to start, but you have to start to be great.</p>

                                            <Link href="/contact">
                                                <a className="btn btn-primary">About Us</a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="btn btn-secondary">Our Team</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="animate-banner-image">
                                            <img src="/images/about-me.jpg" alt="Animate image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                {/* <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                /> */}
            </>
        );
    }
}

export default MainBanner;