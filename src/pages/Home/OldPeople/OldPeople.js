import React from 'react';
import oldPerson from '../../../assets/images/home/old-people/old-person.png';
import './OldPeople.css'

const OldPeople = () => {
    return (
        <div className='home-page-section'>

            <div>
                <h3 style={{ color: '#464646', margin: '0', fontSize: '2.5rem' }}>Special Care</h3>
                <h3 style={{ color: '#464646', margin: '0', fontSize: '2.5rem' }}>For</h3>
                <h3 style={{ color: 'rgb(1,101,1)', margin: '0', fontSize: '2.5rem' }}>Olderly People</h3>
            </div>

            <img src={oldPerson} alt=''></img>
        </div>
    );
};

export default OldPeople;