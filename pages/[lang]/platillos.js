/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import MenuPlatillos from '../../components/MenuPlatillos';
import { en, es } from '../../menuPlatillos.json';

const Platillos = ({ params }) => {
  const { lang } = params;
  return (
    <Layout>
      {lang === 'en' ? (
        <MenuPlatillos lang={en} />
      ) : (
        <MenuPlatillos lang={es} />
      )}
    </Layout>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: { params } // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  };
}

export default Platillos;
