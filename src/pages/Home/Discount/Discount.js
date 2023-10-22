import React from 'react';
import discount from '../../../assets/images/home/discount/60-off2.webp'

const Discount = () => {
    return (
        <div className='home-page-section discount'>
            <img src={discount} alt=''></img>
            <div>
                <div>
                    <h3 style={{ color: '#464646', margin: '0' }}>For</h3>
                    <h3 style={{ color: 'rgb(1,101,1)', margin: '0' }}>Students and Needy Patients</h3>
                </div>
            </div>
        </div>
    );
};

export default Discount;