import React from 'react';
import guy3 from '../images/guy3.png'

const ThirdGuy = ({ animationClass }) => {
    return (
        <div className={`${animationClass.thirdGuy} w-16 h-16 absolute rounded-full -top-10 left-40 opacity-0`} >
            <img src={guy3} alt='guy3' className='w-14 absolute -mt-3 ml-7 rotate-12'></img>
        </div>
    );
}

export default ThirdGuy;