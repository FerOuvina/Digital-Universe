import Image from 'next/image';
import Link from 'next/link';

import Logo from '../assets/Logo.svg';
import WhatsappLogo from '../assets/Whatsapp-Logo.svg';
import MailLogo from '../assets/Mail-Logo.svg';
import LocationLogo from '../assets/Location-Logo.svg';
import FacebookLogo from '../assets/Facebook-Logo.svg';
import InstagramLogo from '../assets/Instagram-Logo.svg';

const logoWidth = 30;
const logoHeight = 30;

export default function Footer() {
  return (
    <footer className='text-white bg-gray-900'>
      <section className='flex flex-col justify-between items-center w-full lg:hidden'>
        {/* Logo */}
        <div>
          <Link href='/'>
            <Image src={Logo} alt='Logo' width={150} height={150} />
          </Link>
        </div>

        {/* Services */}
        <div className='flex flex-col justify-between items-center mt-4'>
          <h3 className='text-3xl'>Servicios</h3>
          <ul className='p-2 text-center'>
            <li className='p-2 text-1xl'>
              <Link href='#'>Community Management</Link>
            </li>
            <li className='p-2 text-1xl'>
              <Link href='#'>Desarrollo Web</Link>
            </li>
            <li className='p-2 text-1xl'>
              <Link href='#'>Diseño Gráfico</Link>
            </li>
            <li className='p-2 text-1xl'>
              <Link href='#'>Marketing Digital</Link>
            </li>
            <li className='p-2 text-1xl'>
              <Link href='#'>Posicionamiento SEO</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <article className='flex flex-col justify-between items-center mt-6'>
          <h3 className='m-2 text-3xl'>Contacto</h3>

          <address className='flex flex-col gap-2 justify-between items-center'>
            <div className='flex items-center'>
              <Image
                src={WhatsappLogo}
                alt='Whatsapp Logo'
                width={logoWidth}
                height={logoHeight}
              />
              <a href='tel:+5491156519018'>+54 9 11 5651-9018</a>
            </div>

            <div className='flex items-center'>
              <Image
                src={MailLogo}
                alt='Mail Logo'
                width={logoWidth}
                height={logoHeight}
              />
              <a href='mailto:digitaluniverse.amd@gmail.com'>
                digitaluniverse.amd@gmail.com
              </a>
            </div>

            <div className='flex items-center'>
              <Image
                src={LocationLogo}
                alt='Location Logo'
                width={logoWidth}
                height={logoHeight}
              />
              <p>Capital Federal, Buenos Aires, Argentina</p>
            </div>

            <div className='flex justify-evenly items-center mt-4 w-full'>
              <Link href='#'>
                <Image
                  src={FacebookLogo}
                  alt='Facebook Logo'
                  width={logoWidth}
                  height={logoHeight}
                />
              </Link>

              <Link href='#'>
                <Image
                  src={InstagramLogo}
                  alt='Instagram Logo'
                  width={logoWidth}
                  height={logoHeight}
                />
              </Link>
            </div>
          </address>
        </article>

        {/* Legals */}
        <div className='flex flex-col justify-between items-center mt-6 w-full bg-slate-600'>
          <Link href='#'>Política de privacidad</Link>
          <Link href='#'>Términos y condiciones</Link>
        </div>
      </section>

      {/* Footer for bigger screens starting from 1024px */}
      <div className='hidden lg:flex'>
        <section className='flex flex-col items-center w-full h-auto text-white bg-slate-600'>
          <div className='flex justify-around items-center w-full'>
            {/* Services */}
            <div className='flex flex-col justify-center items-center w-4/12 h-[248px]'>
              <h3 className='text-3xl'>Servicios</h3>
              <ul className='text-right'>
                <li className='text-xl'>
                  <Link href='#'>Community Management</Link>
                </li>
                <li className='text-xl'>
                  <Link href='#'>Desarrollo Web</Link>
                </li>
                <li className='text-xl'>
                  <Link href='#'>Diseño Gráfico</Link>
                </li>
                <li className='text-xl'>
                  <Link href='#'>Marketing Digital</Link>
                </li>
                <li className='text-xl'>
                  <Link href='#'>Posicionamiento SEO</Link>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <div className='flex flex-col justify-center items-center w-4/12 h-[248px]'>
              <Link href='/'>
                <Image src={Logo} width={220} height={220} alt='Logo' />
              </Link>
              <ul className='flex justify-center items-center w-full text-xl'>
                <li>
                  <Link legacyBehavior href='#'>
                    <a className='block mr-1 ml-1 text-gray-200 hover:text-white'>
                      Inicio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href='#'>
                    <a className='block mr-1 ml-1 text-gray-200 hover:text-white'>
                      Nosotros
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href='#'>
                    <a className='block mr-1 ml-1 text-gray-200 hover:text-white'>
                      Servicios
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href='#'>
                    <a className='block mr-1 ml-1 text-gray-200 hover:text-white'>
                      Contacto
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href='#'>
                    <a className='block mr-1 ml-1 text-gray-200 hover:text-white'>
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <article className='flex flex-col justify-center items-center w-4/12 h-[248px]'>
              <h3 className='m-2 text-3xl'>Contacto</h3>

              <address className='flex flex-col gap-2 justify-between items-start'>
                <div className='flex gap-1 items-center'>
                  <Image
                    src={WhatsappLogo}
                    alt='Whatsapp Logo'
                    width={logoWidth}
                    height={logoHeight}
                  />
                  <a href='tel:+5491156519018'>+54 9 11 5651-9018</a>
                </div>

                <div className='flex gap-1 items-center'>
                  <Image
                    src={MailLogo}
                    alt='Mail Logo'
                    width={logoWidth}
                    height={logoHeight}
                  />
                  <a href='mailto:digitaluniverse.amd@gmail.com'>
                    digitaluniverse.amd@gmail.com
                  </a>
                </div>

                <div className='flex gap-1 items-center'>
                  <Image
                    src={LocationLogo}
                    alt='Location Logo'
                    width={logoWidth}
                    height={logoHeight}
                  />
                  <p>Capital Federal, Buenos Aires, Argentina</p>
                </div>

                <div className='flex justify-evenly items-center w-full'>
                  <Link href='#'>
                    <Image
                      src={FacebookLogo}
                      alt='Facebook Logo'
                      width={logoWidth}
                      height={logoHeight}
                    />
                  </Link>

                  <Link href='#'>
                    <Image
                      src={InstagramLogo}
                      alt='Instagram Logo'
                      width={logoWidth}
                      height={logoHeight}
                    />
                  </Link>
                </div>
              </address>
            </article>
          </div>

          {/* Legals */}
          <div className='flex justify-evenly items-center mt-6 w-full bg-amber-200 text-red-950'>
            <Link href='#'>Política de privacidad</Link>
            <Link href='#'>Términos y condiciones</Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
