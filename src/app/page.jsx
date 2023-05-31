import Navbar from '../components/navbar';
import LogoTransparent from '../assets/Logo.svg';
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main className='w-9/122'>
        {/* Logo and etc. */}
        <section className='flex flex-col items-center justify-center'>
          <Image src={LogoTransparent} width={500} height={500} alt='Logo' />
          <h1 className='title text-4xl font-bold text-center'>Digital Universe</h1>
        </section>

        {/* Description */}
        <section className='flex flex-col items-center w-fit'>
          <article className='w-10/12'>
            <h1 className='text-4xl font-bold text-center'>
              Bienvenidos a Digital Universe
            </h1>
            <h2 className='text-2xl font-bold text-center'>
              ¿Necesita una mejor forma de hacer crecer su negocio?
            </h2>
            <p className='text-center'>
              Podemos ayudar a su empresa a lograr un excelente posicionamiento
              en Google (Tanto Google Ads como SEO), creando y optimizando no
              sólo campañas interesantes (sin descuidar una inversión
              inteligente) sino también sitios que valgan la pena ser visitados
              y cumplan las políticas del buscador, como asi también
              posicionamiento en Facebook e Instagram a través de Facebook Ads.
            </p>
            <h4 className='text-center mt-5'>
              Diseñamos sitios web y brindamos nuestro servicio de consultoría
              de marketing digital que lo ayudaran a alcanzar sus metas.
            </h4>
          </article>
        </section>

        {/* Footer Component */}
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}
