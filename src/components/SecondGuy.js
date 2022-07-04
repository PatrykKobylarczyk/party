import React from 'react';
import guy2 from '../images/guy2.png'

const SecondGuy = ({ animationClass }) => {
    return (
        <div className={`${animationClass.secondGuy} w-16 h-16 absolute rounded-full `}>
            <img src={guy2} alt='guy2' className='w-9 -mt-5 ml-3'></img>
        </div>
    );
}

export default SecondGuy;