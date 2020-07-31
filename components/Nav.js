/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  if (router.route === '/') {
    return null;
  }

  const { lang } = router.query;

  return (
    <nav className="mb-6">
      <ul className="flex">
        <Link href={`/${lang}/vinos`}>
          <li className="flex-1 mr-2 cursor-pointer">
            {router.asPath === `/${lang}/vinos` ? (
              <a className="text-center block border border-gray-900 rounded bg-gray-900 hover:border-gray-700 hover:bg-gray-700 text-white py-2 px-4 h-10">
                <svg
                  className="fill-current h-full w-full justify-center"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 18v-7L0 2V0h20v2l-9 9v7l5 1v1H4v-1l5-1zm2-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
              </a>
            ) : (
              <a className="text-center block border border-gray-500 rounded hover:border-gray-700 text-gray-700 hover:text-gray-900 hover:bg-gray-300 py-2 px-4 h-10">
                <svg
                  className="fill-current h-full w-full justify-center"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 18v-7L0 2V0h20v2l-9 9v7l5 1v1H4v-1l5-1zm2-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
              </a>
            )}
          </li>
        </Link>
        <Link href={`/${lang}/platillos`}>
          <li className="flex-1 mr-2 cursor-pointer">
            {router.asPath === `/${lang}/vinos` ? (
              <a className="text-center block border border-gray-500 rounded hover:border-gray-700 text-gray-700 hover:text-gray-900 hover:bg-gray-300 py-2 px-4 h-10">
                <svg
                  className="fill-current h-full w-full justify-center"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 11v7a2 2 0 0 1-4 0v-5h-2V3a3 3 0 0 1 3-3h3v11zM4 10a2 2 0 0 1-2-2V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v7a2 2 0 0 1-2 2v8a2 2 0 0 1-4 0v-8z" />
                </svg>
              </a>
            ) : (
              <a className="text-center block border border-gray-900 rounded bg-gray-900 hover:border-gray-700 hover:bg-gray-700 text-white py-2 px-4 h-10">
                <svg
                  className="fill-current h-full w-full justify-center"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 11v7a2 2 0 0 1-4 0v-5h-2V3a3 3 0 0 1 3-3h3v11zM4 10a2 2 0 0 1-2-2V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v7a2 2 0 0 1-2 2v8a2 2 0 0 1-4 0v-8z" />
                </svg>
              </a>
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
}

// export async function getStaticProps(context) {
//   const { lang: newLang } = context.params;
//   console.log(newLang);
//   return {
//     props: { newLang } // will be passed to the page component as props
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { lang: 'es' } }, { params: { lang: 'en' } }],
//     fallback: false // See the "fallback" section below
//   };
// }
