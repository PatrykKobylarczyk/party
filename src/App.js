import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
import Table from './components/Table';


function App() {

  const colors = {
    plant: '#1EB865',
    burgund: '#DE3B3B',
    blueberry: '#9F57FA'
  };

  const [number, setNumber] = useState(2);
  const [bgcolor, setBgcolor] = useState(colors.plant)

  const handleMinus = () => {
    setNumber(prev => prev - 1)
  }

  const handlePlus = () => {
    setNumber(prev => prev + 1)
  }


  useEffect(()=>{
    switch(number){
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
    console.log(bgcolor);
  }, [number])

  return (
    <div className={`w-full h-screen grid place-items-center`} style={{backgroundColor: `${bgcolor}`}}>
      <div className="w-96 h-32 bg-white flex rounded-2xl shadow-2xl">
        <section className="w-1/3 bg-gray-300 h-full rounded-l-2xl relative">
          <Table number={number}/>
        </section>
        <section className="w-2/3 flex bg-gray-200 rounded-r-2xl p-6">
          <div className="w-full flex flex-col justify-around">
            <p className="font-semibold text-gray-600 text-sm font-montserrat ">Table reservation</p>
            <div className='w-full flex justify-between'>
              <h1 className="w-1/2 font-extrabold text-gray-600 text-xl font-montserrat">Party of</h1>
              <Counter number={number} handleMinus={handleMinus} handlePlus={handlePlus}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
