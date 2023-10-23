import React from 'react';
import './history.css';
import { useNavigate } from 'react-router-dom';

const History = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate("/playlist");
    };

    return (
        <div className='History-container'>
            <button className='back-button' onClick={goBack}>
                Back
            </button>
            <div className='history-box'>History</div>
        </div>
    );
};

export default History;
