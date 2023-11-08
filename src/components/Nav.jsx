import React from 'react'
import { useState } from 'react';
import menuSvg from '../assets/menu.svg'
import closeSvg from '../assets/close.svg'
import { Outlet, Link } from 'react-router-dom';
export default function Nav2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="  bg-white py-4 sticky top-0 z-10 px-4 sm:px-12">
        <div className="mx-auto flex justify-between items-center flex-col sm:flex-row">
          <div className=' w-full  mx-auto flex justify-between items-center'>
            <Link to="/" className='font-bold text-lg md:self-end self-center'>BALENCIAGA</Link>
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

          <div className='flex w-full sm:justify-end '>
            <ul
              className={`${menuOpen ? 'block' : 'hidden'
                } sm:flex sm:space-x-4 gap-10 `}
            >
              <li className='p-5 sm:p-0'>

                <Link to={"about"} className="text-black text-md hover:underline underline-offset-8">
                  Contact
                </Link>


              </li>
              <li className='p-5 sm:p-0'>
                <Link to={"products"} className="text-black text-md hover:underline underline-offset-8">
                  Products
                </Link>
              </li>




              <li className='p-5 sm:p-0'>

                <Link to={"carrito"} className="text-black text-md hover:underline underline-offset-8">
                  Carrito
                </Link>


              </li>
            </ul>
          </div>

        </div>
      </nav>
      <Outlet /></>
  );
};

