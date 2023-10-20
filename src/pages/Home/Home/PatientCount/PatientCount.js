import React, { useRef, useState } from 'react';
import './PatientCount.css'
import { useInView } from 'react-intersection-observer';

const PatientCount = () => {

    const { ref, inView } = useInView({
        threshold: 0
    });

    const [curedNumber, setCuredNumber] = useState(0);
    const [underTreatmentNumber, setUnderTreatmentNumber] = useState(0);

    const curedNumberRef = useRef();
    const underTreatmentNumberRef = useRef();

    const getCuredNumber = () => {
        clearInterval(curedNumberRef.current)
        curedNumberRef.current = setInterval(() => {
            if (curedNumber < 12000)
                setCuredNumber(curedNumber + 200)
            else pauseCuredNumber();
        }, 50);
    }

    const getUnderTreatmentNumber = () => {
        clearInterval(underTreatmentNumberRef.current)
        underTreatmentNumberRef.current = setInterval(() => {
            if (underTreatmentNumber < 250)
                setUnderTreatmentNumber(underTreatmentNumber + 5)
            else pauseUnderTreatmentNumber();
        }, 50);
    }

    const pauseCuredNumber = () => {
        clearInterval(curedNumber.current);
    }

    const pauseUnderTreatmentNumber = () => {
        clearInterval(underTreatmentNumber.current);
    }

    if (inView) {
        getCuredNumber();
        getUnderTreatmentNumber();
    }


    return (
        <div inView={inView}>
            <div ref={ref} className='patient-count'>
                <div>
                    <h1>{curedNumber}+</h1>
                    <p>People Cured</p>
                </div>

                <div>
                    <h1>{underTreatmentNumber}+</h1>
                    <p>Under Treatment</p>
                </div>
            </div>
        </div>
    );
};

export default PatientCount;