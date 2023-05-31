import Image from 'next/image';
import Logo from '../assets/Logo.svg';
import Navbar from './navbar';

export default function Footer() {
  return (
    <footer>
      {/* Main Section */}
      <section className='items-center justify-center'>
        {/* Grid Container */}
        <div className='inline-grid gap-4 grid-cols-3 w-full items-center place-items-center'>
          {/* Services */}
          <article>
            <h2>Servicios</h2>
            <ul>
              <li>Fascinating</li>
              <li>Fascinating</li>
              <li>Fascinating</li>
              <li>Fascinating</li>
              <li>Fascinating</li>
            </ul>
          </article>

          {/* Logo and links */}
          <article className='flex flex-col items-center'>
            <Image src={Logo} alt='Logo' height={100} width={100} />
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
          </article>

          {/* Contact */}
          <article>
            <h2>Contacto</h2>
            <ul>
              <li>Direction</li>
              <li>Phone Number</li>
              <li>Email Address</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Important Section */}
      <section className='bg-slate-600 mt-2'>
        <article className='flex items-center justify-evenly'>
          <p>
            <a href='#'>Politica de Privacidad</a>
          </p>

          <p>
            <a href='#'>Terminos y Condiciones</a>
          </p>
        </article>
      </section>
    </footer>
  );
}
