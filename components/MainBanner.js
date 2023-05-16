import React, { Component } from "react";
import Link from "next/link";

class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <div className="hero-banner video-studio center overly-6">
          <div className="video-background">
            <video autoPlay loop src="/video/boudha.mp4" />
          </div>

          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="main-banner-content">
                  <h1>
                    Welcome to <br />
                    Hotels in Nepal
                  </h1>

                  <p>
                    Our goal is to offer comprehensive details on the finest
                    accommodations in Nepal, encompassing luxury hotels,
                    boutique hotels, and budget hotels.
                  </p>

                  <Link href="/#hotels">
                    <a className="btn btn-primary mr-0">Explore Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainBanner;
