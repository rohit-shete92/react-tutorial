import React from 'react';
import herobg from '../Video/herobg.mp4';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/introduction');
    };
    return (
        <div className="video-container">
            <video className="responsive-video" autoPlay loop muted>
                <source src={herobg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='text-wrapper' data-aos="fade-up" data-aos-duration='3000'>
                <h1 className='text-center'>Welcome To React</h1>
                <p className='fs-4 fw-bold text-center'>The official React documentation provides a step-by-step guide to building a simple application, which is perfect for beginners.</p>
                <button className='btn px-5 fw-bold' onClick={handleClick}>Start Now</button>
            </div>
        </div>
    );
}

export default Home;
