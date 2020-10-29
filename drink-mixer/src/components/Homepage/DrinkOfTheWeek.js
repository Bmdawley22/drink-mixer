import React from 'react';

import {Link} from 'react-router-dom';

import { Icon } from '@iconify/react'
import ratingStar from '@iconify/icons-mdi/star';
import ratingStarHalf from '@iconify/icons-mdi/star-half';

function DrinkOfTheWeek(props) {
    return(
        <div className='homepageCard'>
            <img src={props.drink.strDrinkThumb} alt='showDrinkImg' className='showDrinkImg' />
            <h1>{props.drink.strDrink}</h1>
            <h3>Editor's notes:</h3>
            <div>
                <div className='iconContainer'>
                    <Icon icon={ratingStar} />
                    <Icon icon={ratingStar} />
                    <Icon icon={ratingStar} />
                    <Icon icon={ratingStar} />
                    <Icon icon={ratingStarHalf} />
                </div>
                <h4>This one is a must for anyone that has not left their apartment in months!</h4>
            </div>
            <Link className='articleLink' to='/all-drinks/show-drink/5'>See how to make it!</Link>
        </div>
    )
}

export default DrinkOfTheWeek;