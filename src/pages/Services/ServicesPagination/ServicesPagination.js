import React from 'react';
import './ServicesPagination.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ServicesPagination = ({ page, setPage, dataCount }) => {

    // data per page = 6
    const pageCount = Math.ceil(dataCount / 6);

    const handleGoToPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
            if (window.innerWidth < 768) window.scrollTo(0, 300)
            else if (window.innerWidth < 960) window.scrollTo(0, 500)
            else if (window.innerWidth < 1124) window.scrollTo(0, 600)
            else window.scrollTo(0, 700)
        }
    }

    const handleGoToNextPage = () => {
        if (page < pageCount) {
            setPage(page + 1);
            if (window.innerWidth < 768) window.scrollTo(0, 300)
            else if (window.innerWidth < 960) window.scrollTo(0, 500)
            else if (window.innerWidth < 1124) window.scrollTo(0, 600)
            else window.scrollTo(0, 700)
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '5%', marginBottom: '7.5%' }}>
            <button onClick={handleGoToPreviousPage} className={`${page > 1 ? 'pagination-btn' : 'disabled-pagination-btn'}`}>
                <FaAngleLeft></FaAngleLeft>
            </button>

            <p>Page &nbsp;
                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{page}</span>
                &nbsp; of &nbsp;
                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{pageCount}</span>
            </p>

            <button onClick={handleGoToNextPage} className={`${page < pageCount ? 'pagination-btn' : 'disabled-pagination-btn'}`}>
                <FaAngleRight></FaAngleRight>
            </button>
        </div>
    );
};

export default ServicesPagination;