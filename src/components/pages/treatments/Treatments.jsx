import React from 'react'
import { Link } from 'react-router-dom';
import './Treatments.css';
import TreatmentsMenu from '../../img/treatmentsmenu.png'

function Treatments() {
    return (
        <div className="treatments-container"> 
          <img src={TreatmentsMenu} alt="menu" className="image" />
          <button className='treatments-btn' >
        BOOK NOW!
        </button>
        </div>
    )
}

export default Treatments
