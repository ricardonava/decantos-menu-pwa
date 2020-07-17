/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const { route } = useRouter();
  return (
    <nav className="mb-6">
      <ul className="flex">
        <Link href="/">
          <li className="flex-1 mr-2 cursor-pointer">
            {route === '/' ? (
              <a className="text-center block border border-gray-900 rounded bg-gray-900 hover:border-gray-700 hover:bg-gray-700 text-white py-2 px-4">
                VINOS
              </a>
            ) : (
              <a className="text-center block border border-gray-500 rounded hover:border-gray-700 text-gray-700 hover:text-gray-900 hover:bg-gray-300 py-2 px-4">
                VINOS
              </a>
            )}
          </li>
        </Link>
        <Link href="/platillos">
          <li className="flex-1 mr-2 cursor-pointer">
            {route === '/' ? (
              <a className="text-center block border border-gray-500 rounded hover:border-gray-700 text-gray-700 hover:text-gray-900 hover:bg-gray-300 py-2 px-4">
                PLATILLOS
              </a>
            ) : (
              <a className="text-center block border border-gray-900 rounded bg-gray-900 hover:border-gray-700 hover:bg-gray-700 text-white py-2 px-4">
                PLATILLOS
              </a>
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
}
