import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Decantos Menu</title>
      </Head>
      <body className="font-mono">
        <div className="flex">
          <div className="px-2 py-6 max-w-3xl mx-auto">
            <Header />
            <Nav />
            <Main />
          </div>
        </div>
      </body>
    </html>
  );
}
