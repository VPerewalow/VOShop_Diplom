import React from 'react';
import './Loader.css';
import loadingGif from '../../assets/loading.gif';

const Loader = () => {
    return (
        <div className="loader">
            <img src={loadingGif} alt="loader" />
            <h1 className="loader__text">Loading ...</h1>
        </div>
    );
};

export default Loader;