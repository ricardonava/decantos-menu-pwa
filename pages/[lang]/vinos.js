/* eslint-disable react/prop-types */
import Link from 'next/link';
import Layout from '../../components/Layout';
import MenuVinos from '../../components/MenuVinos';
import { en, es } from '../../menuVinos.json';

const Vinos = ({ params }) => {
  const { lang } = params;
  return (
    <Layout>
      <div className="flex justify-end mr-8">
        {lang === 'en' ? (
          <Link href="/es/vinos">
            <h2 className="cursor-pointer font-bold text-peach-dark">
              ESPAÑOL
            </h2>
          </Link>
        ) : (
          <Link href="/en/vinos">
            <h2 className="cursor-pointer font-bold text-peach-dark">
              ENGLISH
            </h2>
          </Link>
        )}
      </div>
      {lang === 'en' ? <MenuVinos lang={en} /> : <MenuVinos lang={es} />}
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

export default Vinos;
