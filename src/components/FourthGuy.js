import React from 'react';
import guy4 from '../images/guy4.png'

const FourthGuy = ({animationClass}) => {
    return ( 
        <img src={guy4} alt='guy4' className={`${animationClass.fourthGuy} w-11 absolute right-2 opacity-0`}></img>
     );
}
 
export default FourthGuy;