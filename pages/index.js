/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import menu from '../menu.json';

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Decantos Menu</title>
      </Head>
      <body className="font-mono">
        <div className="flex">
          <div className="px-2 py-6 max-w-2xl mx-auto">
            <header className="flex">
              <img
                className="mx-auto mb-6"
                alt="DECANTOS"
                src="https://static.wixstatic.com/media/6ad50f_e5a06ecb811d44929bb9bf96fe327ad6~mv2.jpg/v1/fill/w_132,h_120,al_c,q_80,usm_0.66_1.00_0.01/LISTA%20DE%20VINO%202020-01.webp"
              />
            </header>
            <nav className="mb-6">
              <ul className="flex">
                <li className="flex-1 mr-2">
                  <a
                    className="text-center block border border-gray-400 rounded hover:border-gray-700 text-gray-500 hover:bg-gray-200 py-2 px-4"
                    href="#"
                  >
                    VINOS
                  </a>
                </li>
                <li className="flex-1 mr-2">
                  <a
                    className="text-center block border border-gray-700 rounded py-2 px-4 bg-gray-700 hover:bg-gray-900 text-white"
                    href="#"
                  >
                    PLATILLOS
                  </a>
                </li>
              </ul>
            </nav>
            {Object.keys(menu).map((seccion) => (
              <section className="mb-8">
                <h2 className="text-2xl uppercase">{seccion}</h2>
                {menu[seccion].map((articulo) => (
                  <article className="leading-none mt-3 font-medium">
                    <h3 className="text-xl font-semibold">{articulo.nombre}</h3>
                    <p className="text-lg font-light">{articulo.descripcion}</p>
                    <p className="text-lg text-gray-700">$ {articulo.precio}</p>
                    <p className="text-md text-gray-500">
                      {articulo.maridaje}
                      {articulo.maridaje !== '' ? '**' : ''}
                    </p>
                  </article>
                ))}
              </section>
            ))}
            <section>
              <p className="text-lg text-gray-500">
                **RECOMENDACIÓN DE VINO PARA MARIDAR SU PLATILLO
              </p>
              <p className="text-lg text-gray-700">
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
