/* eslint-disable react/prop-types */
import Layout from '../../components/Layout';
import MenuVinos from '../../components/MenuVinos';
import { en, es } from '../../menuVinos.json';

const Vinos = ({ params }) => {
  const { lang } = params;
  return (
    <Layout>
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
