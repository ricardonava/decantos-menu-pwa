/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Layout from '../components/Layout';

import Header from '../components/Header';

export default function Home() {
  return (
    <Layout>
      <Header />
      <main>
        <ul className="space-y-4">
          <li>
            <Link href="/[lang]/vinos" as="/es/vinos">
              <a className="text-center block border border-gray-900 rounded bg-gray-900 hover:border-gray-700 hover:bg-gray-700 text-white py-2 px-4">
                ESPAÑOL
              </a>
            </Link>
          </li>
          <li>
            <Link href="/[lang]/vinos" as="/en/vinos">
              <a className="text-center block border border-gray-500 rounded hover:border-gray-700 text-gray-700 hover:text-gray-900 hover:bg-gray-300 py-2 px-4">
                ENGLISH
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
