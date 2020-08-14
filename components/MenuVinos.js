/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

const MenuVinos = ({ lang }) => {
  return (
    <>
      {Object.keys(lang).map((seccion) => (
        <section className="mb-8 text-gray-900">
          <h2 className="text-2xl uppercase text-peach">{seccion}</h2>
          {lang[seccion].map((articulo) => (
            <article className="leading-none mt-3 font-medium">
              <h3 className="text-xl font-bold">{articulo.nombre}</h3>
              <p className="text-lg">{articulo.descripcion}</p>
              <p className="text-lg text-water-dark">
                {articulo.botella !== '' ? `$ ${articulo.botella} Botella` : ''}
              </p>
              <p className="text-md text-peach-dark">
                {articulo.copa !== '' ? `$ ${articulo.copa} Copa` : ''}
              </p>
            </article>
          ))}
        </section>
      ))}
    </>
  );
};

export default MenuVinos;
