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
    <nav className='sticky top-0 z-10 p-2 w-full backdrop-blur-sm bg-cyan/90'>
      <div className='flex justify-between h-[50px] ml-2 mr-2'>
        <div className='flex items-center w-3/12 h-[50px]'>
          <Link legacyBehavior href='/'>
            <a>
              <Image
                src={Logo}
                alt='Logo de Digital Universe - Marketing Digital'
                width={50}
                height={50}
                title='Inicio'
              />
            </a>
          </Link>
        </div>

        <div className='container flex w-6/12 h-[50px] justify-center items-center'>
          <div className='hidden sm:flex'>
            <Link legacyBehavior href='/'>
              <a>
                <h1 className='text-2xl font-semibold' title='Inicio'>
                  Digital Universe
                </h1>
              </a>
            </Link>
          </div>
        </div>

        <div className='flex justify-end w-3/12 xl:hidden'>
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
                className='absolute -right-6 top-[50px] p-2 mt-2 w-max shadow-lg backdrop-blur-sm bg-cyan/90'
              >
                <div className='text-base font-semibold'>
                  <Link legacyBehavior href='#'>
                    <a className='block px-4 py-2'>Inicio</a>
                  </Link>

                  <Link legacyBehavior href='#'>
                    <a className='block px-4 py-2'>Sobre Nosotros</a>
                  </Link>

                  <Link legacyBehavior href='#'>
                    <a className='block px-4 py-2'>Servicios</a>
                  </Link>

                  <Link legacyBehavior href='#'>
                    <a className='block px-4 py-2'>Contacto</a>
                  </Link>

                  <Link legacyBehavior href='#'>
                    <a className='block px-4 py-2'>Blog</a>
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </div>

        <div className='hidden xl:flex xl:w-3/12'>
          <div className='flex justify-end text-base font-semibold'>
            <Link legacyBehavior href='#'>
              <a className='mt-4 mr-4' title='Inicio'>Inicio</a>
            </Link>

            <Link legacyBehavior href='#'>
              <a className='mt-4 mr-4' title='Sobre Nosotros'>Nosotros</a>
            </Link>

            <Link legacyBehavior href='#'>
              <a className='mt-4 mr-4' title='Servicios'>Servicios</a>
            </Link>

            <Link legacyBehavior href='#'>
              <a className='mt-4 mr-4' title='Contacto'>Contacto</a>
            </Link>

            <Link legacyBehavior href='#'>
              <a className='mt-4 mr-4' title='Blog'>Blog</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
