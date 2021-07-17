import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <>
                <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
                    <div className="spinner-text">Hotels in Nepal is Loading...</div>
                    <div className="spinner"></div>
                </div>
            </>
        );
    }
}

export default Loader;