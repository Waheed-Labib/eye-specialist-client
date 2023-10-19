import React from 'react';
import './PatientCount.css'

const PatientCount = () => {
    return (
        <div className='patient-count'>
            <p>People Cured Till Now</p>

            <div style={{ height: '250px', width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed white', borderRadius: '50%' }}>
                <h1>12000+</h1>
            </div>
        </div>
    );
};

export default PatientCount;