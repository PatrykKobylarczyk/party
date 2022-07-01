import React from 'react';
import guy1 from '../images/guy1.png'
import guy2 from '../images/guy2.png'
import guy3 from '../images/guy3.png'
import guy4 from '../images/guy4.png'

const Table = ({number}) => {
    return (
        <>
            <div className='w-14 h-14 rounded-full bg-white absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'></div>
            <img src={guy2} alt='guy1' className='w-9 absolute right-1/2 bottom-3 rotate-180 translate-x-1/2'></img>
            <img src={guy4} alt='guy2' className='w-9 absolute right-1/2 top-3 translate-x-1/2'></img>
            {number > 2 &&<img src={guy1} alt='guy3' className='w-9 absolute bottom-1/2 right-3 translate-y-1/2 rotate-90'></img>}
            {number > 3 &&<img src={guy3} alt='guy4' className='w-9 absolute bottom-1/2 left-3 translate-y-1/2 -rotate-90'></img>}
        </>
    );
}

export default Table;