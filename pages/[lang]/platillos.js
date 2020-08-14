/* eslint-disable react/prop-types */
import Link from 'next/link';
import Layout from '../../components/Layout';
import MenuPlatillos from '../../components/MenuPlatillos';
import { en, es } from '../../menuPlatillos.json';

const Platillos = ({ params }) => {
  const { lang } = params;
  return (
    <Layout>
      <div className="flex justify-end mr-8">
        {lang === 'en' ? (
          <Link href="/es/platillos">
            <h2 className="cursor-pointer font-bold text-peach-dark">
              ESPAÑOL
            </h2>
          </Link>
        ) : (
          <Link href="/en/platillos">
            <h2 className="cursor-pointer font-bold text-peach-dark">
              ENGLISH
            </h2>
          </Link>
        )}
      </div>
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
