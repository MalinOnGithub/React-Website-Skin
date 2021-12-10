import React, { useState } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="hero-container">
            <h1>Need to relax?</h1>
            <Link to='/booking' className='link-booking' onClick={closeMobileMenu}>
              Give yourself a treat today!
            </Link>
        </div>
    )
}

export default HeroSection
