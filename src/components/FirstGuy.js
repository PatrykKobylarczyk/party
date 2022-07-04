import React from 'react';
import guy1 from '../images/guy1.png'

const FirstGuy = ({animationClass}) => {
    return ( 
        <img src={guy1} alt='guy1' className='w-9 absolute right-1/2 bottom-3 translate-x-1/2'></img>
     );
}
 
export default FirstGuy;