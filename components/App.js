/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';

export default function App({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>PLATILLOS</title>
      </Head>
      <body className="font-mono">
        <div className="flex max-w-2xl mx-auto">
          <div className="px-2 py-6 w-screen mx-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
