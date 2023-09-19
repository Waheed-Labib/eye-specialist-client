import React from 'react';
import './Banner.css'
import { useLocation } from 'react-router-dom';
import HomeBanner from './HomeBanner/HomeBanner';

const Banner = () => {

    const page = useLocation().pathname;

    if (page === '/') return <HomeBanner></HomeBanner>

};

export default Banner;