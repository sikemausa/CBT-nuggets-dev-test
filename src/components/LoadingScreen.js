import React from 'react';

const LoadingScreen = ({ picture }) =>
    <div id="loading-screen">
        <img id="loading-image" role="presentation" src={picture} />
    </div>;

export default LoadingScreen;
