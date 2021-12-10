import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Prod1 from '../img/prod1.jpg'
import Prod2 from '../img/prod2.jpg'
import Prod3 from '../img/prod3.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h3>Our products</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Prod1}
              text='Next Skinology are determent to deliver long-term hair removal with noticeable results in just 3 weeks, full-body treatments are done in 30 minutes.'
              label='Laser'
              path='/'
            />
            <CardItem
              src={Prod2}
              text='The imprint given to Skin Regimen 2.0 by the Corradini family is the result of multiple factors: family’s origins, culture of well-being that make it unique and one-of-a-kind'
              label='Award winning'
              path='/'
            />
            <CardItem
              src={Prod3}
              text='Delorian Cosmetics is the worlds leading professional make-up brand. Minerals and Vitamins complex in each product.'
              label='Make-up'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;