import React from 'react';
import Counter from './components/Counter';
import Table from './components/Table';


function App() {
  return (
    <div className="w-full h-screen bg-purple-400 grid place-items-center">
      <div className="w-96 h-32 bg-white flex rounded-2xl shadow-2xl">
        <section className="w-1/3 bg-gray-300 h-full rounded-l-2xl relative">
          <Table />
        </section>
        <section className="w-2/3 flex bg-gray-200 rounded-r-2xl p-6">
          <div className="w-full flex flex-col flex flex-col justify-around">
            <p className="font-semibold text-gray-600 text-sm font-montserrat ">Table reservation</p>
            <div className='w-full flex justify-between'>
              <h1 className="w-1/2 font-extrabold text-gray-600 text-xl font-montserrat">Party of</h1>
              <Counter />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
