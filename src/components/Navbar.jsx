import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4 px-6 md:px-24 border-b border-zinc-100'>
      <div onClick={() => navigate('/')} className='cursor-pointer flex items-center gap-2'>
        <img src={assets.logo} alt="logo" className='w-28 sm:w-32' />
      </div>

      <div className='flex items-center gap-4 sm:gap-6'>
        <p onClick={() => navigate('/buy')} className='cursor-pointer text-zinc-600 text-sm sm:text-base hover:text-zinc-900 transition-all'>Pricing</p>
        
        {user ? (
          <div className='flex items-center gap-3 sm:gap-5'>
            <button className='flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs sm:text-sm hover:scale-105 transition-all duration-300'>
              <img src={assets.star_icon} alt="" className='w-4' />
              <p>Credits left: 5</p>
            </button>
            <p className='text-zinc-600 max-sm:hidden text-sm pl-2'>Hi, GreatStack</p>
            <div className='relative group'>
              <img src={assets.profile_icon} className='w-10 drop-shadow cursor-pointer rounded-full' alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white border rounded text-sm min-w-32 shadow-md'>
                  <li className='py-1 px-2 cursor-pointer pr-10 hover:bg-zinc-100 rounded'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 sm:py-2.5 text-xs sm:text-sm rounded-full active:scale-95 transition-all duration-300'>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;