/* eslint-disable react/prop-types */
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <body className="font-mono bg-peach">
      <Nav />
      <div className="flex h-screen max-w-6xl mx-auto items-center bg-white">
        <div className="px-2 py-6 m-auto w-screen mx-auto bg-white">
          <main className="mb-10">{children}</main>
        </div>
      </div>
    </body>
  );
};

export default Layout;
