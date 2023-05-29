import Image from 'next/image';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  return (
    <div className='sticky top-0 z-50 w-full m-4'>
      <div className='sticky top-0 z-50 flex items-center justify-between w-full h-20 bg-slate-600 px-4'>
        <div className='flex items-center'>
          <Image src={Logo} alt='Logo' width={100} height={100} />
        </div>
        <ul className='flex items-center'>
          <li className='ml-4 text-xl font-bold'>
            <a href='/'>Inicio</a>
          </li>
          <li className='ml-4 text-xl font-bold'>
            <a href='/contacto'>Servicios</a>
          </li>
          <li className='ml-4 text-xl font-bold'>
            <a href='/contacto'>Contacto</a>
          </li>
          <li className='ml-4 text-xl font-bold'>
            <a href='/sobre-nosotros'>Sobre Nosotros</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
