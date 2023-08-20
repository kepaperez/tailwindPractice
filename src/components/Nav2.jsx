import React from 'react'
import { useState } from 'react';
import menuSvg from '../assets/menu.svg'
import closeSvg from '../assets/close.svg'
export default function Nav2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="  bg-white p-4 sticky top-0 z-10">
      <div className="mx-auto flex justify-between items-center flex-col sm:flex-row">
        <div className=' w-full  mx-auto flex justify-between items-center'>
          <span className='font-bold text-lg md:self-end self-center'>BALENCIAGA</span>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="texet-white text-xl focus:outline-none"
            >
              {!menuOpen ?
                <img
                  src={menuSvg}
                  alt="Logo"
                  className="w-7 h-7"
                /> :
                <img
                  src={closeSvg}
                  alt="Logo"
                  className="w-7 h-7"
                />

              }

            </button>
          </div>
        </div>

        <div className='flex w-full sm:justify-end'>
          <ul
            className={`${menuOpen ? 'block' : 'hidden'
              } sm:flex sm:space-x-4 gap-10 `}
          >
            <li className='p-5 sm:p-0 '>
              <a href="#" className="text-black text-md hover:underline underline-offset-8">
                Home
              </a>
            </li>
            <li className='p-5 sm:p-0'>
              <a href="#" className="text-black text-md hover:underline underline-offset-8">
                About
              </a>
            </li>
            <li className='p-5 sm:p-0'>
              <a href="#" className="text-black text-md hover:underline underline-offset-8">
                Services
              </a>
            </li>
            <li className='p-5 sm:p-0'>
              <a href="#" className="text-black text-md hover:underline underline-offset-8">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

