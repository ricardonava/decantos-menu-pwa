/* eslint-disable jsx-a11y/anchor-is-valid */
import MENU from '../menuVinos.json';

export default function Main() {
  return (
    <main>
      {Object.keys(MENU).map((seccion) => (
        <section className="mb-8">
          <h2 className="text-2xl uppercase">{seccion}</h2>
          {MENU[seccion].map((articulo) => (
            <article className="leading-none mt-3 font-medium">
              <h3 className="text-xl font-bold">{articulo.nombre}</h3>
              <p className="text-lg">{articulo.descripcion}</p>
              <p className="text-lg text-gray-500">
                {articulo.botella !== '' ? `$ ${articulo.botella} Botella` : ''}
              </p>
              <p className="text-md text-gray-400">
                {articulo.copa !== '' ? `$ ${articulo.copa} Copa` : ''}
              </p>
            </article>
          ))}
        </section>
      ))}
    </main>
  );
}