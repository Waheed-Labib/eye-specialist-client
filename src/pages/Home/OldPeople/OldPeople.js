import React from 'react';
import oldPerson from '../../../assets/images/home/old-people/old-person.png';
import './OldPeople.css'

const OldPeople = () => {

    return (
        <div className='home-page-section old-people'>
            <div>
                <h3 style={{ color: '#464646', margin: '0' }}>Special Care</h3>
                <h3 style={{ color: '#464646', margin: '0' }}>For</h3>
                <h3 style={{ color: 'rgb(1,101,1)', margin: '0' }}>Olderly People</h3>
            </div>

            <img src={oldPerson} alt=''></img>
        </div>

    );
};

export default OldPeople;