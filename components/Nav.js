/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';
import FoodIcon from './FoodIcon';
import BeverageIcon from './Beverage';

export default function Nav() {
  const router = useRouter();
  if (router.route === '/') {
    return null;
  }

  const { lang } = router.query;

  return (
    <nav className="fixed w-full bottom-0">
      <ul className="flex max-w-2xl mx-auto bg-white">
        <Link href={`/${lang}/vinos`}>
          <li className="flex-1 cursor-pointer">
            {router.asPath === `/${lang}/vinos` ? (
              <a className="text-center block border border-gray-900 bg-gray-900 hover:border-gray-700 hover:bg-gray-700 text-white py-2 px-4 h-10">
                <FoodIcon />
              </a>
            ) : (
              <a className="text-center block border border-gray-500 hover:border-gray-700 text-gray-700 hover:text-gray-900 hover:bg-gray-300 py-2 px-4 h-10">
                <FoodIcon />
              </a>
            )}
          </li>
        </Link>
        <Link href={`/${lang}/platillos`}>
          <li className="flex-1 cursor-pointer">
            {router.asPath === `/${lang}/vinos` ? (
              <a className="text-center block border border-gray-500 hover:border-gray-700 text-gray-700 hover:text-gray-900 hover:bg-gray-300 py-2 px-4 h-10">
                <BeverageIcon />
              </a>
            ) : (
              <a className="text-center block border border-gray-900 bg-gray-900 hover:border-gray-700 hover:bg-gray-700 text-white py-2 px-4 h-10">
                <BeverageIcon />
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
