/* eslint-disable react/prop-types */
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <body className="font-mono">
      <Nav />
      <div className="flex h-screen max-w-2xl mx-auto items-center">
        <div className="px-2 py-6 m-auto w-screen mx-4">
          <main className="mb-10">{children}</main>
        </div>
      </div>
    </body>
  );
}
