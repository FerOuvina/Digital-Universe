'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronUpIcon, MenuIcon } from '@heroicons/react/solid';
import Logo from '../assets/Logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='flex sticky top-0 z-10 justify-between items-center p-6 w-full bg-gray-800'>
      <div className='flex flex-shrink-0 items-center mr-6 text-white'>
        <Link legacyBehavior href='/'>
          <a>
            <span className='text-xl font-semibold tracking-tight'>
              <Image src={Logo} alt='Logo' width={50} height={50} />
            </span>
          </a>
        </Link>
      </div>

      <Link legacyBehavior href='/'>
        <a>
          <h1 className='text-2xl font-semibold text-white lg:hidden'>
            Digital Universe
          </h1>
        </a>
      </Link>

      <div className='lg:hidden'>
        <button
          className='flex items-center px-3 py-2 text-gray-200 rounded border border-gray-400 hover:text-white hover:border-white'
          onClick={toggleMenu}
        >
          {showMenu ? (
            <ChevronUpIcon className='w-6 h-6' />
          ) : (
            <MenuIcon className='w-6 h-6' />
          )}
        </button>

        <Transition
          show={showMenu}
          enter='transition duration-200 transform origin-top'
          enterFrom='opacity-0 scale-y-0'
          enterTo='opacity-100 scale-y-100'
          leave='transition duration-150 transform origin-top'
          leaveFrom='opacity-100 scale-y-100'
          leaveTo='opacity-0 scale-y-0'
        >
          {(ref) => (
            <div
              ref={ref}
              className='absolute top-5 -right-5 p-2 mt-2 w-max bg-gray-800 shadow-lg'
            >
              <div className='text-sm'>
                <Link legacyBehavior href='#'>
                  <a className='block px-4 py-2 text-gray-200 hover:text-white'>
                    Inicio
                  </a>
                </Link>

                <Link legacyBehavior href='#'>
                  <a className='block px-4 py-2 text-gray-200 hover:text-white'>
                    Sobre Nosotros
                  </a>
                </Link>

                <Link legacyBehavior href='#'>
                  <a className='block px-4 py-2 text-gray-200 hover:text-white'>
                    Servicios
                  </a>
                </Link>

                <Link legacyBehavior href='#'>
                  <a className='block px-4 py-2 text-gray-200 hover:text-white'>
                    Contacto
                  </a>
                </Link>

                <Link legacyBehavior href='#'>
                  <a className='block px-4 py-2 text-gray-200 hover:text-white'>
                    Blog
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </div>

      <div className='hidden lg:flex'>
        <div className='flex space-x-4 text-sm'>
          <Link legacyBehavior href='#'>
            <a className='block mt-4 mr-4 text-gray-200 hover:text-white'>
              Inicio
            </a>
          </Link>

          <Link legacyBehavior href='#'>
            <a className='block mt-4 mr-4 text-gray-200 hover:text-white'>
              Sobre Nosotros
            </a>
          </Link>

          <Link legacyBehavior href='#'>
            <a className='block mt-4 mr-4 text-gray-200 hover:text-white'>
              Servicios
            </a>
          </Link>

          <Link legacyBehavior href='#'>
            <a className='block mt-4 mr-4 text-gray-200 hover:text-white'>
              Contacto
            </a>
          </Link>

          <Link legacyBehavior href='#'>
            <a className='block mt-4 mr-4 text-gray-200 hover:text-white'>
              Blog
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
