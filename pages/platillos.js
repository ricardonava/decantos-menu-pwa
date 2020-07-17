/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import MENU from '../menu.json';

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>PLATILLOS</title>
      </Head>
      <body className="font-mono">
        <div className="flex">
          <div className="px-2 py-6 max-w-2xl mx-auto">
            <Header />
            <Nav />
            {Object.keys(MENU).map((seccion) => (
              <section className="mb-8">
                <h2 className="text-2xl uppercase">{seccion}</h2>
                {MENU[seccion].map((articulo) => (
                  <article className="leading-none mt-3 font-medium">
                    <h3 className="text-xl font-bold">{articulo.nombre}</h3>
                    <p className="text-lg">{articulo.descripcion}</p>
                    <p className="text-lg text-gray-700">$ {articulo.precio}</p>
                    <p className="text-md text-gray-500">
                      {articulo.maridaje}
                      {articulo.maridaje !== '' ? '**' : ''}
                    </p>
                  </article>
                ))}
              </section>
            ))}
            <section className="text-justify">
              <p className="text-md text-gray-500">
                **RECOMENDACIÓN DE VINO PARA MARIDAR SU PLATILLO
              </p>
              <p className="text-md text-gray-700">
                Todos nuestros platillos son preparados al momento con productos
                locales y disponibilidad, agradecemos su tiempo de espera.
                <br />
                Creamos nuestros platillos para compartir.
                <br />
                <span className="font-bold">Nota:</span> No se permiten cuentas
                separadas.
              </p>
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
