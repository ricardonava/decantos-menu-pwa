/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from './Header';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <body className="font-mono">
      <div className="flex h-screen max-w-2xl mx-auto items-center">
        <div className="px-2 py-6 m-auto w-screen mx-4">
          <Header />
          <Nav />
          {children}
        </div>
      </div>
    </body>
  );
}
