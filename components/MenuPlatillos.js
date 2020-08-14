/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

const MenuPlatillos = ({ lang }) => {
  return (
    <>
      {Object.keys(lang).map((seccion) => (
        <section className="mb-8 text-gray-900">
          <h2 className="text-2xl uppercase text-peach">{seccion}</h2>
          {lang[seccion].map((articulo) => (
            <article className="leading-none mt-3 font-medium">
              <h3 className="text-xl font-bold">{articulo.nombre}</h3>
              <p className="text-lg">{articulo.descripcion}</p>
              <p className="text-lg text-water-dark">$ {articulo.precio}</p>
              <p className="text-md text-peach-dark">
                {articulo.maridaje}
                {articulo.maridaje !== '' ? '**' : ''}
              </p>
            </article>
          ))}
        </section>
      ))}
      <section className="text-justify">
        <p className="text-md text-peach-dark">
          ** RECOMENDACIÓN DE VINO PARA MARIDAR SU PLATILLO
        </p>
        <p className="text-md text-water">
          Todos nuestros platillos son preparados al momento con productos
          locales y disponibilidad, agradecemos su tiempo de espera.
          <br />
          Creamos nuestros platillos para compartir.
          <br />
          <span className="font-bold">Nota:</span> No se permiten cuentas
          separadas.
        </p>
      </section>
    </>
  );
};

export default MenuPlatillos;
