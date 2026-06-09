import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
    </div>
  );
};

export default App;