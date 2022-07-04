import React from 'react';

//COMPONENTS
import FirstGuy from './FirstGuy';
import SecondGuy from './SecondGuy';
import ThirdGuy from './ThirdGuy';
import FourthGuy from './FourthGuy';

const Table = ({ animationClass }) => {

    return (
        <div className='w-full h-full grid place-items-center'>
            <div className='w-14 h-14 rounded-full bg-white absolute'></div>
            <FirstGuy animationClass={animationClass} />
            <SecondGuy animationClass={animationClass} />
            <ThirdGuy animationClass={animationClass} />
            <FourthGuy animationClass={animationClass} />
        </div>
    );
}

export default Table;