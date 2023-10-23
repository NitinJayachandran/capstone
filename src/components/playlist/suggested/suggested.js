import React from 'react'
import './suggested.css'
import { useNavigate } from 'react-router-dom';

const Suggested = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/playlist");
    };

    return (
        <div className='suggested-container'> 
            <button className='back-button' onClick={goBack}>
                Back
            </button>
            <div className='suggested-box'>Suggested</div>
        </div>
    );
}

export default Suggested