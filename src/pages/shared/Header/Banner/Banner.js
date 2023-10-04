import React, { useEffect } from 'react';
import './Banner.css'
import { useLocation } from 'react-router-dom';
import HomeBanner from './HomeBanner/HomeBanner';
import ServicesBanner from './ServicesBanner/ServicesBanner';
import AddServiceBanner from './AddServiceBanner/AddServiceBanner';

const Banner = () => {

    const page = useLocation().pathname;

    useEffect(() => {
        if (page) window.scrollTo(0, 0)
    }, [page])

    if (page === '/') return <HomeBanner></HomeBanner>
    if (page === '/services') return <ServicesBanner></ServicesBanner>
    if (page === '/add-service') return <AddServiceBanner></AddServiceBanner>
};

export default Banner;