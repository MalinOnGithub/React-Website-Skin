import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Card1 from '../img/card1.jpg'
import Card2 from '../img/card2.jpg'
import Card3 from '../img/card3.jpg'
import Card4 from '../img/card4.jpg'
import Card5 from '../img/card5.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this month holiday deals!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {Card1}
              text='Luxury Anti-aging Facial treatment with jojoba eye-treatmentmask 75 min '
              label='Christmas deal'
              path='/Treatments'
            />
            <CardItem
              src={Card2}
              text='C-vitamin Boost Facial 30 min'
              label='Hot deal'
              path='/Treatments'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Card3}
              text='60 minutes swedish full-body massage. Perfect for those who have a lot of tensions. Book now get 10% off.'
              label='The perfect giveaway'
              path='/Treatments'
            />
            <CardItem
              src={Card4}
              text='Get your favourite serum before christmas and get a 20% off deal. Dont let your wrinkles wait! '
              label='Hot deal'
              path='/products'
            />
            <CardItem
              src={Card5}
              text='Bio organic skincare for everyone'
              label='get 20%'
              path='/Products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;