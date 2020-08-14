/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <ul className="space-y-4 max-w-2xl mx-auto">
        <li>
          <Link href="/[lang]/vinos" as="/es/vinos">
            <a className="text-center block border hover:border-peach-dark rounded bg-peach text-gray-900 py-2 px-4">
              ESPAÑOL
            </a>
          </Link>
        </li>
        <li>
          <Link href="/[lang]/vinos" as="/en/vinos">
            <a className="text-center block border hover:border-peach-dark rounded bg-peach-lighter text-gray-900 py-2 px-4">
              ENGLISH
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
