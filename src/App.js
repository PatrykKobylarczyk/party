import React, { useState, useEffect, useCallback } from 'react';
import Counter from './components/Counter';
import Table from './components/Table';


function App() {

  const colors = {
    plant: '#1EB865',
    burgund: '#DE3B3B',
    blueberry: '#9F57FA'
  };

  const pulseAnimation = 'animation: pulsate-bck 1s ease-in-out both';

  const [number, setNumber] = useState(2);
  const [bgcolor, setBgcolor] = useState(colors.plant);

  const [animationClass, setAnimationClass] = useState({});

  const handlePlus = () => {
    switch (number) {
      case 2:
        setAnimationClass({
          secondGuy: 'secondGuyMoves',
          thirdGuy: 'thirdGuyComes'
        });
        break;
      case 3:
        setAnimationClass({
          secondGuy: 'secondGuySecondMove',
          thirdGuy: 'thirdGuyMoves',
          fourthGuy: 'fourthGuyComes'
        });
        break;
      default:
        console.log('Opss...');
    }
    
    return number < 4 ? setNumber(prev => prev + 1) : () => { };
  }

  const handleMinus = () => {
    switch (number) {
      case 4:
        setAnimationClass({
          secondGuy: 'secondGuySecondMoveBack',
          thirdGuy: 'thirdGuyMovesBack',
          fourthGuy: 'fourthGuyLeaves'
        });
        break;
      case 3:
        setAnimationClass({
          secondGuy: 'secondGuyMovesBack',
          thirdGuy: 'thirdGuyLeaves',
        });

        break;
      default:
        console.log('Opss...');
    }

    return number > 2 ? setNumber(prev => prev - 1) : () => { };
  }


  // If I use this switch in only in useEffect It misses dependencies to number (It uses inner variables)
  //In useCallbacks dependencies array I have to add dependencies
  const switchBackground = useCallback(() => {
    switch (number) {
      case 2:
        setBgcolor(colors.plant)
        break;
      case 3:
        setBgcolor(colors.burgund)
        break;
      case 4:
        setBgcolor(colors.blueberry)
        break;
      default:
        console.log('Opp, I did it again...:)');
    }
  }, [number, colors.plant, colors.burgund, colors.blueberry]
  )

  useEffect(() => {
    switchBackground()
    console.log(number);
  }, [switchBackground])

  return (
    <div className='w-full h-screen grid place-items-center' style={{ backgroundColor: `${bgcolor}` }}>
      <div className='w-96 h-32 bg-white flex rounded-2xl shadow-2xl'>
        <section className="w-1/3 bg-gray-300 h-full rounded-l-2xl relative">
          <Table number={number} animationClass={animationClass} />
        </section>
        <section className="w-2/3 flex bg-gray-200 rounded-r-2xl p-6 z-10">
          <div className="w-full flex flex-col justify-around">
            <p className="font-semibold text-gray-600 text-sm font-montserrat ">Table reservation</p>
            <div className='w-full flex justify-between'>
              <h1 className="w-1/2 font-extrabold text-gray-600 text-xl font-montserrat">Party of</h1>
              <Counter number={number} handleMinus={handleMinus} handlePlus={handlePlus} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
